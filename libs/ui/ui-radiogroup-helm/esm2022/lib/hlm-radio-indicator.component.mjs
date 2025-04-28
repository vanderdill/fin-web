import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
const btnLike = 'aspect-square rounded-full ring-offset-background group-[.cdk-keyboard-focused]:ring-2 group-[.cdk-keyboard-focused]:ring-ring group-[.cdk-keyboard-focused]:ring-offset-2 group-[.brn-radio-disabled]:cursor-not-allowed group-[.brn-radio-disabled]:opacity-50';
export class HlmRadioIndicatorComponent {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('relative inline-flex h-4 w-4', this.userClass()));
    static ɵfac = function HlmRadioIndicatorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmRadioIndicatorComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HlmRadioIndicatorComponent, selectors: [["hlm-radio-indicator"]], hostVars: 2, hostBindings: function HlmRadioIndicatorComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] }, decls: 2, vars: 0, consts: [[1, "bg-foreground", "absolute", "inset-0", "hidden", "scale-[55%]", "rounded-full", "group-[.brn-radio-checked]:inline-block"], [1, "border-primary", "aspect-square", "rounded-full", "ring-offset-background", "group-[.cdk-keyboard-focused]:ring-2", "group-[.cdk-keyboard-focused]:ring-ring", "group-[.cdk-keyboard-focused]:ring-offset-2", "group-[.brn-radio-disabled]:cursor-not-allowed", "group-[.brn-radio-disabled]:opacity-50", "rounded-full", "border"]], template: function HlmRadioIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0)(1, "div", 1);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmRadioIndicatorComponent, [{
        type: Component,
        args: [{
                selector: 'hlm-radio-indicator',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
                template: `
		<div
			class="bg-foreground absolute inset-0 hidden scale-[55%] rounded-full group-[.brn-radio-checked]:inline-block"
		></div>
		<div class="border-primary ${btnLike} rounded-full border"></div>
	`,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HlmRadioIndicatorComponent, { className: "HlmRadioIndicatorComponent", filePath: "lib/hlm-radio-indicator.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLXJhZGlvLWluZGljYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLXJhZGlvZ3JvdXAtaGVsbS9zcmMvbGliL2hsbS1yYWRpby1pbmRpY2F0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRzdDLE1BQU0sT0FBTyxHQUNaLGtRQUFrUSxDQUFDO0FBZXBRLE1BQU0sT0FBTywwQkFBMEI7SUFDdEIsU0FBUyxHQUFHLEtBQUssQ0FBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO29IQUZyRiwwQkFBMEI7NkRBQTFCLDBCQUEwQjtZQUExQixjQUFBLG9CQUFnQixDQUFVOzs7OztpRkFBMUIsMEJBQTBCO2NBYnRDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsSUFBSSxFQUFFO29CQUNMLFNBQVMsRUFBRSxrQkFBa0I7aUJBQzdCO2dCQUNELFFBQVEsRUFBRTs7OzsrQkFJb0IsT0FBTztFQUNwQzthQUNEOztrRkFDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNvbXB1dGVkLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGxtIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IENsYXNzVmFsdWUgfSBmcm9tICdjbHN4JztcblxuY29uc3QgYnRuTGlrZSA9XG5cdCdhc3BlY3Qtc3F1YXJlIHJvdW5kZWQtZnVsbCByaW5nLW9mZnNldC1iYWNrZ3JvdW5kIGdyb3VwLVsuY2RrLWtleWJvYXJkLWZvY3VzZWRdOnJpbmctMiBncm91cC1bLmNkay1rZXlib2FyZC1mb2N1c2VkXTpyaW5nLXJpbmcgZ3JvdXAtWy5jZGsta2V5Ym9hcmQtZm9jdXNlZF06cmluZy1vZmZzZXQtMiBncm91cC1bLmJybi1yYWRpby1kaXNhYmxlZF06Y3Vyc29yLW5vdC1hbGxvd2VkIGdyb3VwLVsuYnJuLXJhZGlvLWRpc2FibGVkXTpvcGFjaXR5LTUwJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaGxtLXJhZGlvLWluZGljYXRvcicsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdfY29tcHV0ZWRDbGFzcygpJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cImJnLWZvcmVncm91bmQgYWJzb2x1dGUgaW5zZXQtMCBoaWRkZW4gc2NhbGUtWzU1JV0gcm91bmRlZC1mdWxsIGdyb3VwLVsuYnJuLXJhZGlvLWNoZWNrZWRdOmlubGluZS1ibG9ja1wiXG5cdFx0PjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJib3JkZXItcHJpbWFyeSAke2J0bkxpa2V9IHJvdW5kZWQtZnVsbCBib3JkZXJcIj48L2Rpdj5cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgSGxtUmFkaW9JbmRpY2F0b3JDb21wb25lbnQge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGhsbSgncmVsYXRpdmUgaW5saW5lLWZsZXggaC00IHctNCcsIHRoaXMudXNlckNsYXNzKCkpKTtcbn1cbiJdfQ==