import { Component, Input } from '@angular/core';
var MzBadgeComponent = (function () {
    function MzBadgeComponent() {
    }
    return MzBadgeComponent;
}());
export { MzBadgeComponent };
MzBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-badge',
                template: "<span #badge class=\"badge {{ badgeClass }}\" [class.new]=\"new || !!badgeClass\" [attr.data-badge-caption]=\"caption\">{{ value }}</span>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzBadgeComponent.ctorParameters = function () { return []; };
MzBadgeComponent.propDecorators = {
    'badgeClass': [{ type: Input },],
    'caption': [{ type: Input },],
    'new': [{ type: Input },],
    'value': [{ type: Input },],
};
