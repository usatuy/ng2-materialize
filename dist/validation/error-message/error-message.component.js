import { animate, style, transition, trigger, } from '@angular/animations';
import { Component, Input, } from '@angular/core';
var MzErrorMessageComponent = (function () {
    function MzErrorMessageComponent() {
        this.errorMessage = '';
    }
    MzErrorMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildErrorMessage();
        this.controlStatusChangesSubscription = this.control.statusChanges.subscribe(function () { return _this.buildErrorMessage(); });
    };
    MzErrorMessageComponent.prototype.ngOnDestroy = function () {
        this.controlStatusChangesSubscription.unsubscribe();
    };
    MzErrorMessageComponent.prototype.buildErrorMessage = function () {
        var _this = this;
        this.errorMessage = '';
        if (this.control.errors && this.errorMessageResource) {
            Object.keys(this.control.errors).forEach(function (key) {
                _this.errorMessage += _this.errorMessageResource[key] + ' ';
            });
        }
    };
    return MzErrorMessageComponent;
}());
export { MzErrorMessageComponent };
MzErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-error-message',
                template: "<div [@enterAnimation]=\"errorMessage\" class=\"invalid\" *ngIf=\"(control.touched || control.dirty) && control.invalid && errorMessage\">{{ errorMessage }}</div>",
                styles: ["div.invalid{color:#e30613;font-size:.8rem;opacity:1;overflow-wrap:break-word}input:not([type=checkbox])+label+:host div.invalid,mz-select-container :host div.invalid,textarea+label+:host div.invalid{margin-top:-19px;min-height:19px}"],
                animations: [
                    trigger('enterAnimation', [
                        transition(':enter', [
                            style({ transform: 'translateY(-5px)', opacity: 0 }),
                            animate('300ms', style({ transform: 'translateY(0)', opacity: 1 })),
                        ]),
                        transition(':leave', [
                            style({ transform: 'translateY(0)', opacity: 1 }),
                            animate('300ms', style({ transform: 'translateY(-5px)', opacity: 0 })),
                        ]),
                    ]),
                ],
            },] },
];
/** @nocollapse */
MzErrorMessageComponent.ctorParameters = function () { return []; };
MzErrorMessageComponent.propDecorators = {
    'control': [{ type: Input },],
    'errorMessageResource': [{ type: Input },],
};
