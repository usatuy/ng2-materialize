import { Component, Input } from '@angular/core';
var MzTextareaContainerComponent = (function () {
    function MzTextareaContainerComponent() {
    }
    return MzTextareaContainerComponent;
}());
export { MzTextareaContainerComponent };
MzTextareaContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-textarea-container',
                template: "<div class=\"input-field\" [class.inline]=\"inline\"><ng-content></ng-content></div>",
                styles: [":host /deep/ textarea{display:block}.input-field:not(.inline){display:block}"],
            },] },
];
/** @nocollapse */
MzTextareaContainerComponent.ctorParameters = function () { return []; };
MzTextareaContainerComponent.propDecorators = {
    'inline': [{ type: Input },],
};
