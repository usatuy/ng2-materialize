import { Component, Input } from '@angular/core';
var MzTimepickerContainerComponent = (function () {
    function MzTimepickerContainerComponent() {
    }
    return MzTimepickerContainerComponent;
}());
export { MzTimepickerContainerComponent };
MzTimepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-timepicker-container',
                template: "<div class=\"input-field\" [class.inline]=\"inline\"><ng-content></ng-content></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzTimepickerContainerComponent.ctorParameters = function () { return []; };
MzTimepickerContainerComponent.propDecorators = {
    'inline': [{ type: Input },],
};
