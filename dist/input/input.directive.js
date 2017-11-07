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
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/skipWhile';
import { Observable } from 'rxjs/Observable';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzInputDirective = (function (_super) {
    __extends(MzInputDirective, _super);
    function MzInputDirective(ngControl, elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.ngControl = ngControl;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    MzInputDirective.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initElements();
        this.initInputSubscription();
        this.handleProperties();
    };
    MzInputDirective.prototype.ngOnDestroy = function () {
        if (this.inputValueSubscription) {
            this.inputValueSubscription.unsubscribe();
        }
    };
    MzInputDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            autocomplete: function () { return _this.handleAutocomplete(); },
            dataError: function () { return _this.handleDataError(); },
            dataSuccess: function () { return _this.handleDataSuccess(); },
            label: function () { return _this.handleLabel(); },
            length: function () { return _this.handleLength(); },
            placeholder: function () { return _this.handlePlaceholder(); },
            validate: function () { return _this.handleValidate(); },
        };
    };
    MzInputDirective.prototype.initElements = function () {
        this.inputElement = $(this.elementRef.nativeElement);
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.input-field');
        this.labelElement = this.createLabelElement();
    };
    MzInputDirective.prototype.initInputSubscription = function () {
        var _this = this;
        if (this.ngControl) {
            this.inputValueSubscription = this.ngControl.valueChanges.subscribe(function () { return _this.setLabelActive(); });
        }
    };
    MzInputDirective.prototype.createLabelElement = function () {
        var labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    };
    MzInputDirective.prototype.handleProperties = function () {
        if (this.inputContainerElement.length === 0) {
            console.error('Input with mz-input directive must be placed inside an [mz-input-container] tag', this.inputElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    MzInputDirective.prototype.handleAutocomplete = function () {
        var _this = this;
        var isAutocomplete = this.autocomplete != null
            && this.autocomplete.data != null
            && Object.keys(this.autocomplete.data).length > 0;
        this.renderer.setElementClass(this.inputElement[0], 'autocomplete', isAutocomplete);
        if (this.autocomplete != null) {
            // wait until autocomplete is defined before to invoke
            // see issue: https://github.com/Dogfalo/materialize/issues/4401
            Observable
                .interval(100)
                .skipWhile(function () { return !_this.inputElement['autocomplete']; })
                .first()
                .subscribe(function () { return _this.renderer.invokeElementMethod(_this.inputElement, 'autocomplete', [_this.autocomplete]); });
        }
    };
    MzInputDirective.prototype.handleDataError = function () {
        this.renderer.setElementAttribute(this.labelElement[0], 'data-error', this.dataError);
    };
    MzInputDirective.prototype.handleDataSuccess = function () {
        this.renderer.setElementAttribute(this.labelElement[0], 'data-success', this.dataSuccess);
    };
    MzInputDirective.prototype.handleLabel = function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    MzInputDirective.prototype.handleLength = function () {
        var length = this.length ? this.length.toString() : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'data-length', length);
        if (length) {
            this.setCharacterCount();
        }
        else {
            this.removeCharacterCount();
        }
    };
    MzInputDirective.prototype.handlePlaceholder = function () {
        var _this = this;
        var placeholder = !!this.placeholder ? this.placeholder : null;
        this.renderer.setElementAttribute(this.inputElement[0], 'placeholder', placeholder);
        // fix issue in IE where having a placeholder on input make control dirty
        // note that it still trigger validation on focus but this is better than nothing
        // issue : https://github.com/angular/angular/issues/15299
        // workaround : https://stackoverflow.com/a/44967245/5583283
        if (this.ngControl) {
            setTimeout(function () { return _this.ngControl.control.markAsPristine(); });
        }
        this.setLabelActive();
    };
    MzInputDirective.prototype.handleValidate = function () {
        this.renderer.setElementClass(this.inputElement[0], 'validate', this.validate);
        if (this.validate) {
            // force validation
            this.renderer.invokeElementMethod(this.inputElement, 'trigger', ['blur']);
        }
        else {
            this.removeValidationClasses();
        }
    };
    MzInputDirective.prototype.setCharacterCount = function () {
        var _this = this;
        this.renderer.invokeElementMethod(this.inputElement, 'characterCounter');
        // force validation
        // need setTimeout otherwise it wont trigger validation right away
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.inputElement, 'trigger', ['input']);
            _this.renderer.invokeElementMethod(_this.inputElement, 'trigger', ['blur']);
        });
    };
    MzInputDirective.prototype.setLabelActive = function () {
        var _this = this;
        // need setTimeout otherwise it wont make label float in some circonstances
        // for example: forcing validation for example, reseting form programmaticaly, ...
        setTimeout(function () {
            var inputValue = _this.inputElement[0].value;
            var isActive = !!_this.placeholder || !!inputValue;
            _this.renderer.setElementClass(_this.labelElement[0], 'active', isActive);
        });
    };
    MzInputDirective.prototype.removeCharacterCount = function () {
        this.renderer.invokeElementMethod(this.inputElement.siblings('.character-counter'), 'remove');
        this.removeValidationClasses();
    };
    MzInputDirective.prototype.removeValidationClasses = function () {
        // reset valid/invalid state
        this.renderer.setElementClass(this.inputElement[0], 'invalid', false);
        this.renderer.setElementClass(this.inputElement[0], 'valid', false);
    };
    return MzInputDirective;
}(HandlePropChanges));
export { MzInputDirective };
MzInputDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzInput], input[mz-input]',
            },] },
];
/** @nocollapse */
MzInputDirective.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzInputDirective.propDecorators = {
    'id': [{ type: Input },],
    'placeholder': [{ type: Input },],
    'autocomplete': [{ type: Input },],
    'dataError': [{ type: Input },],
    'dataSuccess': [{ type: Input },],
    'label': [{ type: Input },],
    'length': [{ type: Input },],
    'validate': [{ type: Input },],
};
