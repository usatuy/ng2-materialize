import { Directive, HostBinding } from '@angular/core';
var MzSecondaryContentDirective = (function () {
    function MzSecondaryContentDirective() {
    }
    return MzSecondaryContentDirective;
}());
export { MzSecondaryContentDirective };
MzSecondaryContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzSecondaryContent], [mz-secondary-content]',
            },] },
];
/** @nocollapse */
MzSecondaryContentDirective.ctorParameters = function () { return []; };
MzSecondaryContentDirective.propDecorators = {
    'true': [{ type: HostBinding, args: ['class.secondary-content',] },],
};
