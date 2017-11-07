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
var MzIconMdiDirective = (function (_super) {
    __extends(MzIconMdiDirective, _super);
    function MzIconMdiDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    MzIconMdiDirective.prototype.ngAfterViewInit = function () {
        this.initHandlers();
        this.initMaterialize();
        _super.prototype.executePropHandlers.call(this);
    };
    MzIconMdiDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            align: function (previousValue) { return _this.handleAlign(previousValue); },
            flip: function (previousValue) { return _this.handleFlip(previousValue); },
            icon: function (previousValue) { return _this.handleIcon(previousValue); },
            rotate: function (previousValue) { return _this.handleRotate(previousValue); },
            size: function (previousValue) { return _this.handleSize(previousValue); },
        };
    };
    MzIconMdiDirective.prototype.initMaterialize = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi', true);
    };
    MzIconMdiDirective.prototype.handleAlign = function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, this.align, !!this.align);
    };
    MzIconMdiDirective.prototype.handleFlip = function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-flip-' + this.flip, !!this.flip);
    };
    MzIconMdiDirective.prototype.handleIcon = function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.icon, true);
    };
    MzIconMdiDirective.prototype.handleRotate = function (previousValue) {
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-rotate-' + this.rotate, !!this.rotate);
    };
    MzIconMdiDirective.prototype.handleSize = function (previousValue) {
        if (!this.size) {
            this.size = '24px';
        }
        if (previousValue) {
            this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + previousValue, false);
        }
        this.renderer.setElementClass(this.elementRef.nativeElement, 'mdi-' + this.size, true);
    };
    return MzIconMdiDirective;
}(HandlePropChanges));
export { MzIconMdiDirective };
MzIconMdiDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mz-icon-mdi], [mzIconMdi]',
            },] },
];
/** @nocollapse */
MzIconMdiDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzIconMdiDirective.propDecorators = {
    'align': [{ type: Input },],
    'flip': [{ type: Input },],
    'icon': [{ type: Input },],
    'rotate': [{ type: Input },],
    'size': [{ type: Input },],
};
