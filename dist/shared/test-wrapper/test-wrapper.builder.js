import { TestBed } from '@angular/core/testing';
import { MzTestWrapperComponent } from './test-wrapper.component';
export function buildComponent(template, bindings) {
    if (bindings === void 0) { bindings = {}; }
    TestBed.overrideComponent(MzTestWrapperComponent, { set: { template: template, inputs: Object.keys(bindings) } });
    return TestBed.compileComponents().then(function () {
        // Note: we can also use TestComponent.prototype[binding] instead of
        // Object.assign; however, using Object.assign more closely matches
        // Angular, wherein the inputs are not available on construction.
        var fixture = TestBed.createComponent(MzTestWrapperComponent);
        Object.assign(fixture.componentInstance, bindings);
        return fixture;
    });
}
