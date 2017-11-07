import { Component, ContentChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MzValidationComponent } from '../../validation/validation.component';
import { MzSelectDirective } from '../select.directive';
var MzSelectContainerComponent = (function () {
    function MzSelectContainerComponent() {
    }
    MzSelectContainerComponent.prototype.ngAfterViewInit = function () {
        this.initControlSubscription();
        this.initSelectSubscription();
    };
    MzSelectContainerComponent.prototype.ngOnDestroy = function () {
        this.removeControlSubscription();
        this.removeSelectSubscription();
    };
    MzSelectContainerComponent.prototype.initControlSubscription = function () {
        var _this = this;
        if (this.ngControl) {
            this.mzSelectDirective.disabled = this.ngControl.control.disabled;
            this.statusChangesSubscription = this.ngControl.control.statusChanges.subscribe(function (status) {
                // to handle enabling/disabling formControl
                var disabled = status === 'DISABLED';
                if (disabled !== _this.mzSelectDirective.disabled) {
                    _this.mzSelectDirective.disabled = disabled;
                    _this.mzSelectDirective.handleDisabled();
                }
            });
            this.selectValueSubscription = this.ngControl.valueChanges.subscribe(function (value) {
                // to synchronize input and select when value changes programmatically
                var isDropdownOpen = _this.mzSelectDirective.inputElement.hasClass('active');
                var inputValue = _this.mzSelectDirective.inputElement.val();
                var options = _this.mzSelectDirective.selectElement.children('option');
                var selectedOptions = options.filter('option:selected').toArray();
                var disabledOptions = options.filter(':disabled').toArray();
                var selectedOptionText = selectedOptions.length === 0
                    ? disabledOptions.map(function (option) { return option.textContent; })[0]
                    : selectedOptions.map(function (option) { return option.textContent; }).join(', ');
                if (inputValue !== selectedOptionText && !isDropdownOpen) {
                    _this.mzSelectDirective.updateMaterialSelect();
                }
            });
        }
    };
    MzSelectContainerComponent.prototype.initSelectSubscription = function () {
        var _this = this;
        if (this.mzSelectDirective) {
            this.mzSelectDirective.onUpdate
                .subscribe(function () { return _this.registerOnBlur(); })
                .next();
        }
    };
    MzSelectContainerComponent.prototype.registerOnBlur = function () {
        var _this = this;
        this.mzSelectDirective.inputElement.on('blur', function () {
            if (_this.ngControl) {
                _this.ngControl.control.markAsTouched();
            }
            if (_this.mzValidationComponent) {
                _this.mzValidationComponent.setValidationState();
            }
        });
    };
    MzSelectContainerComponent.prototype.removeControlSubscription = function () {
        if (this.mzSelectDirective) {
            this.mzSelectDirective.onUpdate.unsubscribe();
            this.mzSelectDirective.inputElement.off();
        }
    };
    MzSelectContainerComponent.prototype.removeSelectSubscription = function () {
        if (this.statusChangesSubscription) {
            this.statusChangesSubscription.unsubscribe();
        }
        if (this.selectValueSubscription) {
            this.selectValueSubscription.unsubscribe();
        }
    };
    return MzSelectContainerComponent;
}());
export { MzSelectContainerComponent };
MzSelectContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-select-container',
                template: "<div class=\"input-field\"><ng-content></ng-content></div>",
                styles: [".input-field:not(.inline){display:block}/deep/ .input-field .dropdown-content [type=checkbox]+label{top:-11px}"],
            },] },
];
/** @nocollapse */
MzSelectContainerComponent.ctorParameters = function () { return []; };
MzSelectContainerComponent.propDecorators = {
    'mzSelectDirective': [{ type: ContentChild, args: [MzSelectDirective,] },],
    'mzValidationComponent': [{ type: ContentChild, args: [MzValidationComponent,] },],
    'ngControl': [{ type: ContentChild, args: [NgControl,] },],
};
