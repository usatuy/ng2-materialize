import { Component, Input } from '@angular/core';
var MzNavbarItemContainerComponent = (function () {
    function MzNavbarItemContainerComponent() {
    }
    return MzNavbarItemContainerComponent;
}());
export { MzNavbarItemContainerComponent };
MzNavbarItemContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-navbar-item-container',
                template: "<ul id=\"nav-mobile\" class=\"{{ align }} hide-on-med-and-down\"><ng-content></ng-content></ul>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzNavbarItemContainerComponent.ctorParameters = function () { return []; };
MzNavbarItemContainerComponent.propDecorators = {
    'align': [{ type: Input },],
};
