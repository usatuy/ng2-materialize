import { Directive, HostBinding } from '@angular/core';
var MzAvatarDirective = (function () {
    function MzAvatarDirective() {
    }
    return MzAvatarDirective;
}());
export { MzAvatarDirective };
MzAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzAvatar], [mz-avatar]',
            },] },
];
/** @nocollapse */
MzAvatarDirective.ctorParameters = function () { return []; };
MzAvatarDirective.propDecorators = {
    'true': [{ type: HostBinding, args: ['class.circle',] },],
};
