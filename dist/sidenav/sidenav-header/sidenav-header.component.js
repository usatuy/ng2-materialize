import { Component } from '@angular/core';
var MzSidenavHeaderComponent = (function () {
    function MzSidenavHeaderComponent() {
    }
    return MzSidenavHeaderComponent;
}());
export { MzSidenavHeaderComponent };
MzSidenavHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-header',
                template: "<li class=\"sidenav-header\"><ng-content></ng-content></li>",
                styles: [".sidenav-header{margin-bottom:8px}"],
            },] },
];
/** @nocollapse */
MzSidenavHeaderComponent.ctorParameters = function () { return []; };
