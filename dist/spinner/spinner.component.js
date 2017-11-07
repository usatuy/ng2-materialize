import { Component, Input } from '@angular/core';
var MzSpinnerComponent = (function () {
    function MzSpinnerComponent() {
    }
    return MzSpinnerComponent;
}());
export { MzSpinnerComponent };
MzSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-spinner',
                template: "<div class=\"preloader-wrapper active {{ size }}\"><div class=\"spinner-layer\" [class.spinner-red-only]=\"color === 'red'\" [class.spinner-green-only]=\"color === 'green'\" [class.spinner-blue-only]=\"color === 'blue'\" [class.spinner-yellow-only]=\"color === 'yellow'\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzSpinnerComponent.ctorParameters = function () { return []; };
MzSpinnerComponent.propDecorators = {
    'color': [{ type: Input },],
    'size': [{ type: Input },],
};
