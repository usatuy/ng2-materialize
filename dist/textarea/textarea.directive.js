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
import { Directive, ElementRef, Input, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzTextareaDirective = (function (_super) {
    __extends(MzTextareaDirective, _super);
    function MzTextareaDirective(ngControl, elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.ngControl = ngControl;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    MzTextareaDirective.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initElements();
        this.initTextareaSubscription();
        this.handleProperties();
    };
    MzTextareaDirective.prototype.ngOnDestroy = function () {
        if (this.textareaValueSubscription) {
            this.textareaValueSubscription.unsubscribe();
        }
    };
    MzTextareaDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            label: function () { return _this.handleLabel(); },
            length: function () { return _this.handleLength(); },
            placeholder: function () { return _this.handlePlaceholder(); },
        };
    };
    MzTextareaDirective.prototype.initElements = function () {
        this.textareaElement = $(this.elementRef.nativeElement);
        this.textareaContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.labelElement = this.createLabelElement();
        this.initTextarea();
    };
    MzTextareaDirective.prototype.initTextarea = function () {
        this.renderer.setElementClass(this.textareaElement[0], 'materialize-textarea', true);
    };
    MzTextareaDirective.prototype.initTextareaSubscription = function () {
        var _this = this;
        if (this.ngControl) {
            this.textareaValueSubscription = this.ngControl.valueChanges.subscribe(function () { return _this.setLabelActive(); });
        }
    };
    MzTextareaDirective.prototype.createLabelElement = function () {
        var labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.textareaElement, 'after', [labelElement]);
        return $(labelElement);
    };
    MzTextareaDirective.prototype.handleProperties = function () {
        if (this.textareaContainerElement.length === 0) {
            console.error('Textarea must be placed inside a [mz-textarea-container] tag', this.textareaElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    MzTextareaDirective.prototype.handleLabel = function () {
        if (this.placeholder || this.textareaElement.val()) {
            this.renderer.setElementClass(this.labelElement[0], 'active', true);
        }
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    MzTextareaDirective.prototype.handleLength = function () {
        var length = this.length ? this.length.toString() : null;
        this.renderer.setElementAttribute(this.textareaElement[0], 'data-length', length);
        if (length) {
            this.setCharacterCount();
        }
        else {
            this.removeCharacterCount();
        }
    };
    MzTextareaDirective.prototype.handlePlaceholder = function () {
        var placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.textareaElement[0], 'placeholder', placeholder);
        this.setLabelActive();
    };
    MzTextareaDirective.prototype.setCharacterCount = function () {
        var _this = this;
        this.renderer.invokeElementMethod(this.textareaElement, 'characterCounter');
        // force validation
        // need setTimeout otherwise it wont trigger validation right away
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.textareaElement, 'trigger', ['input']);
            _this.renderer.invokeElementMethod(_this.textareaElement, 'trigger', ['blur']);
        });
    };
    MzTextareaDirective.prototype.setLabelActive = function () {
        var _this = this;
        // need setTimeout otherwise it wont make label float in some circonstances
        // for example: forcing validation for example, reseting form programmaticaly, ...
        setTimeout(function () {
            var textareaValue = _this.textareaElement[0].value;
            var isActive = !!_this.placeholder || !!textareaValue;
            _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
        });
    };
    MzTextareaDirective.prototype.removeCharacterCount = function () {
        this.renderer.invokeElementMethod(this.textareaElement.siblings('.character-counter'), 'remove');
        this.removeValidationClasses();
    };
    MzTextareaDirective.prototype.removeValidationClasses = function () {
        // reset valid/invalid state
        this.renderer.setElementClass(this.textareaElement[0], 'invalid', false);
        this.renderer.setElementClass(this.textareaElement[0], 'valid', false);
    };
    return MzTextareaDirective;
}(HandlePropChanges));
export { MzTextareaDirective };
MzTextareaDirective.decorators = [
    { type: Directive, args: [{
                selector: 'textarea[mzTextarea], textarea[mz-textarea]',
            },] },
];
/** @nocollapse */
MzTextareaDirective.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzTextareaDirective.propDecorators = {
    'id': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'label': [{ type: Input },],
    'length': [{ type: Input },],
};
