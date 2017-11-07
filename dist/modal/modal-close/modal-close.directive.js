import { Directive, HostListener } from '@angular/core';
import { MzModalComponent } from '../modal.component';
var MzModalCloseDirective = (function () {
    function MzModalCloseDirective(modalComponent) {
        this.modalComponent = modalComponent;
    }
    MzModalCloseDirective.prototype.onclick = function () {
        this.modalComponent.close();
    };
    return MzModalCloseDirective;
}());
export { MzModalCloseDirective };
MzModalCloseDirective.decorators = [
    { type: Directive, args: [{
                selector: 'a[mzModalClose], button[mzModalClose], a[mz-modal-close], button[mz-modal-close]',
            },] },
];
/** @nocollapse */
MzModalCloseDirective.ctorParameters = function () { return [
    { type: MzModalComponent, },
]; };
MzModalCloseDirective.propDecorators = {
    'onclick': [{ type: HostListener, args: ['click',] },],
};
