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
import { Component, ElementRef, Input, Renderer, } from '@angular/core';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzDropdownComponent = (function (_super) {
    __extends(MzDropdownComponent, _super);
    function MzDropdownComponent(elementRef, renderer) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        return _this;
    }
    MzDropdownComponent.prototype.ngAfterViewInit = function () {
        this.initHandlers();
        this.initDropdownButtonElement();
        this.handleProperties();
    };
    MzDropdownComponent.prototype.close = function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.dropdownButtonElement, 'dropdown', ['close']); });
    };
    MzDropdownComponent.prototype.initDropdownButtonElement = function () {
        this.dropdownButtonElement = $("#" + this.dropdownButtonId);
    };
    MzDropdownComponent.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            align: function () { return _this.handleDropdown(); },
            belowOrigin: function () { return _this.handleDropdown(); },
            constrainWidth: function () { return _this.handleDropdown(); },
            dropdownButtonId: function () { return _this.handleDataActivates(); },
            gutter: function () { return _this.handleDropdown(); },
            hover: function () { return _this.handleDropdown(); },
            id: function () { return _this.handleDropdown(); },
            inDuration: function () { return _this.handleDropdown(); },
            outDuration: function () { return _this.handleDropdown(); },
            stopPropagation: function () { return _this.handleDropdown(); },
        };
    };
    MzDropdownComponent.prototype.handleDataActivates = function () {
        this.renderer.setElementAttribute(this.dropdownButtonElement[0], 'data-activates', this.id);
    };
    MzDropdownComponent.prototype.handleDropdown = function () {
        this.validateProperties();
        var options = {
            alignment: this.align,
            belowOrigin: this.belowOrigin,
            constrainWidth: this.constrainWidth,
            gutter: this.gutter,
            hover: this.hover,
            inDuration: this.inDuration,
            outDuration: this.outDuration,
            stopPropagation: this.stopPropagation,
        };
        // Initialize dropdown button for dropdown
        this.renderer.invokeElementMethod(this.dropdownButtonElement, 'dropdown', [options]);
    };
    MzDropdownComponent.prototype.handleProperties = function () {
        this.handleDataActivates();
        this.handleDropdown();
    };
    MzDropdownComponent.prototype.open = function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.dropdownButtonElement, 'dropdown', ['open']); });
    };
    MzDropdownComponent.prototype.validateProperties = function () {
        if (!this.id) {
            throw new Error('Attribute [id] from mz-dropdown is required. ' + this.elementRef.nativeElement);
        }
        if (this.dropdownButtonElement.length === 0) {
            throw new Error('Attribute [dropdownButtonId] from mz-dropdown is required and should be an existing element. ' +
                this.elementRef.nativeElement);
        }
    };
    return MzDropdownComponent;
}(HandlePropChanges));
export { MzDropdownComponent };
MzDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-dropdown',
                template: "<ul class=\"dropdown-content\" [attr.id]=\"id\"><ng-content></ng-content></ul>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzDropdownComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzDropdownComponent.propDecorators = {
    'align': [{ type: Input },],
    'belowOrigin': [{ type: Input },],
    'constrainWidth': [{ type: Input },],
    'dropdownButtonId': [{ type: Input },],
    'gutter': [{ type: Input },],
    'hover': [{ type: Input },],
    'id': [{ type: Input },],
    'inDuration': [{ type: Input },],
    'outDuration': [{ type: Input },],
    'stopPropagation': [{ type: Input },],
};
