/// <reference types="pickadate" />
/// <reference types="jquery" />
/// <reference types="materialize-css" />
import { ElementRef, OnDestroy, OnInit, Renderer } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { HandlePropChanges } from '../shared/handle-prop-changes';
export declare class MzDatepickerDirective extends HandlePropChanges implements OnInit, OnDestroy {
    private ngControl;
    private elementRef;
    private renderer;
    true: any;
    id: string;
    placeholder: string;
    label: string;
    options: Pickadate.DateOptions;
    inputElement: JQuery;
    inputContainerElement: JQuery;
    inputValueSubscription: Subscription;
    labelElement: JQuery;
    stopChangePropagation: boolean;
    readonly format: string;
    readonly formatSubmit: string;
    readonly ngControlValue: string;
    readonly picker: Pickadate.DatePicker;
    constructor(ngControl: NgControl, elementRef: ElementRef, renderer: Renderer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initHandlers(): void;
    initElements(): void;
    initDatepicker(): void;
    initInputSubscription(): void;
    createLabelElement(): JQuery<HTMLElement>;
    handleProperties(): void;
    handleLabel(): void;
    handlePlaceholder(): void;
    setLabelActive(): void;
}
