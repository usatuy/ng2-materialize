/// <reference types="materialize-css" />
/// <reference types="jquery" />
/// <reference types="pickadate" />
import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/handle-prop-changes';
export declare class MzModalComponent extends HandlePropChanges implements OnInit, AfterViewInit {
    renderer: Renderer;
    bottomSheet: boolean;
    fixedFooter: boolean;
    fullscreen: boolean;
    options: Materialize.ModalOptions;
    onClose: EventEmitter<void>;
    modalElementRef: ElementRef;
    modalElement: JQuery;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initElements(): void;
    initHandlers(): void;
    initModal(): void;
    handleProperties(): void;
    handleOptions(): void;
    open(): void;
    close(): void;
}
export declare class MzModalHeaderDirective {
}
export declare class MzModalContentDirective {
}
export declare class MzModalFooterDirective {
}
