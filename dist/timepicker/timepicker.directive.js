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
import { Directive, ElementRef, HostBinding, Input, NgZone, Optional, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzTimepickerDirective = (function (_super) {
    __extends(MzTimepickerDirective, _super);
    function MzTimepickerDirective(ngControl, elementRef, renderer, zone) {
        var _this = _super.call(this) || this;
        _this.ngControl = ngControl;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.zone = zone;
        // materialize uses ClockPicker to create the timepicker
        // complete list of options is available at the following address
        // https://github.com/weareoutman/clockpicker#options
        _this.options = {};
        _this.stopChangePropagation = false;
        return _this;
    }
    Object.defineProperty(MzTimepickerDirective.prototype, "clockpicker", {
        get: function () {
            return $('.clockpicker');
        },
        enumerable: true,
        configurable: true
    });
    MzTimepickerDirective.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initElements();
        this.initTimepicker();
        this.handleProperties();
    };
    MzTimepickerDirective.prototype.ngOnDestroy = function () {
        // remove event handlers
        this.inputElement.off();
        // remove clockpicker added to body by default
        this.clockpicker.remove();
    };
    MzTimepickerDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            label: function () { return _this.handleLabel(); },
            placeholder: function () { return _this.handlePlaceholder(); },
        };
    };
    MzTimepickerDirective.prototype.initElements = function () {
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.inputElement = $(this.elementRef.nativeElement);
        this.labelElement = this.createLabelElement();
    };
    MzTimepickerDirective.prototype.initTimepicker = function () {
        var _this = this;
        // append clockpicker to body by default
        if (!this.options.container) {
            this.options.container = 'body';
        }
        // extend afterHide callback to set label active
        var afterHide = this.options && this.options.afterHide || (function () { });
        this.options = Object.assign({}, this.options, {
            afterHide: function () {
                afterHide();
                _this.setLabelActive();
            },
        });
        this.renderer.invokeElementMethod(this.inputElement, 'pickatime', [this.options]);
        if (this.ngControl) {
            // set ngControl value according to selected time in timepicker
            this.inputElement.on('change', function (event) {
                _this.ngControl.control.setValue(event.target.value);
            });
        }
    };
    MzTimepickerDirective.prototype.createLabelElement = function () {
        var labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    };
    MzTimepickerDirective.prototype.handleProperties = function () {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-timepicker directive must be placed inside an [mz-timepicker-container] tag', this.inputElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    MzTimepickerDirective.prototype.handleLabel = function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    MzTimepickerDirective.prototype.handlePlaceholder = function () {
        var _this = this;
        var placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty and trigger validation
        // on page load... note that it still trigger validation on focus and would need a better fix
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            this.zone.runOutsideAngular(function () {
                setTimeout(function () { return _this.ngControl.control.markAsPristine(); });
            });
        }
        this.setLabelActive();
    };
    MzTimepickerDirective.prototype.setLabelActive = function () {
        var _this = this;
        // need wait for zone to be stable otherwise it wont make label
        // float in some circonstances (clearing value programmatically for example)
        this.zone.onStable
            .first()
            .subscribe(function () {
            var inputValue = _this.inputElement[0].value;
            var isActive = !!_this.placeholder || !!inputValue;
            _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
        });
    };
    return MzTimepickerDirective;
}(HandlePropChanges));
export { MzTimepickerDirective };
MzTimepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzTimepicker], input[mz-timepicker]',
            },] },
];
/** @nocollapse */
MzTimepickerDirective.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: Renderer, },
    { type: NgZone, },
]; };
MzTimepickerDirective.propDecorators = {
    'true': [{ type: HostBinding, args: ['class.timepicker',] },],
    'id': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'label': [{ type: Input },],
    'options': [{ type: Input },],
};