import { Component, ContentChildren, Input, ViewChild, } from '@angular/core';
import { MzTabItemComponent } from './tab-item/tab-item.component';
var MzTabComponent = (function () {
    function MzTabComponent() {
    }
    MzTabComponent.prototype.ngAfterViewInit = function () {
        this.initTabs();
    };
    MzTabComponent.prototype.initTabs = function () {
        var options = {
            onShow: this.onShow,
            responsiveThreshold: this.responsiveThreshold,
            swipeable: this.swipeable,
        };
        $(this.tabs.nativeElement).tabs(options);
    };
    MzTabComponent.prototype.selectTab = function (tabItemId) {
        $(this.tabs.nativeElement).tabs('select_tab', tabItemId);
    };
    return MzTabComponent;
}());
export { MzTabComponent };
MzTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-tab',
                template: "<ul #tabs class=\"tabs\" [class.tabs-fixed-width]=\"fixedTabWidth\"><li class=\"tab\" [class.disabled]=\"tabItem.disabled\" *ngFor=\"let tabItem of tabItems.toArray()\"><a [class.active]=\"tabItem.active\" href=\"{{ tabItem.href ? tabItem.href : '#' + tabItem.link }}\" target=\"{{ tabItem.target }}\">{{ tabItem.label }}</a></li></ul><div><ng-content select=\"mz-tab-item\"></ng-content></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzTabComponent.ctorParameters = function () { return []; };
MzTabComponent.propDecorators = {
    'fixedTabWidth': [{ type: Input },],
    'onShow': [{ type: Input },],
    'responsiveThreshold': [{ type: Input },],
    'swipeable': [{ type: Input },],
    'tabs': [{ type: ViewChild, args: ['tabs',] },],
    'tabItems': [{ type: ContentChildren, args: [MzTabItemComponent,] },],
};
