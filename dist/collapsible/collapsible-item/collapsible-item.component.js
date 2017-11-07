var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, Directive, Input } from '@angular/core';
import { MzRemoveComponentHost } from '../../shared/remove-component-host/remove-component-host';
var MzCollapsibleItemComponent = (function (_super) {
    __extends(MzCollapsibleItemComponent, _super);
    function MzCollapsibleItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MzCollapsibleItemComponent;
}(MzRemoveComponentHost));
export { MzCollapsibleItemComponent };
MzCollapsibleItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collapsible-item',
                template: "<li><div class=\"collapsible-header\" [class.active]=\"active\"><ng-content select=\"mz-collapsible-item-header\"></ng-content></div><div class=\"collapsible-body\"><ng-content select=\"mz-collapsible-item-body\"></ng-content></div></li>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzCollapsibleItemComponent.ctorParameters = function () { return []; };
MzCollapsibleItemComponent.propDecorators = {
    'active': [{ type: Input },],
};
// Declare the tags to avoid error: '<mz-collapsible-item-x>' is not a known element
// https://github.com/angular/angular/issues/11251
// tslint:disable: directive-selector
var MzCollapsibleItemBodyDirective = (function () {
    function MzCollapsibleItemBodyDirective() {
    }
    return MzCollapsibleItemBodyDirective;
}());
export { MzCollapsibleItemBodyDirective };
MzCollapsibleItemBodyDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-collapsible-item-body' },] },
];
/** @nocollapse */
MzCollapsibleItemBodyDirective.ctorParameters = function () { return []; };
var MzCollapsibleItemHeaderDirective = (function () {
    function MzCollapsibleItemHeaderDirective() {
    }
    return MzCollapsibleItemHeaderDirective;
}());
export { MzCollapsibleItemHeaderDirective };
MzCollapsibleItemHeaderDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-collapsible-item-header' },] },
];
/** @nocollapse */
MzCollapsibleItemHeaderDirective.ctorParameters = function () { return []; };
