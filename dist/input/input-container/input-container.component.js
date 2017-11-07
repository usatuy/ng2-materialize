import { Component, Input } from '@angular/core';
var MzInputContainerComponent = (function () {
    function MzInputContainerComponent() {
    }
    return MzInputContainerComponent;
}());
export { MzInputContainerComponent };
MzInputContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-input-container',
                template: "<div class=\"input-field\" [class.inline]=\"inline\"><ng-content></ng-content></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzInputContainerComponent.ctorParameters = function () { return []; };
MzInputContainerComponent.propDecorators = {
    'inline': [{ type: Input },],
};
