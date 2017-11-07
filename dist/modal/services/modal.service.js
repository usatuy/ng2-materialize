import { Injectable, } from '@angular/core';
import { MzInjectionService } from '../../shared/injection/injection.service';
var MzModalService = (function () {
    function MzModalService(injectionService) {
        this.injectionService = injectionService;
    }
    /**
     * Open modal component.
     *
     * @template T
     * @param {Type<MzBaseModal>} componentClass
     * @param {*} [options={}]
     * @returns {ComponentRef<MzBaseModal>}
     *
     * @memberOf MzModalService
     */
    MzModalService.prototype.open = function (componentClass, options) {
        if (options === void 0) { options = {}; }
        var componentRef = this.injectionService.appendComponent(componentClass, options);
        componentRef.instance.modalComponent.onClose.subscribe(function () {
            componentRef.destroy();
        });
        return componentRef;
    };
    return MzModalService;
}());
export { MzModalService };
MzModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MzModalService.ctorParameters = function () { return [
    { type: MzInjectionService, },
]; };
