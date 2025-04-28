import { NgModule } from '@angular/core';
import { HlmInputErrorDirective } from './lib/hlm-input-error.directive';
import { HlmInputDirective } from './lib/hlm-input.directive';
import * as i0 from "@angular/core";
export * from './lib/hlm-input-error.directive';
export * from './lib/hlm-input.directive';
export class HlmInputModule {
    static ɵfac = function HlmInputModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmInputModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HlmInputModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmInputModule, [{
        type: NgModule,
        args: [{
                imports: [HlmInputDirective, HlmInputErrorDirective],
                exports: [HlmInputDirective, HlmInputErrorDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HlmInputModule, { imports: [HlmInputDirective, HlmInputErrorDirective], exports: [HlmInputDirective, HlmInputErrorDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLWlucHV0LWhlbG0vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRTlELGNBQWMsaUNBQWlDLENBQUM7QUFDaEQsY0FBYywyQkFBMkIsQ0FBQztBQU0xQyxNQUFNLE9BQU8sY0FBYzt3R0FBZCxjQUFjOzREQUFkLGNBQWM7OztpRkFBZCxjQUFjO2NBSjFCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxzQkFBc0IsQ0FBQztnQkFDcEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7YUFDcEQ7O3dGQUNZLGNBQWMsY0FIaEIsaUJBQWlCLEVBQUUsc0JBQXNCLGFBQ3pDLGlCQUFpQixFQUFFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIbG1JbnB1dEVycm9yRGlyZWN0aXZlIH0gZnJvbSAnLi9saWIvaGxtLWlucHV0LWVycm9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIbG1JbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vbGliL2hsbS1pbnB1dC5kaXJlY3RpdmUnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9obG0taW5wdXQtZXJyb3IuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2hsbS1pbnB1dC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbSGxtSW5wdXREaXJlY3RpdmUsIEhsbUlucHV0RXJyb3JEaXJlY3RpdmVdLFxuXHRleHBvcnRzOiBbSGxtSW5wdXREaXJlY3RpdmUsIEhsbUlucHV0RXJyb3JEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBIbG1JbnB1dE1vZHVsZSB7fVxuIl19