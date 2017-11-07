import { Component, Input } from '@angular/core';
var MzNavbarItemComponent = (function () {
    function MzNavbarItemComponent() {
    }
    return MzNavbarItemComponent;
}());
export { MzNavbarItemComponent };
MzNavbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-navbar-item',
                template: "<li class=\"{{ itemClass }}\" [class.active]=\"active\"><ng-content></ng-content></li>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzNavbarItemComponent.ctorParameters = function () { return []; };
MzNavbarItemComponent.propDecorators = {
    'active': [{ type: Input },],
    'itemClass': [{ type: Input },],
};
