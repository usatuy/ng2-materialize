var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Directive, ElementRef, HostBinding, Input, Renderer } from '@angular/core';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzCheckboxDirective = (function (_super) {
    __extends(MzCheckboxDirective, _super);
    function MzCheckboxDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    MzCheckboxDirective.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initElements();
        this.handleProperties();
    };
    MzCheckboxDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            filledIn: function () { return _this.handleFilledIn(); },
            label: function () { return _this.handleLabel(); },
        };
    };
    MzCheckboxDirective.prototype.initElements = function () {
        this.checkboxElement = $(this.elementRef.nativeElement);
        this.checkboxContainerElement = $(this.elementRef.nativeElement).parent('.checkbox-field');
        this.labelElement = this.createLabelElement();
    };
    MzCheckboxDirective.prototype.createLabelElement = function () {
        var labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.checkboxElement, 'after', [labelElement]);
        return $(labelElement);
    };
    MzCheckboxDirective.prototype.handleProperties = function () {
        if (this.checkboxContainerElement.length === 0) {
            console.error('Input with mz-checkbox directive must be placed inside a [mz-checkbox-container] tag', this.checkboxElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    MzCheckboxDirective.prototype.handleLabel = function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    MzCheckboxDirective.prototype.handleFilledIn = function () {
        this.renderer.setElementClass(this.checkboxElement[0], 'filled-in', this.filledIn);
    };
    return MzCheckboxDirective;
}(HandlePropChanges));
export { MzCheckboxDirective };
MzCheckboxDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzCheckbox], input[mz-checkbox]',
            },] },
];
/** @nocollapse */
MzCheckboxDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzCheckboxDirective.propDecorators = {
    'id': [{ type: HostBinding }, { type: Input },],
    'filledIn': [{ type: Input },],
    'label': [{ type: Input },],
};
