import { NgModule } from '@angular/core';
import { HlmRadioGroupComponent } from './lib/hlm-radio-group.component';
import { HlmRadioIndicatorComponent } from './lib/hlm-radio-indicator.component';
import { HlmRadioComponent } from './lib/hlm-radio.component';
import * as i0 from "@angular/core";
export * from './lib/hlm-radio-group.component';
export * from './lib/hlm-radio-indicator.component';
export * from './lib/hlm-radio.component';
export const HlmRadioGroupImports = [HlmRadioGroupComponent, HlmRadioComponent, HlmRadioIndicatorComponent];
export class HlmRadioGroupModule {
    static ɵfac = function HlmRadioGroupModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmRadioGroupModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HlmRadioGroupModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [HlmRadioComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmRadioGroupModule, [{
        type: NgModule,
        args: [{
                imports: [...HlmRadioGroupImports],
                exports: [...HlmRadioGroupImports],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HlmRadioGroupModule, { imports: [HlmRadioGroupComponent, HlmRadioComponent, HlmRadioIndicatorComponent], exports: [HlmRadioGroupComponent, HlmRadioComponent, HlmRadioIndicatorComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLXJhZGlvZ3JvdXAtaGVsbS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFOUQsY0FBYyxpQ0FBaUMsQ0FBQztBQUNoRCxjQUFjLHFDQUFxQyxDQUFDO0FBQ3BELGNBQWMsMkJBQTJCLENBQUM7QUFFMUMsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0FBTTVHLE1BQU0sT0FBTyxtQkFBbUI7NkdBQW5CLG1CQUFtQjs0REFBbkIsbUJBQW1CO2dFQU42QixpQkFBaUI7O2lGQU1qRSxtQkFBbUI7Y0FKL0IsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRSxDQUFDLEdBQUcsb0JBQW9CLENBQUM7Z0JBQ2xDLE9BQU8sRUFBRSxDQUFDLEdBQUcsb0JBQW9CLENBQUM7YUFDbEM7O3dGQUNZLG1CQUFtQixjQU5LLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLDBCQUEwQixhQUFyRSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIbG1SYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvaGxtLXJhZGlvLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIbG1SYWRpb0luZGljYXRvckNvbXBvbmVudCB9IGZyb20gJy4vbGliL2hsbS1yYWRpby1pbmRpY2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEhsbVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvaGxtLXJhZGlvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL2hsbS1yYWRpby1ncm91cC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvaGxtLXJhZGlvLWluZGljYXRvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvaGxtLXJhZGlvLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBIbG1SYWRpb0dyb3VwSW1wb3J0cyA9IFtIbG1SYWRpb0dyb3VwQ29tcG9uZW50LCBIbG1SYWRpb0NvbXBvbmVudCwgSGxtUmFkaW9JbmRpY2F0b3JDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbLi4uSGxtUmFkaW9Hcm91cEltcG9ydHNdLFxuXHRleHBvcnRzOiBbLi4uSGxtUmFkaW9Hcm91cEltcG9ydHNdLFxufSlcbmV4cG9ydCBjbGFzcyBIbG1SYWRpb0dyb3VwTW9kdWxlIHt9XG4iXX0=