import { Injectable } from '@angular/core';
var MzToastService = (function () {
    function MzToastService() {
    }
    MzToastService.prototype.show = function (message, displayLength, className, completeCallback) {
        Materialize.toast(message, displayLength, className, completeCallback);
    };
    return MzToastService;
}());
export { MzToastService };
MzToastService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MzToastService.ctorParameters = function () { return []; };
