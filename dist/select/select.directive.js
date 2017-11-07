var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzSelectDirective = (function (_super) {
    __extends(MzSelectDirective, _super);
    function MzSelectDirective(changeDetectorRef, elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.onUpdate = new EventEmitter();
        _this.suspend = false;
        return _this;
    }
    Object.defineProperty(MzSelectDirective.prototype, "inputElement", {
        get: function () {
            return this.selectElement.siblings('input.select-dropdown');
        },
        enumerable: true,
        configurable: true
    });
    MzSelectDirective.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initElements();
        this.initOnChange();
        this.handleProperties();
        // must be done after handlePlaceholder
        this.initSelectedOption();
        // must be done after handleProperties
        this.initMaterialSelect();
        // must be done after initMaterialSelect
        this.listenOptionChanges();
        this.initFilledIn();
        this.handleDOMEvents();
    };
    MzSelectDirective.prototype.ngOnDestroy = function () {
        this.renderer.invokeElementMethod(this.selectElement, 'material_select', ['destroy']);
        this.selectElement.off();
        this.mutationObserver.disconnect();
    };
    MzSelectDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            disabled: function () { return _this.handleDisabled(); },
            label: function () { return _this.handleLabel(); },
            placeholder: function () { return _this.handlePlaceholder(); },
        };
    };
    MzSelectDirective.prototype.initElements = function () {
        this.selectElement = $(this.elementRef.nativeElement);
        this.selectContainerElement = $(this.elementRef.nativeElement).parents('.input-field');
        this.labelElement = this.createLabelElement();
    };
    /**
     * Need to be done after material_select has been invoked or else the multi-select
     * options are not yet in the DOM as it loops on rendered options
     */
    MzSelectDirective.prototype.initFilledIn = function () {
        var _this = this;
        this.checkboxElements = this.selectContainerElement.find(':checkbox');
        this.handlers['filledIn'] = function () { return _this.handleFilledIn(); };
        this.handleFilledIn();
    };
    MzSelectDirective.prototype.initMaterialSelect = function () {
        this.renderer.invokeElementMethod(this.selectElement, 'material_select');
    };
    /**
     * Trigger the native change event from select element instead of the JQuery.
     * An issue on Github is open about this problem : https://github.com/Dogfalo/materialize/issues/2843
     * This method should be removed when this issue is revolved.
     */
    MzSelectDirective.prototype.initOnChange = function () {
        var _this = this;
        this.selectElement.on('change', function (event) {
            if (!_this.suspend) {
                _this.suspend = true;
                var customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent('change', true, false, event.target.value);
                _this.renderer.invokeElementMethod(_this.selectElement[0], 'dispatchEvent', [customEvent]);
            }
        });
        // Stop the propagation of change event
        this.selectElement[0].addEventListener('change', function () {
            _this.suspend = false;
        });
    };
    MzSelectDirective.prototype.handleDOMEvents = function () {
        var _this = this;
        this.inputElement.on('blur focus', function (event) {
            _this.selectElement[0].dispatchEvent(new Event(event.type));
        });
    };
    MzSelectDirective.prototype.createLabelElement = function () {
        var labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.selectElement, 'after', [labelElement]);
        return $(labelElement);
    };
    MzSelectDirective.prototype.handleProperties = function () {
        if (this.selectContainerElement.length === 0) {
            console.error('Select with mz-select directive must be place inside a [mz-select-container] tag', this.selectElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    MzSelectDirective.prototype.initSelectedOption = function () {
        var firstOptionElement = this.selectElement.children().first();
        if (firstOptionElement.length > 0
            && this.selectElement.children('option[selected]').length === 0
            && !this.selectElement[0].hasAttribute('multiple')) {
            this.renderer.setElementAttribute(firstOptionElement[0], 'selected', '');
        }
    };
    MzSelectDirective.prototype.handleDisabled = function () {
        // when disabled is null/undefined that means the property has not been used on the element
        // but it might be set by another process (for example reactive form applies disabled attribute itself)
        // therefore we don't want to remove or add it here
        if (this.disabled != null) {
            this.renderer.setElementProperty(this.selectElement[0], 'disabled', !!this.disabled);
            this.updateMaterialSelect();
        }
    };
    MzSelectDirective.prototype.handleLabel = function () {
        if (this.label != null) {
            this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
        }
    };
    MzSelectDirective.prototype.handleFilledIn = function () {
        var _this = this;
        if (this.checkboxElements.length > 0) {
            this.checkboxElements.toArray().forEach(function (checkboxElement) {
                _this.renderer.setElementClass(checkboxElement, 'filled-in', !!_this.filledIn);
            });
        }
    };
    MzSelectDirective.prototype.handlePlaceholder = function () {
        var placeholderElement = this.selectElement.children(':disabled').first();
        // if placeholder element exists
        if (placeholderElement.length > 0) {
            if (this.placeholder) {
                // update existing placeholder element
                this.renderer.invokeElementMethod(placeholderElement, 'text', [this.placeholder]);
            }
            else {
                // remove existing placeholder element
                this.renderer.invokeElementMethod(placeholderElement, 'remove');
                // Force trigger change event since it's not triggered when value change programmatically
                this.renderer.invokeElementMethod(this.selectElement, 'change');
                // Required if we don't want exception "Expression has changed after it was checked." https://github.com/angular/angular/issues/6005
                this.changeDetectorRef.detectChanges();
            }
        }
        else {
            if (this.placeholder) {
                // add placeholder element
                var placeholderText = document.createTextNode(this.placeholder);
                var placeholderOption = document.createElement('option');
                placeholderOption.disabled = true;
                placeholderOption.value = null;
                placeholderOption.appendChild(placeholderText);
                this.renderer.invokeElementMethod(this.selectElement, 'prepend', [placeholderOption]);
            }
        }
        this.initMaterialSelect();
    };
    MzSelectDirective.prototype.listenOptionChanges = function () {
        var _this = this;
        var mutationObserverConfiguration = {
            childList: true,
        };
        this.mutationObserver = new MutationObserver(function (mutations) {
            _this.updateMaterialSelect();
        });
        this.mutationObserver.observe(this.selectElement[0], mutationObserverConfiguration);
    };
    MzSelectDirective.prototype.updateMaterialSelect = function () {
        var _this = this;
        this.initMaterialSelect();
        if (this.filledIn) {
            this.initFilledIn();
        }
        this.handleDOMEvents();
        // wait for materialize select to be initialized
        // /!\ race condition warning /!\
        setTimeout(function () { return _this.onUpdate.emit(); });
    };
    return MzSelectDirective;
}(HandlePropChanges));
export { MzSelectDirective };
MzSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: 'select[mzSelect], select[mz-select]',
            },] },
];
/** @nocollapse */
MzSelectDirective.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzSelectDirective.propDecorators = {
    'id': [{ type: Input },],
    'disabled': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'label': [{ type: Input },],
    'filledIn': [{ type: Input },],
    'onUpdate': [{ type: Output },],
};
