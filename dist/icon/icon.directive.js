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
import { Directive, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzIconDirective = (function (_super) {
    __extends(MzIconDirective, _super);
    function MzIconDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    MzIconDirective.prototype.ngAfterViewInit = function () {
        this.initHandlers();
        this.initMaterialize();
        _super.prototype.executePropHandlers.call(this);
    };
    MzIconDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            align: function (previousValue) { return _this.handleAlign(previousValue); },
            icon: function () { return _this.handleIcon(); },
            size: function (previousValue) { return _this.handleSize(previousValue); },
        };
    };
    MzIconDirective.prototype.initMaterialize = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'material-icons', true);
    };
    MzIconDirective.prototype.handleAlign = function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, this.align, !!this.align);
    };
    MzIconDirective.prototype.handleIcon = function () {
        this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', this.icon);
    };
    MzIconDirective.prototype.handleSize = function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, this.size, !!this.size);
    };
    return MzIconDirective;
}(HandlePropChanges));
export { MzIconDirective };
MzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i[mz-icon], i[mzIcon]',
            },] },
];
/** @nocollapse */
MzIconDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzIconDirective.propDecorators = {
    'align': [{ type: Input },],
    'icon': [{ type: Input },],
    'size': [{ type: Input },],
};
