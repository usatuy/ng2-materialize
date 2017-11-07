import { Component, Input } from '@angular/core';
var MzDatepickerContainerComponent = (function () {
    function MzDatepickerContainerComponent() {
    }
    return MzDatepickerContainerComponent;
}());
export { MzDatepickerContainerComponent };
MzDatepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-datepicker-container',
                template: "<div class=\"input-field\" [class.inline]=\"inline\"><ng-content></ng-content></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzDatepickerContainerComponent.ctorParameters = function () { return []; };
MzDatepickerContainerComponent.propDecorators = {
    'inline': [{ type: Input },],
};
