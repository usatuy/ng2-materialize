import { Component, Input } from '@angular/core';
var MzProgressComponent = (function () {
    function MzProgressComponent() {
    }
    return MzProgressComponent;
}());
export { MzProgressComponent };
MzProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'mz-progress',
                template: "<div class=\"progress {{ backgroundClass }}\"><div class=\"progress-bar {{ progressClass }}\" [class.determinate]=\"percentage != null\" [class.indeterminate]=\"percentage == null\" [style.width.%]=\"percentage\"></div></div>",
                styles: [""],
            },] },
];
/** @nocollapse */
MzProgressComponent.ctorParameters = function () { return []; };
MzProgressComponent.propDecorators = {
    'backgroundClass': [{ type: Input },],
    'percentage': [{ type: Input },],
    'progressClass': [{ type: Input },],
};
