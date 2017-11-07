import { ChangeDetectorRef, Component, Directive, HostBinding, Input, ViewChild, } from '@angular/core';
var MzCardComponent = (function () {
    function MzCardComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.hasCardAction = true;
        this.hasCardTitle = true;
    }
    MzCardComponent.prototype.ngAfterViewInit = function () {
        this.hasCardTitle = this.hasTitleTagAndNotEmpty();
        this.hasCardAction = this.hasActionTagAndNotEmpty();
        this.changeDetectorRef.detectChanges();
    };
    MzCardComponent.prototype.hasActionTagAndNotEmpty = function () {
        var cardActionElement = this.cardAction.nativeElement.querySelector('mz-card-action');
        return this.isElementDisplayed(cardActionElement);
    };
    MzCardComponent.prototype.hasTitleTagAndNotEmpty = function () {
        var cardTitleElement = this.cardTitle.nativeElement.querySelector('mz-card-title');
        return this.isElementDisplayed(cardTitleElement);
    };
    MzCardComponent.prototype.isElementDisplayed = function (element) {
        return element && element.innerHTML.trim() !== '';
    };
    return MzCardComponent;
}());
export { MzCardComponent };
MzCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-card',
                template: "<div class=\"card-content\"><div #cardTitle class=\"card-title\" *ngIf=\"hasCardTitle\"><ng-content select=\"mz-card-title\"></ng-content></div><ng-content select=\"mz-card-content\"></ng-content></div><div #cardAction class=\"card-action\" *ngIf=\"hasCardAction\"><ng-content select=\"mz-card-action\"></ng-content></div>",
                styles: [":host{display:block}"],
            },] },
];
/** @nocollapse */
MzCardComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
]; };
MzCardComponent.propDecorators = {
    'true': [{ type: HostBinding, args: ['class.card',] },],
    'hoverable': [{ type: HostBinding, args: ['class.hoverable',] }, { type: Input },],
    'cardTitle': [{ type: ViewChild, args: ['cardTitle',] },],
    'cardAction': [{ type: ViewChild, args: ['cardAction',] },],
};
// Declare the tags to avoid error: '<mz-card-x>' is not a known element
// https://github.com/angular/angular/issues/11251
// tslint:disable: directive-selector
var MzCardTitleDirective = (function () {
    function MzCardTitleDirective() {
    }
    return MzCardTitleDirective;
}());
export { MzCardTitleDirective };
MzCardTitleDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-title' },] },
];
/** @nocollapse */
MzCardTitleDirective.ctorParameters = function () { return []; };
var MzCardContentDirective = (function () {
    function MzCardContentDirective() {
    }
    return MzCardContentDirective;
}());
export { MzCardContentDirective };
MzCardContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-content' },] },
];
/** @nocollapse */
MzCardContentDirective.ctorParameters = function () { return []; };
var MzCardActionDirective = (function () {
    function MzCardActionDirective() {
    }
    return MzCardActionDirective;
}());
export { MzCardActionDirective };
MzCardActionDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-card-action' },] },
];
/** @nocollapse */
MzCardActionDirective.ctorParameters = function () { return []; };
