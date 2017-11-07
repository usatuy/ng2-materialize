import { ViewChild, } from '@angular/core';
import { MzModalComponent } from '../modal.component';
var MzBaseModal = (function () {
    function MzBaseModal() {
    }
    MzBaseModal.prototype.ngAfterViewInit = function () {
        this.modalComponent.open();
    };
    return MzBaseModal;
}());
export { MzBaseModal };
MzBaseModal.propDecorators = {
    'modalComponent': [{ type: ViewChild, args: [MzModalComponent,] },],
};
