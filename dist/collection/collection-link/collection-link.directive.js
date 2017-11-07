import { Directive, HostBinding, Input } from '@angular/core';
var MzCollectionLinkDirective = (function () {
    function MzCollectionLinkDirective() {
    }
    return MzCollectionLinkDirective;
}());
export { MzCollectionLinkDirective };
MzCollectionLinkDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzCollectionLink], [mz-collection-link]',
            },] },
];
/** @nocollapse */
MzCollectionLinkDirective.ctorParameters = function () { return []; };
MzCollectionLinkDirective.propDecorators = {
    'active': [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
    'true': [{ type: HostBinding, args: ['class.collection-item',] },],
};
