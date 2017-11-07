import { ElementRef, Inject, } from '@angular/core';
var MzRemoveComponentHost = (function () {
    function MzRemoveComponentHost(elementRef) {
        this.elementRef = elementRef;
    }
    MzRemoveComponentHost.prototype.ngAfterViewInit = function () {
        var nativeElement = this.elementRef.nativeElement;
        var parentElement = nativeElement.parentElement;
        // Move all children out of the element
        while (nativeElement.firstChild) {
            parentElement.insertBefore(nativeElement.firstChild, nativeElement);
        }
        // Remove the empty element(the host)
        parentElement.removeChild(nativeElement);
    };
    return MzRemoveComponentHost;
}());
export { MzRemoveComponentHost };
/** @nocollapse */
MzRemoveComponentHost.ctorParameters = function () { return [
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
]; };
