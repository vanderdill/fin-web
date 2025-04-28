import { ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation } from '@angular/core';
import { BrnDialogComponent, BrnDialogOverlayComponent, provideBrnDialogDefaultOptions, } from '@spartan-ng/brain/dialog';
import { HlmDialogOverlayDirective } from './hlm-dialog-overlay.directive';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class HlmDialogComponent extends BrnDialogComponent {
    static ɵfac = /*@__PURE__*/ (() => { let ɵHlmDialogComponent_BaseFactory; return function HlmDialogComponent_Factory(__ngFactoryType__) { return (ɵHlmDialogComponent_BaseFactory || (ɵHlmDialogComponent_BaseFactory = i0.ɵɵgetInheritedFactory(HlmDialogComponent)))(__ngFactoryType__ || HlmDialogComponent); }; })();
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HlmDialogComponent, selectors: [["hlm-dialog"]], exportAs: ["hlmDialog"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: BrnDialogComponent,
                    useExisting: forwardRef(() => HlmDialogComponent),
                },
                provideBrnDialogDefaultOptions({
                // add custom options here
                }),
            ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["hlm", ""]], template: function HlmDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "brn-dialog-overlay", 0);
            i0.ɵɵprojection(1);
        } }, dependencies: [BrnDialogOverlayComponent, HlmDialogOverlayDirective], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'hlm-dialog',
                standalone: true,
                imports: [BrnDialogOverlayComponent, HlmDialogOverlayDirective],
                providers: [
                    {
                        provide: BrnDialogComponent,
                        useExisting: forwardRef(() => HlmDialogComponent),
                    },
                    provideBrnDialogDefaultOptions({
                    // add custom options here
                    }),
                ],
                template: `
		<brn-dialog-overlay hlm />
		<ng-content />
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'hlmDialog',
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HlmDialogComponent, { className: "HlmDialogComponent", filePath: "lib/hlm-dialog.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLWRpYWxvZy1oZWxtL3NyYy9saWIvaGxtLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUNOLGtCQUFrQixFQUNsQix5QkFBeUIsRUFDekIsOEJBQThCLEdBQzlCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQXVCM0UsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGtCQUFrQjtxUEFBN0Msa0JBQWtCLHlCQUFsQixrQkFBa0I7NkRBQWxCLGtCQUFrQix5RkFqQm5CO2dCQUNWO29CQUNDLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ2pEO2dCQUNELDhCQUE4QixDQUFDO2dCQUM5QiwwQkFBMEI7aUJBQzFCLENBQUM7YUFDRjs7WUFFQSx3Q0FBMEI7WUFDMUIsa0JBQWM7NEJBWkwseUJBQXlCLEVBQUUseUJBQXlCOztpRkFrQmxELGtCQUFrQjtjQXJCOUIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsT0FBTyxFQUFFLENBQUMseUJBQXlCLEVBQUUseUJBQXlCLENBQUM7Z0JBQy9ELFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsa0JBQWtCO3dCQUMzQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQztxQkFDakQ7b0JBQ0QsOEJBQThCLENBQUM7b0JBQzlCLDBCQUEwQjtxQkFDMUIsQ0FBQztpQkFDRjtnQkFDRCxRQUFRLEVBQUU7OztFQUdUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLFdBQVc7YUFDckI7O2tGQUNZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGZvcndhcmRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRCcm5EaWFsb2dDb21wb25lbnQsXG5cdEJybkRpYWxvZ092ZXJsYXlDb21wb25lbnQsXG5cdHByb3ZpZGVCcm5EaWFsb2dEZWZhdWx0T3B0aW9ucyxcbn0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vZGlhbG9nJztcbmltcG9ydCB7IEhsbURpYWxvZ092ZXJsYXlEaXJlY3RpdmUgfSBmcm9tICcuL2hsbS1kaWFsb2ctb3ZlcmxheS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdobG0tZGlhbG9nJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW0JybkRpYWxvZ092ZXJsYXlDb21wb25lbnQsIEhsbURpYWxvZ092ZXJsYXlEaXJlY3RpdmVdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBCcm5EaWFsb2dDb21wb25lbnQsXG5cdFx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBIbG1EaWFsb2dDb21wb25lbnQpLFxuXHRcdH0sXG5cdFx0cHJvdmlkZUJybkRpYWxvZ0RlZmF1bHRPcHRpb25zKHtcblx0XHRcdC8vIGFkZCBjdXN0b20gb3B0aW9ucyBoZXJlXG5cdFx0fSksXG5cdF0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGJybi1kaWFsb2ctb3ZlcmxheSBobG0gLz5cblx0XHQ8bmctY29udGVudCAvPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0ZXhwb3J0QXM6ICdobG1EaWFsb2cnLFxufSlcbmV4cG9ydCBjbGFzcyBIbG1EaWFsb2dDb21wb25lbnQgZXh0ZW5kcyBCcm5EaWFsb2dDb21wb25lbnQge31cbiJdfQ==