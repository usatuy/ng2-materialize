import { ComponentRef, Type } from '@angular/core';
import { MzInjectionService } from '../../shared/injection/injection.service';
import { MzBaseModal } from '../modal-base';
export declare class MzModalService {
    private injectionService;
    constructor(injectionService: MzInjectionService);
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
    open(componentClass: Type<MzBaseModal>, options?: any): ComponentRef<MzBaseModal>;
}