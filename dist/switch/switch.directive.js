import { Directive, ElementRef, Input, Renderer } from '@angular/core';
var MzSwitchDirective = (function () {
    function MzSwitchDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    MzSwitchDirective.prototype.ngOnInit = function () {
        this.initElements();
        this.handleInputType();
    };
    MzSwitchDirective.prototype.initElements = function () {
        this.switchElement = $(this.elementRef.nativeElement);
        this.switchContainerElement = $(this.elementRef.nativeElement).parent('label').parent('.switch');
        if (this.switchContainerElement.length === 0) {
            console.error('Input with mz-switch directive must be placed inside an [mz-switch-container] tag', this.switchElement);
            return;
        }
    };
    MzSwitchDirective.prototype.handleInputType = function () {
        var type = this.switchElement.attr('type');
        if (type !== 'checkbox') {
            this.renderer.setElementAttribute(this.switchElement[0], 'type', 'checkbox');
        }
    };
    return MzSwitchDirective;
}());
export { MzSwitchDirective };
MzSwitchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzSwitch], [mz-switch]',
            },] },
];
/** @nocollapse */
MzSwitchDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzSwitchDirective.propDecorators = {
    'off': [{ type: Input },],
    'on': [{ type: Input },],
};
