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
var MzButtonDirective = (function (_super) {
    __extends(MzButtonDirective, _super);
    function MzButtonDirective(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    MzButtonDirective.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initMaterialize();
        _super.prototype.executePropHandlers.call(this);
    };
    MzButtonDirective.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            disabled: function () { return _this.handleDisabled(); },
            flat: function () { return _this.handleFlat(); },
            float: function () { return _this.handleFloat(); },
            large: function () { return _this.handleLarge(); },
            noWaves: function () { return _this.handleNoWaves(); },
        };
    };
    MzButtonDirective.prototype.initMaterialize = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn', true);
    };
    MzButtonDirective.prototype.handleDisabled = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'disabled', this.disabled);
    };
    MzButtonDirective.prototype.handleFlat = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-flat', this.flat);
    };
    MzButtonDirective.prototype.handleFloat = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-floating', this.float);
    };
    MzButtonDirective.prototype.handleLarge = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'btn-large', this.large);
    };
    MzButtonDirective.prototype.handleNoWaves = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-effect', !this.noWaves);
        this.renderer.setElementClass(this.elementRef.nativeElement, 'waves-light', !this.noWaves);
    };
    return MzButtonDirective;
}(HandlePropChanges));
export { MzButtonDirective };
MzButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: "\n    a[mz-button],\n    a[mzButton],\n    button[mz-button],\n    button[mzButton]",
            },] },
];
/** @nocollapse */
MzButtonDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzButtonDirective.propDecorators = {
    'disabled': [{ type: Input },],
    'flat': [{ type: Input },],
    'float': [{ type: Input },],
    'large': [{ type: Input },],
    'noWaves': [{ type: Input },],
};