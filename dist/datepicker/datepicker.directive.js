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
import { Directive, ElementRef, HostBinding, Input, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzDatepickerDirective = (function (_super) {
    __extends(MzDatepickerDirective, _super);
    function MzDatepickerDirective(ngControl, elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.ngControl = ngControl;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        // materialize uses pickadate.js to create the datepicker
        // complete list of options is available at the following address
        // http://amsul.ca/pickadate.js/date/#options
        _this.options = {};
        _this.stopChangePropagation = false;
        return _this;
    }
    Object.defineProperty(MzDatepickerDirective.prototype, "format", {
        get: function () {
            return this.options.format || this.options.formatSubmit || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzDatepickerDirective.prototype, "formatSubmit", {
        get: function () {
            return this.options.formatSubmit || this.options.format || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzDatepickerDirective.prototype, "ngControlValue", {
        get: function () {
            return this.ngControl.value === '' ? null : this.ngControl.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzDatepickerDirective.prototype, "picker", {
        get: function () {
            return this.inputElement.pickadate('picker');
        },
        enumerable: true,
        configurable: true
    });
    MzDatepickerDirective.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initElements();
        this.initDatepicker();
        this.initInputSubscription();
        this.handleProperties();
    };
    MzDatepickerDirective.prototype.ngOnDestroy = function () {
        if (this.inputValueSubscription) {
            this.inputValueSubscription.unsubscribe();
        }
    };
    MzDatepickerDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            label: function () { return _this.handleLabel(); },
            placeholder: function () { return _this.handlePlaceholder(); },
        };
    };
    MzDatepickerDirective.prototype.initElements = function () {
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.inputElement = $(this.elementRef.nativeElement);
        this.labelElement = this.createLabelElement();
    };
    MzDatepickerDirective.prototype.initDatepicker = function () {
        var _this = this;
        // set default format/formatSubmit options
        if (this.format) {
            this.options.format = this.format;
        }
        if (this.formatSubmit) {
            this.options.formatSubmit = this.formatSubmit;
        }
        // extends onClose function to fix datepicker focus issue
        // https://github.com/Dogfalo/materialize/issues/2067#issuecomment-142107599
        var onCloseFn = this.options && this.options.onClose || (function () { });
        this.options = Object.assign({}, this.options, {
            onClose: function (event) {
                onCloseFn(event);
                _this.renderer.invokeElementMethod(document.activeElement, 'blur');
            },
        });
        this.renderer.invokeElementMethod(this.inputElement, 'pickadate', [this.options]);
        if (this.ngControl) {
            // set datepicker initial value according to ngControl
            this.picker.set('select', this.ngControlValue, { format: this.formatSubmit });
            // set ngControl value according to selected date in datepicker
            this.picker.on('set', function () {
                // handle stop propagation
                if (_this.stopChangePropagation) {
                    _this.stopChangePropagation = false;
                    return;
                }
                else {
                    _this.stopChangePropagation = true;
                }
                // apply options.formatSubmit to ngControl value
                var submitValue = _this.formatSubmit
                    ? _this.picker.get('select', _this.formatSubmit)
                    : _this.picker.get('value');
                _this.ngControl.control.setValue(submitValue);
                // apply options.format to input text
                var formatValue = _this.format
                    ? _this.picker.get('select', _this.format)
                    : _this.picker.get('value');
                _this.inputElement.val(formatValue);
                // set label active status
                _this.setLabelActive();
            });
        }
    };
    MzDatepickerDirective.prototype.initInputSubscription = function () {
        var _this = this;
        if (this.ngControl) {
            this.inputValueSubscription = this.ngControl.valueChanges.subscribe(function () {
                // handle stop propagation
                if (_this.stopChangePropagation) {
                    _this.stopChangePropagation = false;
                    return;
                }
                else {
                    _this.stopChangePropagation = true;
                }
                // set selected date in datepicker according to ngControl value
                _this.picker.set('select', _this.ngControlValue, { format: _this.formatSubmit });
                // set label active status
                _this.setLabelActive();
            });
        }
    };
    MzDatepickerDirective.prototype.createLabelElement = function () {
        var labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    };
    MzDatepickerDirective.prototype.handleProperties = function () {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-datepicker directive must be placed inside an [mz-datepicker-container] tag', this.inputElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    MzDatepickerDirective.prototype.handleLabel = function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    MzDatepickerDirective.prototype.handlePlaceholder = function () {
        var _this = this;
        var placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty and trigger validation
        // on page load... note that it still trigger validation on focus and would need a better fix
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            setTimeout(function () { return _this.ngControl.control.markAsPristine(); });
        }
        this.setLabelActive();
    };
    MzDatepickerDirective.prototype.setLabelActive = function () {
        var _this = this;
        // need setTimeout otherwise it wont make label float in some circonstances (forcing validation for example)
        setTimeout(function () {
            var inputValue = _this.inputElement[0].value;
            var isActive = !!_this.placeholder || !!inputValue;
            _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
        });
    };
    return MzDatepickerDirective;
}(HandlePropChanges));
export { MzDatepickerDirective };
MzDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzDatepicker], input[mz-datepicker]',
            },] },
];
/** @nocollapse */
MzDatepickerDirective.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzDatepickerDirective.propDecorators = {
    'true': [{ type: HostBinding, args: ['class.datepicker',] },],
    'id': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'label': [{ type: Input },],
    'options': [{ type: Input },],
};