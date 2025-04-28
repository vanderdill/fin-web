import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class HlmDialogHeaderComponent {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('flex flex-col space-y-1.5 text-center sm:text-left', this.userClass()));
    static ɵfac = function HlmDialogHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HlmDialogHeaderComponent, selectors: [["hlm-dialog-header"]], hostVars: 2, hostBindings: function HlmDialogHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function HlmDialogHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'hlm-dialog-header',
                standalone: true,
                template: `
		<ng-content />
	`,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HlmDialogHeaderComponent, { className: "HlmDialogHeaderComponent", filePath: "lib/hlm-dialog-header.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS91aS1kaWFsb2ctaGVsbS9zcmMvbGliL2hsbS1kaWFsb2ctaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFhN0MsTUFBTSxPQUFPLHdCQUF3QjtJQUNwQixTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQ3hDLEdBQUcsQ0FBQyxvREFBb0QsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDM0UsQ0FBQztrSEFKVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtZQUF4QixjQUFBLG9CQUFnQixDQUFROzs7WUFObkMsa0JBQWM7OztpRkFNSCx3QkFBd0I7Y0FWcEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUU7O0VBRVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNMLFNBQVMsRUFBRSxrQkFBa0I7aUJBQzdCO2FBQ0Q7O2tGQUNZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdobG0tZGlhbG9nLWhlYWRlcicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLWNvbnRlbnQgLz5cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBIbG1EaWFsb2dIZWFkZXJDb21wb25lbnQge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG5cdFx0aGxtKCdmbGV4IGZsZXgtY29sIHNwYWNlLXktMS41IHRleHQtY2VudGVyIHNtOnRleHQtbGVmdCcsIHRoaXMudXNlckNsYXNzKCkpLFxuXHQpO1xufVxuIl19