import { Component, HostBinding, Input } from '@angular/core';
var MzCollectionItemComponent = (function () {
    function MzCollectionItemComponent() {
    }
    return MzCollectionItemComponent;
}());
export { MzCollectionItemComponent };
MzCollectionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-collection-item',
                template: "<ng-content></ng-content>",
                styles: [":host{display:block}"],
            },] },
];
/** @nocollapse */
MzCollectionItemComponent.ctorParameters = function () { return []; };
MzCollectionItemComponent.propDecorators = {
    'true': [{ type: HostBinding, args: ['class.collection-item',] },],
    'avatar': [{ type: HostBinding, args: ['class.avatar',] }, { type: Input },],
    'dismissable': [{ type: HostBinding, args: ['class.dismissable',] }, { type: Input },],
};
