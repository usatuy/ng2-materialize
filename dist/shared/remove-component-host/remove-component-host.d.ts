import { AfterViewInit, ElementRef } from '@angular/core';
export declare abstract class MzRemoveComponentHost implements AfterViewInit {
    elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
}
