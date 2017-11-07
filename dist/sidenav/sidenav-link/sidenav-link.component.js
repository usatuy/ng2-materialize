import { Component, Input, ViewEncapsulation } from '@angular/core';
var MzSidenavLinkComponent = (function () {
    function MzSidenavLinkComponent() {
    }
    return MzSidenavLinkComponent;
}());
export { MzSidenavLinkComponent };
MzSidenavLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-link',
                template: "<li [class.active]=\"active\"><ng-content></ng-content></li>",
                styles: [":host /deep/ a[class*=mdi-]::before{color:rgba(0,0,0,.54);margin:-1px 32px 0 0;vertical-align:middle}:host /deep/ a i,:host /deep/ a i.material-icons,:host /deep/ a i[class*=mdi-]{margin-top:-1px}:host /deep/ a i.material-icons::before,:host /deep/ a i::before,:host /deep/ a i[class*=mdi-]::before{vertical-align:middle}"],
                encapsulation: ViewEncapsulation.Emulated,
            },] },
];
/** @nocollapse */
MzSidenavLinkComponent.ctorParameters = function () { return []; };
MzSidenavLinkComponent.propDecorators = {
    'active': [{ type: Input },],
};
