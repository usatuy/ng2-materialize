import { Component, ComponentFactoryResolver, ElementRef, HostBinding, HostListener, Input, Renderer, ViewContainerRef, ViewEncapsulation, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MzErrorMessageComponent } from './error-message';
var MzValidationComponent = (function () {
    function MzValidationComponent(elementRef, resolver, viewContainerRef, ngControl, renderer) {
        this.elementRef = elementRef;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.ngControl = ngControl;
        this.renderer = renderer;
        this._formControlDisabled = false;
        this._required = false;
        this.errorMessageComponent = null;
    }
    Object.defineProperty(MzValidationComponent.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = (value != null && "" + value !== 'false'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzValidationComponent.prototype, "formControlDisabled", {
        get: function () { return this._formControlDisabled; },
        set: function (value) {
            this._formControlDisabled = value;
            if (this._formControlDisabled) {
                this.ngControl.control.disable();
            }
            else {
                this.ngControl.control.enable();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzValidationComponent.prototype, "elementToAddValidation", {
        get: function () {
            return this.isNativeSelectElement
                ? this.inputSelectDropdown
                : this.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzValidationComponent.prototype, "inputSelectDropdown", {
        get: function () {
            return this.nativeElement.siblings('input.select-dropdown');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MzValidationComponent.prototype, "isNativeSelectElement", {
        get: function () {
            return this.nativeElement[0].nodeName === 'SELECT';
        },
        enumerable: true,
        configurable: true
    });
    MzValidationComponent.prototype.onFocusOut = function (target) {
        this.ngControl.control.markAsTouched();
        this.setValidationState();
    };
    MzValidationComponent.prototype.ngAfterViewInit = function () {
        this.initElements();
        this.initErrorMessageComponent();
        this.subscribeStatusChanges();
    };
    MzValidationComponent.prototype.ngOnDestroy = function () {
        this.statusChangesSubscription.unsubscribe();
        this.errorMessageComponent.destroy();
    };
    MzValidationComponent.prototype.clearValidationState = function (element) {
        this.renderer.setElementClass(element[0], 'valid', false);
        this.renderer.setElementClass(element[0], 'invalid', false);
    };
    MzValidationComponent.prototype.createRequiredSpanElement = function () {
        if (this.required && this.labelElement) {
            var spanElement = document.createElement('span');
            spanElement.setAttribute('class', 'placeholder-required');
            spanElement.textContent = ' *';
            this.renderer.invokeElementMethod(this.labelElement, 'appendChild', [spanElement]);
        }
    };
    MzValidationComponent.prototype.initElements = function () {
        this.labelElement = $('label[for="' + this.id + '"]')[0];
        this.nativeElement = $(this.elementRef.nativeElement);
        this.createRequiredSpanElement();
    };
    MzValidationComponent.prototype.initErrorMessageComponent = function () {
        var errorMessageFactory = this.resolver.resolveComponentFactory(MzErrorMessageComponent);
        this.errorMessageComponent = this.viewContainerRef.createComponent(errorMessageFactory);
        this.errorMessageComponent.instance.errorMessageResource = this.errorMessageResource;
        this.errorMessageComponent.instance.control = this.ngControl.control;
        this.errorMessageComponent.changeDetectorRef.detectChanges();
        var errorMessage = this.nativeElement.parent().children('mz-error-message');
        this.renderer.invokeElementMethod(errorMessage, 'insertAfter', [this.labelElement]);
    };
    MzValidationComponent.prototype.setValidationState = function () {
        // to handle reset form
        if (this.ngControl.control.untouched && this.ngControl.control.pristine) {
            this.clearValidationState(this.elementToAddValidation);
            return;
        }
        // to handle field validity
        if (this.ngControl.control.enabled) {
            if (this.ngControl.control.valid) {
                this.renderer.setElementClass(this.elementToAddValidation[0], 'valid', true);
                this.renderer.setElementClass(this.elementToAddValidation[0], 'invalid', false);
            }
            else {
                this.renderer.setElementClass(this.elementToAddValidation[0], 'valid', false);
                this.renderer.setElementClass(this.elementToAddValidation[0], 'invalid', true);
            }
        }
        else {
            this.clearValidationState(this.elementToAddValidation);
        }
    };
    MzValidationComponent.prototype.subscribeStatusChanges = function () {
        var _this = this;
        this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe(function (status) {
            // TODO Find a better way to handle validation after the form subscription. (see demo-app form-validation)
            // wait for the valueChanges method from FormGroup to have been triggered before handling the validation state
            // /!\ race condition warning /!\
            setTimeout(function () { return _this.setValidationState(); });
        });
    };
    return MzValidationComponent;
}());
export { MzValidationComponent };
MzValidationComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'mz-validation, [mz-validation], [mzValidation]',
                template: "<ng-content></ng-content>",
                styles: [".select-wrapper input.select-dropdown.invalid,textarea.ng-invalid.ng-touched:focus{border-bottom:1px solid #f44336;box-shadow:0 1px 0 0 #f44336}.select-wrapper input.select-dropdown.valid{border-bottom:1px solid #4caf50;box-shadow:0 1px 0 0 #4caf50}input:not([type=checkbox]):focus+label.active span.placeholder-required,textarea:focus+label.active span.placeholder-required{color:#f44336}"],
            },] },
];
/** @nocollapse */
MzValidationComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ComponentFactoryResolver, },
    { type: ViewContainerRef, },
    { type: NgControl, },
    { type: Renderer, },
]; };
MzValidationComponent.propDecorators = {
    'id': [{ type: Input },],
    'required': [{ type: HostBinding, args: ['attr.required',] }, { type: Input },],
    'errorMessageResource': [{ type: Input },],
    'formControlDisabled': [{ type: Input },],
    'onFocusOut': [{ type: HostListener, args: ['focusout', ['$event.target'],] },],
};
