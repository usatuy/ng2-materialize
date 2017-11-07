/// <reference types="jquery" />
/// <reference types="pickadate" />
/// <reference types="materialize-css" />
import { AfterViewInit, ComponentFactoryResolver, ComponentRef, ElementRef, OnDestroy, Renderer, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ErrorMessageResource, MzErrorMessageComponent } from './error-message';
export declare class MzValidationComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    private resolver;
    private viewContainerRef;
    ngControl: NgControl;
    renderer: Renderer;
    private _formControlDisabled;
    private _required;
    errorMessageComponent?: ComponentRef<MzErrorMessageComponent>;
    labelElement: HTMLElement;
    nativeElement: JQuery;
    statusChangesSubscription: Subscription;
    id: string;
    required: any;
    errorMessageResource: ErrorMessageResource;
    formControlDisabled: boolean;
    readonly elementToAddValidation: JQuery;
    readonly inputSelectDropdown: JQuery;
    readonly isNativeSelectElement: boolean;
    onFocusOut(target: Event): void;
    constructor(elementRef: ElementRef, resolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, ngControl: NgControl, renderer: Renderer);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    clearValidationState(element: JQuery): void;
    createRequiredSpanElement(): void;
    initElements(): void;
    initErrorMessageComponent(): void;
    setValidationState(): void;
    subscribeStatusChanges(): void;
}