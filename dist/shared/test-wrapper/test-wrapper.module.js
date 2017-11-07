// Need this module to prevent error 'Cannot determine the module for class TestWrapperComponent' with AoT compiling
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MzTestWrapperComponent } from './test-wrapper.component';
var TestWrapperModule = (function () {
    function TestWrapperModule() {
    }
    return TestWrapperModule;
}());
export { TestWrapperModule };
TestWrapperModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                exports: [MzTestWrapperComponent],
                declarations: [MzTestWrapperComponent],
            },] },
];
/** @nocollapse */
TestWrapperModule.ctorParameters = function () { return []; };
