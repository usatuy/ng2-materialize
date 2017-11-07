import { ChangeDetectorRef, Component, ContentChild, Directive, Input, Renderer, ViewChild, } from '@angular/core';
import { MzSidenavCollapsibleHeaderComponent } from './sidenav-collapsible-header/sidenav-collapsible-header.component';
var MzSidenavCollapsibleComponent = (function () {
    function MzSidenavCollapsibleComponent(changeDetectorRef, renderer) {
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
    }
    MzSidenavCollapsibleComponent.prototype.ngAfterViewInit = function () {
        this.initCollapsible();
    };
    MzSidenavCollapsibleComponent.prototype.initCollapsible = function () {
        var _this = this;
        var options = {
            accordion: false,
            onClose: this.onClose,
            onOpen: this.onOpen,
        };
        // need setTimeout otherwise loading directly on the page cause an error
        setTimeout(function () { return _this.renderer.invokeElementMethod($(_this.collapsible.nativeElement), 'collapsible', [options]); });
        this.changeDetectorRef.detectChanges();
    };
    return MzSidenavCollapsibleComponent;
}());
export { MzSidenavCollapsibleComponent };
MzSidenavCollapsibleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav-collapsible',
                template: "<li><ul #collapsible class=\"collapsible collapsible-accordion\"><li><ng-content select=\"mz-sidenav-collapsible-header\"></ng-content><div class=\"collapsible-body\"><ul><ng-content select=\"mz-sidenav-collapsible-content\"></ng-content></ul></div></li></ul></li>",
                styles: [":host /deep/ .collapsible-header{padding:0 32px}:host /deep/ .collapsible-header i{color:rgba(0,0,0,.54)}:host /deep/ .collapsible-body li a{font-weight:initial}"],
            },] },
];
/** @nocollapse */
MzSidenavCollapsibleComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: Renderer, },
]; };
MzSidenavCollapsibleComponent.propDecorators = {
    'onClose': [{ type: Input },],
    'onOpen': [{ type: Input },],
    'collapsible': [{ type: ViewChild, args: ['collapsible',] },],
    'header': [{ type: ContentChild, args: [MzSidenavCollapsibleHeaderComponent,] },],
};
// Declare the tags to avoid error: '<mz-sidenav-collapsible-x>' is not a known element
// https://github.com/angular/angular/issues/11251
// tslint:disable: directive-selector
var MzSidenavCollapsibleContentDirective = (function () {
    function MzSidenavCollapsibleContentDirective() {
    }
    return MzSidenavCollapsibleContentDirective;
}());
export { MzSidenavCollapsibleContentDirective };
MzSidenavCollapsibleContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-sidenav-collapsible-content' },] },
];
/** @nocollapse */
MzSidenavCollapsibleContentDirective.ctorParameters = function () { return []; };
