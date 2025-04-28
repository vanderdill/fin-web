import { NgModule } from '@angular/core';
import { HlmDialogCloseDirective } from './lib/hlm-dialog-close.directive';
import { HlmDialogContentComponent } from './lib/hlm-dialog-content.component';
import { HlmDialogDescriptionDirective } from './lib/hlm-dialog-description.directive';
import { HlmDialogFooterComponent } from './lib/hlm-dialog-footer.component';
import { HlmDialogHeaderComponent } from './lib/hlm-dialog-header.component';
import { HlmDialogOverlayDirective } from './lib/hlm-dialog-overlay.directive';
import { HlmDialogTitleDirective } from './lib/hlm-dialog-title.directive';
import { HlmDialogComponent } from './lib/hlm-dialog.component';
import * as i0 from "@angular/core";
export * from './lib/hlm-dialog-close.directive';
export * from './lib/hlm-dialog-content.component';
export * from './lib/hlm-dialog-description.directive';
export * from './lib/hlm-dialog-footer.component';
export * from './lib/hlm-dialog-header.component';
export * from './lib/hlm-dialog-overlay.directive';
export * from './lib/hlm-dialog-title.directive';
export * from './lib/hlm-dialog.component';
export * from './lib/hlm-dialog.service';
export const HlmDialogImports = [
    HlmDialogComponent,
    HlmDialogCloseDirective,
    HlmDialogContentComponent,
    HlmDialogDescriptionDirective,
    HlmDialogFooterComponent,
    HlmDialogHeaderComponent,
    HlmDialogOverlayDirective,
    HlmDialogTitleDirective,
];
export class HlmDialogModule {
    static ɵfac = function HlmDialogModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HlmDialogModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [HlmDialogComponent,
            HlmDialogContentComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogModule, [{
        type: NgModule,
        args: [{
                imports: [...HlmDialogImports],
                exports: [...HlmDialogImports],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HlmDialogModule, { imports: [HlmDialogComponent,
        HlmDialogCloseDirective,
        HlmDialogContentComponent,
        HlmDialogDescriptionDirective,
        HlmDialogFooterComponent,
        HlmDialogHeaderComponent,
        HlmDialogOverlayDirective,
        HlmDialogTitleDirective], exports: [HlmDialogComponent,
        HlmDialogCloseDirective,
        HlmDialogContentComponent,
        HlmDialogDescriptionDirective,
        HlmDialogFooterComponent,
        HlmDialogHeaderComponent,
        HlmDialogOverlayDirective,
        HlmDialogTitleDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLWRpYWxvZy1oZWxtL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVoRSxjQUFjLGtDQUFrQyxDQUFDO0FBQ2pELGNBQWMsb0NBQW9DLENBQUM7QUFDbkQsY0FBYyx3Q0FBd0MsQ0FBQztBQUN2RCxjQUFjLG1DQUFtQyxDQUFDO0FBQ2xELGNBQWMsbUNBQW1DLENBQUM7QUFDbEQsY0FBYyxvQ0FBb0MsQ0FBQztBQUNuRCxjQUFjLGtDQUFrQyxDQUFDO0FBQ2pELGNBQWMsNEJBQTRCLENBQUM7QUFDM0MsY0FBYywwQkFBMEIsQ0FBQztBQUV6QyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUMvQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsdUJBQXVCO0NBQ2QsQ0FBQztBQU1YLE1BQU0sT0FBTyxlQUFlO3lHQUFmLGVBQWU7NERBQWYsZUFBZTtnRUFkM0Isa0JBQWtCO1lBRWxCLHlCQUF5Qjs7aUZBWWIsZUFBZTtjQUozQixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQzthQUM5Qjs7d0ZBQ1ksZUFBZSxjQWQzQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6Qiw2QkFBNkI7UUFDN0Isd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsdUJBQXVCLGFBUHZCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3Qix3QkFBd0I7UUFDeEIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIbG1EaWFsb2dDbG9zZURpcmVjdGl2ZSB9IGZyb20gJy4vbGliL2hsbS1kaWFsb2ctY2xvc2UuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhsbURpYWxvZ0NvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2xpYi9obG0tZGlhbG9nLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEhsbURpYWxvZ0Rlc2NyaXB0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9saWIvaGxtLWRpYWxvZy1kZXNjcmlwdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSGxtRGlhbG9nRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9saWIvaGxtLWRpYWxvZy1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEhsbURpYWxvZ0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbGliL2hsbS1kaWFsb2ctaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIbG1EaWFsb2dPdmVybGF5RGlyZWN0aXZlIH0gZnJvbSAnLi9saWIvaGxtLWRpYWxvZy1vdmVybGF5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIbG1EaWFsb2dUaXRsZURpcmVjdGl2ZSB9IGZyb20gJy4vbGliL2hsbS1kaWFsb2ctdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhsbURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vbGliL2hsbS1kaWFsb2cuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvaGxtLWRpYWxvZy1jbG9zZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvaGxtLWRpYWxvZy1jb250ZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9obG0tZGlhbG9nLWRlc2NyaXB0aW9uLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9obG0tZGlhbG9nLWZvb3Rlci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvaGxtLWRpYWxvZy1oZWFkZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2hsbS1kaWFsb2ctb3ZlcmxheS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvaGxtLWRpYWxvZy10aXRsZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvaGxtLWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvaGxtLWRpYWxvZy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEhsbURpYWxvZ0ltcG9ydHMgPSBbXG5cdEhsbURpYWxvZ0NvbXBvbmVudCxcblx0SGxtRGlhbG9nQ2xvc2VEaXJlY3RpdmUsXG5cdEhsbURpYWxvZ0NvbnRlbnRDb21wb25lbnQsXG5cdEhsbURpYWxvZ0Rlc2NyaXB0aW9uRGlyZWN0aXZlLFxuXHRIbG1EaWFsb2dGb290ZXJDb21wb25lbnQsXG5cdEhsbURpYWxvZ0hlYWRlckNvbXBvbmVudCxcblx0SGxtRGlhbG9nT3ZlcmxheURpcmVjdGl2ZSxcblx0SGxtRGlhbG9nVGl0bGVEaXJlY3RpdmUsXG5dIGFzIGNvbnN0O1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbLi4uSGxtRGlhbG9nSW1wb3J0c10sXG5cdGV4cG9ydHM6IFsuLi5IbG1EaWFsb2dJbXBvcnRzXSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtRGlhbG9nTW9kdWxlIHt9XG4iXX0=