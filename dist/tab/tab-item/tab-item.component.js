import { Component, Input, } from '@angular/core';
var MzTabItemComponent = (function () {
    function MzTabItemComponent() {
    }
    Object.defineProperty(MzTabItemComponent.prototype, "link", {
        get: function () {
            return this.label.replace(/\s+/g, '-').toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    return MzTabItemComponent;
}());
export { MzTabItemComponent };
MzTabItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-tab-item',
                template: "<div id=\"{{ link }}\" class=\"{{ class }}\"><ng-content></ng-content></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzTabItemComponent.ctorParameters = function () { return []; };
MzTabItemComponent.propDecorators = {
    'active': [{ type: Input },],
    'class': [{ type: Input },],
    'disabled': [{ type: Input },],
    'href': [{ type: Input },],
    'label': [{ type: Input },],
    'target': [{ type: Input },],
};
