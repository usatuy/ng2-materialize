import { Component, ElementRef, Renderer2 } from '@angular/core';
var MzCollectionComponent = (function () {
    function MzCollectionComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    MzCollectionComponent.prototype.ngOnInit = function () {
        this.initElements();
        this.initCollectionHeader();
    };
    MzCollectionComponent.prototype.initElements = function () {
        this.collectionElement = $(this.elementRef.nativeElement).find('.collection');
        this.collectionHeaderElement = $(this.elementRef.nativeElement).find('.collection-header');
    };
    MzCollectionComponent.prototype.initCollectionHeader = function () {
        if (this.collectionHeaderElement.length > 0) {
            this.renderer.addClass(this.collectionElement[0], 'with-header');
        }
    };
    return MzCollectionComponent;
}());
export { MzCollectionComponent };
MzCollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collection',
                template: "<div class=\"collection\"><ng-content></ng-content></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzCollectionComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
