import { Component, Input } from '@angular/core';
var MzNavbarComponent = (function () {
    function MzNavbarComponent() {
    }
    return MzNavbarComponent;
}());
export { MzNavbarComponent };
MzNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-navbar',
                template: "<nav><div class=\"nav-wrapper {{ navbarClass }}\"><ng-content></ng-content></div></nav>",
                styles: [".nav-wrapper /deep/ .btn i{line-height:inherit}"],
            },] },
];
/** @nocollapse */
MzNavbarComponent.ctorParameters = function () { return []; };
MzNavbarComponent.propDecorators = {
    'navbarClass': [{ type: Input },],
};
