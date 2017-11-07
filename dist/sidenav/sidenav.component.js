import { Component, Input, } from '@angular/core';
var MzSidenavComponent = (function () {
    function MzSidenavComponent() {
        this._opened = false;
    }
    Object.defineProperty(MzSidenavComponent.prototype, "opened", {
        get: function () { return this._opened; },
        set: function (value) {
            this._opened = value;
            this.collapseButton.sideNav(this._opened ? 'show' : 'hide');
        },
        enumerable: true,
        configurable: true
    });
    ;
    MzSidenavComponent.prototype.ngAfterViewInit = function () {
        this.initCollapseButton();
        this.initCollapsibleLinks();
    };
    MzSidenavComponent.prototype.ngOnDestroy = function () {
        this.collapseButton.sideNav('destroy');
    };
    MzSidenavComponent.prototype.initCollapseButton = function () {
        var _this = this;
        // fake button if no collapseButtonId is provided
        this.collapseButton = this.collapseButtonId
            ? $("#" + this.collapseButtonId)
            : $(document.createElement('template'));
        // add data-activates to collapse button
        this.collapseButton.attr('data-activates', this.id);
        // extend onOpen function to update opened state
        var onOpen = this.onOpen || (function () { });
        this.onOpen = function () {
            onOpen();
            _this._opened = true;
        };
        // extend onClose function to update opened state
        var onClose = this.onClose || (function () { });
        this.onClose = function () {
            onClose();
            _this._opened = false;
        };
        // initialize sidenav
        this.collapseButton.sideNav({
            closeOnClick: this.closeOnClick || false,
            draggable: this.draggable != null ? this.draggable : true,
            edge: this.edge || 'left',
            menuWidth: isNaN(this.width) ? 300 : this.width,
            onClose: this.onClose,
            onOpen: this.onOpen,
        });
    };
    MzSidenavComponent.prototype.initCollapsibleLinks = function () {
        // initialize collapsible elements
        $("#" + this.id + " .collapsible").collapsible();
    };
    return MzSidenavComponent;
}());
export { MzSidenavComponent };
MzSidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-sidenav',
                template: "<ul class=\"side-nav {{ backgroundClass }}\" [attr.id]=\"id\" [class.fixed]=\"fixed\"><ng-content></ng-content></ul>",
            },] },
];
/** @nocollapse */
MzSidenavComponent.ctorParameters = function () { return []; };
MzSidenavComponent.propDecorators = {
    'backgroundClass': [{ type: Input },],
    'closeOnClick': [{ type: Input },],
    'collapseButtonId': [{ type: Input },],
    'draggable': [{ type: Input },],
    'edge': [{ type: Input },],
    'fixed': [{ type: Input },],
    'id': [{ type: Input },],
    'onClose': [{ type: Input },],
    'onOpen': [{ type: Input },],
    'width': [{ type: Input },],
};
