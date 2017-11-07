import { Directive, ElementRef, Renderer } from '@angular/core';
var MzInputPrefixDirective = (function () {
    function MzInputPrefixDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    MzInputPrefixDirective.prototype.ngOnInit = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'prefix', true);
    };
    return MzInputPrefixDirective;
}());
export { MzInputPrefixDirective };
MzInputPrefixDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[mzInputPrefix], i[mz-input-prefix]',
            },] },
];
/** @nocollapse */
MzInputPrefixDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
