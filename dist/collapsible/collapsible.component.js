import { ChangeDetectorRef, Component, ContentChildren, Input, Renderer, ViewChild } from '@angular/core';
import { MzCollapsibleItemComponent } from './collapsible-item/collapsible-item.component';
var MzCollapsibleComponent = (function () {
    function MzCollapsibleComponent(changeDetectorRef, renderer) {
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
    }
    MzCollapsibleComponent.prototype.ngAfterViewInit = function () {
        this.handleDataCollapsible();
        this.initCollapsible();
    };
    MzCollapsibleComponent.prototype.initCollapsible = function () {
        var _this = this;
        var options = {
            accordion: false,
            onClose: this.onClose,
            onOpen: this.onOpen,
        };
        // need setTimeout otherwise loading directly on the page cause an error
        setTimeout(function () { return _this.renderer.invokeElementMethod($(_this.collapsible.nativeElement), 'collapsible', [options]); });
        // forcing changes detection for unit test
        this.changeDetectorRef.detectChanges();
    };
    MzCollapsibleComponent.prototype.handleDataCollapsible = function () {
        if (this.mode) {
            this.renderer.setElementAttribute(this.collapsible.nativeElement, 'data-collapsible', this.mode);
        }
    };
    return MzCollapsibleComponent;
}());
export { MzCollapsibleComponent };
MzCollapsibleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collapsible',
                template: "<ul #collapsible class=\"collapsible\" [class.popout]=\"popout\"><ng-content select=\"mz-collapsible-item\"></ng-content></ul>",
                styles: ["/deep/ .collapsible-header{clear:both}/deep/ .collapsible-body{clear:both}"],
            },] },
];
/** @nocollapse */
MzCollapsibleComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: Renderer, },
]; };
MzCollapsibleComponent.propDecorators = {
    'mode': [{ type: Input },],
    'onClose': [{ type: Input },],
    'onOpen': [{ type: Input },],
    'popout': [{ type: Input },],
    'collapsible': [{ type: ViewChild, args: ['collapsible',] },],
    'items': [{ type: ContentChildren, args: [MzCollapsibleItemComponent,] },],
};
