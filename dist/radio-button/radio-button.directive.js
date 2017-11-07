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
var MzRadioButtonDirective = (function (_super) {
    __extends(MzRadioButtonDirective, _super);
    function MzRadioButtonDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    MzRadioButtonDirective.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initElements();
        this.handleProperties();
    };
    MzRadioButtonDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            label: function () { return _this.handleLabel(); },
            withGap: function () { return _this.handleWithGap(); },
        };
    };
    MzRadioButtonDirective.prototype.initElements = function () {
        this.inputElement = $(this.elementRef.nativeElement);
        this.inputContainerElement = $(this.elementRef.nativeElement).parent('.radio-button-field');
        this.labelElement = this.createLabelElement();
    };
    MzRadioButtonDirective.prototype.createLabelElement = function () {
        var labelElement = document.createElement('label');
        labelElement.setAttribute('for', this.id);
        this.renderer.invokeElementMethod(this.inputElement, 'after', [labelElement]);
        return $(labelElement);
    };
    MzRadioButtonDirective.prototype.handleProperties = function () {
        if (this.inputContainerElement.length === 0) {
            console.error('Radio Button must be placed inside a [mz-radio-button-container] tag', this.inputElement);
            return;
        }
        _super.prototype.executePropHandlers.call(this);
    };
    MzRadioButtonDirective.prototype.handleLabel = function () {
        this.renderer.invokeElementMethod(this.labelElement, 'text', [this.label]);
    };
    MzRadioButtonDirective.prototype.handleWithGap = function () {
        this.renderer.setElementClass(this.inputElement[0], 'with-gap', this.withGap);
    };
    return MzRadioButtonDirective;
}(HandlePropChanges));
export { MzRadioButtonDirective };
MzRadioButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[mzRadioButton], input[mz-radio-button]',
            },] },
];
/** @nocollapse */
MzRadioButtonDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzRadioButtonDirective.propDecorators = {
    'id': [{ type: HostBinding }, { type: Input },],
    'label': [{ type: Input },],
    'withGap': [{ type: Input },],
};
