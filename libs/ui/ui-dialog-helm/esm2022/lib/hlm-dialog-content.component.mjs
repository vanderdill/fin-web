import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, inject, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { hlm } from '@spartan-ng/brain/core';
import { BrnDialogCloseDirective, BrnDialogRef, injectBrnDialogContext } from '@spartan-ng/brain/dialog';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmDialogCloseDirective } from './hlm-dialog-close.directive';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function HlmDialogContentComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngComponentOutlet", ctx_r0.component);
} }
function HlmDialogContentComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
export class HlmDialogContentComponent {
    _dialogRef = inject(BrnDialogRef);
    _dialogContext = injectBrnDialogContext({ optional: true });
    state = computed(() => this._dialogRef?.state() ?? 'closed');
    component = this._dialogContext?.$component;
    _dynamicComponentClass = this._dialogContext?.$dynamicComponentClass;
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('border-border grid w-full max-w-lg relative gap-4 border bg-background p-6 shadow-lg [animation-duration:200] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[2%]  data-[state=open]:slide-in-from-top-[2%] sm:rounded-lg md:w-full', this.userClass(), this._dynamicComponentClass));
    static ɵfac = function HlmDialogContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogContentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HlmDialogContentComponent, selectors: [["hlm-dialog-content"]], hostVars: 3, hostBindings: function HlmDialogContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("data-state", ctx.state());
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] }, features: [i0.ɵɵProvidersFeature([provideIcons({ lucideX })])], ngContentSelectors: _c0, decls: 6, vars: 1, consts: [[3, "ngComponentOutlet"], ["brnDialogClose", "", "hlm", ""], [1, "sr-only"], ["hlm", "", "size", "sm", "name", "lucideX"]], template: function HlmDialogContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, HlmDialogContentComponent_Conditional_0_Template, 1, 1, "ng-container", 0)(1, HlmDialogContentComponent_Conditional_1_Template, 1, 0);
            i0.ɵɵelementStart(2, "button", 1)(3, "span", 2);
            i0.ɵɵtext(4, "Close");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "ng-icon", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.component ? 0 : 1);
        } }, dependencies: [NgComponentOutlet, BrnDialogCloseDirective, HlmDialogCloseDirective, NgIcon, HlmIconDirective], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogContentComponent, [{
        type: Component,
        args: [{
                selector: 'hlm-dialog-content',
                standalone: true,
                imports: [NgComponentOutlet, BrnDialogCloseDirective, HlmDialogCloseDirective, NgIcon, HlmIconDirective],
                providers: [provideIcons({ lucideX })],
                host: {
                    '[class]': '_computedClass()',
                    '[attr.data-state]': 'state()',
                },
                template: `
		@if (component) {
			<ng-container [ngComponentOutlet]="component" />
		} @else {
			<ng-content />
		}

		<button brnDialogClose hlm>
			<span class="sr-only">Close</span>
			<ng-icon hlm size="sm" name="lucideX" />
		</button>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HlmDialogContentComponent, { className: "HlmDialogContentComponent", filePath: "lib/hlm-dialog-content.component.ts", lineNumber: 35 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktZGlhbG9nLWhlbG0vc3JjL2xpYi9obG0tZGlhbG9nLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztJQWFwRSwyQkFBZ0Q7OztJQUFsQyxvREFBK0I7OztJQUU3QyxrQkFBYzs7QUFXakIsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQixVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTdELEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxRQUFRLENBQUMsQ0FBQztJQUU3RCxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUM7SUFDM0Msc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQztJQUV0RSxTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQ2pELEdBQUcsQ0FDRixnWkFBZ1osRUFDaFosSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNoQixJQUFJLENBQUMsc0JBQXNCLENBQzNCLENBQ0QsQ0FBQzttSEFoQlUseUJBQXlCOzZEQUF6Qix5QkFBeUI7eUNBQXpCLFdBQU87WUFBUCxjQUFBLG9CQUFnQixDQUFTO2dHQXBCMUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDOztZQVFuQyxBQUZGLDJGQUFpQiwyREFFUjtZQUtSLEFBREQsaUNBQTJCLGNBQ0o7WUFBQSxxQkFBSztZQUFBLGlCQUFPO1lBQ2xDLDZCQUF3QztZQUN6QyxpQkFBUzs7WUFUVCx1Q0FJQzs0QkFYUSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCOztpRkFxQjNGLHlCQUF5QjtjQXhCckMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3hHLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksRUFBRTtvQkFDTCxTQUFTLEVBQUUsa0JBQWtCO29CQUM3QixtQkFBbUIsRUFBRSxTQUFTO2lCQUM5QjtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0VBV1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOztrRkFDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NvbXBvbmVudE91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgY29tcHV0ZWQsIGluamVjdCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSWNvbiwgcHJvdmlkZUljb25zIH0gZnJvbSAnQG5nLWljb25zL2NvcmUnO1xuaW1wb3J0IHsgbHVjaWRlWCB9IGZyb20gJ0BuZy1pY29ucy9sdWNpZGUnO1xuaW1wb3J0IHsgaGxtIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vY29yZSc7XG5pbXBvcnQgeyBCcm5EaWFsb2dDbG9zZURpcmVjdGl2ZSwgQnJuRGlhbG9nUmVmLCBpbmplY3RCcm5EaWFsb2dDb250ZXh0IH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vZGlhbG9nJztcbmltcG9ydCB7IEhsbUljb25EaXJlY3RpdmUgfSBmcm9tICdAc3BhcnRhbi1uZy91aS1pY29uLWhlbG0nO1xuaW1wb3J0IHR5cGUgeyBDbGFzc1ZhbHVlIH0gZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBIbG1EaWFsb2dDbG9zZURpcmVjdGl2ZSB9IGZyb20gJy4vaGxtLWRpYWxvZy1jbG9zZS5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdobG0tZGlhbG9nLWNvbnRlbnQnLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbTmdDb21wb25lbnRPdXRsZXQsIEJybkRpYWxvZ0Nsb3NlRGlyZWN0aXZlLCBIbG1EaWFsb2dDbG9zZURpcmVjdGl2ZSwgTmdJY29uLCBIbG1JY29uRGlyZWN0aXZlXSxcblx0cHJvdmlkZXJzOiBbcHJvdmlkZUljb25zKHsgbHVjaWRlWCB9KV0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdfY29tcHV0ZWRDbGFzcygpJyxcblx0XHQnW2F0dHIuZGF0YS1zdGF0ZV0nOiAnc3RhdGUoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGlmIChjb21wb25lbnQpIHtcblx0XHRcdDxuZy1jb250YWluZXIgW25nQ29tcG9uZW50T3V0bGV0XT1cImNvbXBvbmVudFwiIC8+XG5cdFx0fSBAZWxzZSB7XG5cdFx0XHQ8bmctY29udGVudCAvPlxuXHRcdH1cblxuXHRcdDxidXR0b24gYnJuRGlhbG9nQ2xvc2UgaGxtPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+Q2xvc2U8L3NwYW4+XG5cdFx0XHQ8bmctaWNvbiBobG0gc2l6ZT1cInNtXCIgbmFtZT1cImx1Y2lkZVhcIiAvPlxuXHRcdDwvYnV0dG9uPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtRGlhbG9nQ29udGVudENvbXBvbmVudCB7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2RpYWxvZ1JlZiA9IGluamVjdChCcm5EaWFsb2dSZWYpO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9kaWFsb2dDb250ZXh0ID0gaW5qZWN0QnJuRGlhbG9nQ29udGV4dCh7IG9wdGlvbmFsOiB0cnVlIH0pO1xuXG5cdHB1YmxpYyByZWFkb25seSBzdGF0ZSA9IGNvbXB1dGVkKCgpID0+IHRoaXMuX2RpYWxvZ1JlZj8uc3RhdGUoKSA/PyAnY2xvc2VkJyk7XG5cblx0cHVibGljIHJlYWRvbmx5IGNvbXBvbmVudCA9IHRoaXMuX2RpYWxvZ0NvbnRleHQ/LiRjb21wb25lbnQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgX2R5bmFtaWNDb21wb25lbnRDbGFzcyA9IHRoaXMuX2RpYWxvZ0NvbnRleHQ/LiRkeW5hbWljQ29tcG9uZW50Q2xhc3M7XG5cblx0cHVibGljIHJlYWRvbmx5IHVzZXJDbGFzcyA9IGlucHV0PENsYXNzVmFsdWU+KCcnLCB7IGFsaWFzOiAnY2xhc3MnIH0pO1xuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvbXB1dGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuXHRcdGhsbShcblx0XHRcdCdib3JkZXItYm9yZGVyIGdyaWQgdy1mdWxsIG1heC13LWxnIHJlbGF0aXZlIGdhcC00IGJvcmRlciBiZy1iYWNrZ3JvdW5kIHAtNiBzaGFkb3ctbGcgW2FuaW1hdGlvbi1kdXJhdGlvbjoyMDBdIGRhdGEtW3N0YXRlPW9wZW5dOmFuaW1hdGUtaW4gZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9b3Blbl06ZmFkZS1pbi0wIGRhdGEtW3N0YXRlPWNsb3NlZF06em9vbS1vdXQtOTUgZGF0YS1bc3RhdGU9b3Blbl06em9vbS1pbi05NSBkYXRhLVtzdGF0ZT1jbG9zZWRdOnNsaWRlLW91dC10by10b3AtWzIlXSAgZGF0YS1bc3RhdGU9b3Blbl06c2xpZGUtaW4tZnJvbS10b3AtWzIlXSBzbTpyb3VuZGVkLWxnIG1kOnctZnVsbCcsXG5cdFx0XHR0aGlzLnVzZXJDbGFzcygpLFxuXHRcdFx0dGhpcy5fZHluYW1pY0NvbXBvbmVudENsYXNzLFxuXHRcdCksXG5cdCk7XG59XG4iXX0=