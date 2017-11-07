import { Directive, ElementRef, Renderer } from '@angular/core';
var MzTextareaPrefixDirective = (function () {
    function MzTextareaPrefixDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    MzTextareaPrefixDirective.prototype.ngOnInit = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'prefix', true);
    };
    return MzTextareaPrefixDirective;
}());
export { MzTextareaPrefixDirective };
MzTextareaPrefixDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[mzTextareaPrefix], i[mz-textarea-prefix]',
            },] },
];
/** @nocollapse */
MzTextareaPrefixDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
