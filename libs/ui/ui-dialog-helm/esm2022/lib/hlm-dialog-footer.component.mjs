import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class HlmDialogFooterComponent {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', this.userClass()));
    static ɵfac = function HlmDialogFooterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogFooterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HlmDialogFooterComponent, selectors: [["hlm-dialog-footer"]], hostVars: 2, hostBindings: function HlmDialogFooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function HlmDialogFooterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogFooterComponent, [{
        type: Component,
        args: [{
                selector: 'hlm-dialog-footer',
                standalone: true,
                template: `
		<ng-content />
	`,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HlmDialogFooterComponent, { className: "HlmDialogFooterComponent", filePath: "lib/hlm-dialog-footer.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy1mb290ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS91aS1kaWFsb2ctaGVsbS9zcmMvbGliL2hsbS1kaWFsb2ctZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFhN0MsTUFBTSxPQUFPLHdCQUF3QjtJQUNwQixTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQ3hDLEdBQUcsQ0FBQywrREFBK0QsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDdEYsQ0FBQztrSEFKVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtZQUF4QixjQUFBLG9CQUFnQixDQUFROzs7WUFObkMsa0JBQWM7OztpRkFNSCx3QkFBd0I7Y0FWcEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUU7O0VBRVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNMLFNBQVMsRUFBRSxrQkFBa0I7aUJBQzdCO2FBQ0Q7O2tGQUNZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdobG0tZGlhbG9nLWZvb3RlcicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLWNvbnRlbnQgLz5cblx0YCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBIbG1EaWFsb2dGb290ZXJDb21wb25lbnQge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG5cdFx0aGxtKCdmbGV4IGZsZXgtY29sLXJldmVyc2Ugc206ZmxleC1yb3cgc206anVzdGlmeS1lbmQgc206c3BhY2UteC0yJywgdGhpcy51c2VyQ2xhc3MoKSksXG5cdCk7XG59XG4iXX0=