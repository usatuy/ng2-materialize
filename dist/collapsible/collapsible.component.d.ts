import { AfterViewInit, ChangeDetectorRef, ElementRef, QueryList, Renderer } from '@angular/core';
import { MzCollapsibleItemComponent } from './collapsible-item/collapsible-item.component';
export declare class MzCollapsibleComponent implements AfterViewInit {
    changeDetectorRef: ChangeDetectorRef;
    renderer: Renderer;
    mode: string;
    onClose: Function;
    onOpen: Function;
    popout: boolean;
    collapsible: ElementRef;
    items: QueryList<MzCollapsibleItemComponent>;
    constructor(changeDetectorRef: ChangeDetectorRef, renderer: Renderer);
    ngAfterViewInit(): void;
    initCollapsible(): void;
    handleDataCollapsible(): void;
}
