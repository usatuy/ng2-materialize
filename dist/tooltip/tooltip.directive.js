import { Directive, ElementRef, Input, Renderer } from '@angular/core';
var MzTooltipDirective = (function () {
    function MzTooltipDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    MzTooltipDirective.prototype.ngOnInit = function () {
        this.initElements();
    };
    MzTooltipDirective.prototype.ngAfterViewInit = function () {
        this.initTooltip();
    };
    MzTooltipDirective.prototype.ngOnChanges = function (changes) {
        if (this.targetElement) {
            this.initTooltip();
        }
    };
    MzTooltipDirective.prototype.ngOnDestroy = function () {
        this.renderer.invokeElementMethod(this.targetElement, 'tooltip', ['remove']);
    };
    MzTooltipDirective.prototype.initElements = function () {
        this.targetElement = $(this.elementRef.nativeElement);
    };
    MzTooltipDirective.prototype.initTooltip = function () {
        var tooltipOptions = {
            delay: isNaN(this.delay) || this.delay == null ? 350 : this.delay,
            html: this.html || false,
            position: this.position || 'bottom',
            tooltip: this.tooltip,
        };
        this.renderer.invokeElementMethod(this.targetElement, 'tooltip', [tooltipOptions]);
    };
    return MzTooltipDirective;
}());
export { MzTooltipDirective };
MzTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mzTooltip], [mz-tooltip]',
            },] },
];
/** @nocollapse */
MzTooltipDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer, },
]; };
MzTooltipDirective.propDecorators = {
    'delay': [{ type: Input },],
    'html': [{ type: Input },],
    'position': [{ type: Input },],
    'tooltip': [{ type: Input },],
};
