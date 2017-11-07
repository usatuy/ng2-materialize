import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
export declare class MzCardComponent implements AfterViewInit {
    private changeDetectorRef;
    true: any;
    hoverable: boolean;
    cardTitle: ElementRef;
    cardAction: ElementRef;
    hasCardAction: boolean;
    hasCardTitle: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private hasActionTagAndNotEmpty();
    private hasTitleTagAndNotEmpty();
    private isElementDisplayed(element);
}
export declare class MzCardTitleDirective {
}
export declare class MzCardContentDirective {
}
export declare class MzCardActionDirective {
}
