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
import { Component, Directive, EventEmitter, Input, Output, Renderer, ViewChild, } from '@angular/core';
import { HandlePropChanges } from '../shared/handle-prop-changes';
var MzModalComponent = (function (_super) {
    __extends(MzModalComponent, _super);
    function MzModalComponent(renderer) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.onClose = new EventEmitter();
        return _this;
    }
    MzModalComponent.prototype.ngOnInit = function () {
        this.initHandlers();
        this.initElements();
        this.handleProperties();
    };
    MzModalComponent.prototype.ngAfterViewInit = function () {
        this.initModal();
    };
    MzModalComponent.prototype.initElements = function () {
        this.modalElement = $(this.modalElementRef.nativeElement);
    };
    MzModalComponent.prototype.initHandlers = function () {
        var _this = this;
        this.handlers = {
            options: function () { return _this.handleOptions(); },
        };
    };
    MzModalComponent.prototype.initModal = function () {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', [this.options]);
    };
    MzModalComponent.prototype.handleProperties = function () {
        _super.prototype.executePropHandlers.call(this);
    };
    MzModalComponent.prototype.handleOptions = function () {
        var _this = this;
        // extend complete function to emit onClose on callback return
        var originalCompleteFn = this.options && this.options.complete || (function () { });
        this.options = Object.assign({}, this.options, {
            complete: function () {
                originalCompleteFn();
                _this.onClose.emit();
            },
        });
    };
    MzModalComponent.prototype.open = function () {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', ['open']);
    };
    MzModalComponent.prototype.close = function () {
        this.renderer.invokeElementMethod(this.modalElement, 'modal', ['close']);
    };
    return MzModalComponent;
}(HandlePropChanges));
export { MzModalComponent };
MzModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-modal',
                template: "<div #modal class=\"modal\" [class.modal-fixed-footer]=\"fixedFooter\" [class.bottom-sheet]=\"bottomSheet\" [class.modal-fullscreen]=\"fullscreen\"><div class=\"modal-content\"><h4><ng-content select=\"mz-modal-header\"></ng-content></h4><p><ng-content select=\"mz-modal-content\"></ng-content></p></div><div class=\"modal-footer\"><ng-content select=\"mz-modal-footer\"></ng-content></div></div>",
                styles: [".modal:not(.bottom-sheet).modal-fullscreen{top:12px!important;margin:0 auto;width:calc(100% - 24px);height:calc(100% - 24px);max-height:none}.modal.bottom-sheet.modal-fullscreen{height:100%;max-height:none}"],
            },] },
];
/** @nocollapse */
MzModalComponent.ctorParameters = function () { return [
    { type: Renderer, },
]; };
MzModalComponent.propDecorators = {
    'bottomSheet': [{ type: Input },],
    'fixedFooter': [{ type: Input },],
    'fullscreen': [{ type: Input },],
    'options': [{ type: Input },],
    'onClose': [{ type: Output },],
    'modalElementRef': [{ type: ViewChild, args: ['modal',] },],
};
// Declare the tags to avoid error: '<mz-modal-x>' is not a known element
// https://github.com/angular/angular/issues/11251
// tslint:disable: directive-selector
var MzModalHeaderDirective = (function () {
    function MzModalHeaderDirective() {
    }
    return MzModalHeaderDirective;
}());
export { MzModalHeaderDirective };
MzModalHeaderDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-header' },] },
];
/** @nocollapse */
MzModalHeaderDirective.ctorParameters = function () { return []; };
var MzModalContentDirective = (function () {
    function MzModalContentDirective() {
    }
    return MzModalContentDirective;
}());
export { MzModalContentDirective };
MzModalContentDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-content' },] },
];
/** @nocollapse */
MzModalContentDirective.ctorParameters = function () { return []; };
var MzModalFooterDirective = (function () {
    function MzModalFooterDirective() {
    }
    return MzModalFooterDirective;
}());
export { MzModalFooterDirective };
MzModalFooterDirective.decorators = [
    { type: Directive, args: [{ selector: 'mz-modal-footer' },] },
];
/** @nocollapse */
MzModalFooterDirective.ctorParameters = function () { return []; };
