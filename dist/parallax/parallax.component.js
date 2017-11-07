import { Component, Input, Renderer, ViewChild } from '@angular/core';
var MzParallaxComponent = (function () {
    function MzParallaxComponent(renderer) {
        this.renderer = renderer;
    }
    MzParallaxComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.parallaxContainer.nativeElement, 'height', isNaN(this.height) ? '500px' : this.height + 'px');
        this.renderer.invokeElementMethod($(this.parallax.nativeElement), 'parallax');
    };
    return MzParallaxComponent;
}());
export { MzParallaxComponent };
MzParallaxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-parallax',
                template: "<div #parallaxContainer class=\"parallax-container\"><div #parallax class=\"parallax\"><ng-content></ng-content></div></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzParallaxComponent.ctorParameters = function () { return [
    { type: Renderer, },
]; };
MzParallaxComponent.propDecorators = {
    'height': [{ type: Input },],
    'parallax': [{ type: ViewChild, args: ['parallax',] },],
    'parallaxContainer': [{ type: ViewChild, args: ['parallaxContainer',] },],
};
