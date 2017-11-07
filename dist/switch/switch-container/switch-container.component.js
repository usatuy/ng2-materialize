import { Component, ContentChild } from '@angular/core';
import { MzSwitchDirective } from '../switch.directive';
var MzSwitchContainerComponent = (function () {
    function MzSwitchContainerComponent() {
    }
    return MzSwitchContainerComponent;
}());
export { MzSwitchContainerComponent };
MzSwitchContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-switch-container',
                template: "<div class=\"switch\"><label><span class=\"off\">{{ mzSwitchDirective?.off }}</span><ng-content></ng-content><span class=\"lever\"></span><span class=\"on\">{{ mzSwitchDirective?.on }}</span></label></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzSwitchContainerComponent.ctorParameters = function () { return []; };
MzSwitchContainerComponent.propDecorators = {
    'mzSwitchDirective': [{ type: ContentChild, args: [MzSwitchDirective,] },],
};
