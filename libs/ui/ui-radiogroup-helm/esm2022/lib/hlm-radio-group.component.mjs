import { Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnRadioGroupDirective } from '@spartan-ng/brain/radio-group';
import * as i0 from "@angular/core";
import * as i1 from "@spartan-ng/brain/radio-group";
const _c0 = ["*"];
export class HlmRadioGroupComponent {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('grid gap-2', this.userClass()));
    static ɵfac = function HlmRadioGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmRadioGroupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HlmRadioGroupComponent, selectors: [["hlm-radio-group"]], hostVars: 2, hostBindings: function HlmRadioGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] }, features: [i0.ɵɵHostDirectivesFeature([{ directive: i1.BrnRadioGroupDirective, inputs: ["name", "name", "value", "value", "disabled", "disabled", "required", "required", "direction", "direction"] }])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function HlmRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmRadioGroupComponent, [{
        type: Component,
        args: [{
                selector: 'hlm-radio-group',
                standalone: true,
                hostDirectives: [
                    {
                        directive: BrnRadioGroupDirective,
                        inputs: ['name', 'value', 'disabled', 'required', 'direction'],
                    },
                ],
                host: {
                    '[class]': '_computedClass()',
                },
                template: '<ng-content />',
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HlmRadioGroupComponent, { className: "HlmRadioGroupComponent", filePath: "lib/hlm-radio-group.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktcmFkaW9ncm91cC1oZWxtL3NyYy9saWIvaGxtLXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBaUJ2RSxNQUFNLE9BQU8sc0JBQXNCO0lBQ2xCLFNBQVMsR0FBRyxLQUFLLENBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUQsY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0hBRm5FLHNCQUFzQjs2REFBdEIsc0JBQXNCO1lBQXRCLGNBQUEsb0JBQWdCLENBQU07OztZQUZ2QixrQkFBYzs7O2lGQUViLHNCQUFzQjtjQWRsQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGNBQWMsRUFBRTtvQkFDZjt3QkFDQyxTQUFTLEVBQUUsc0JBQXNCO3dCQUNqQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO3FCQUM5RDtpQkFDRDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGtCQUFrQjtpQkFDN0I7Z0JBQ0QsUUFBUSxFQUFFLGdCQUFnQjthQUMxQjs7a0ZBQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBjb21wdXRlZCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhsbSB9IGZyb20gJ0BzcGFydGFuLW5nL2JyYWluL2NvcmUnO1xuaW1wb3J0IHsgQnJuUmFkaW9Hcm91cERpcmVjdGl2ZSB9IGZyb20gJ0BzcGFydGFuLW5nL2JyYWluL3JhZGlvLWdyb3VwJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdobG0tcmFkaW8tZ3JvdXAnLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0RGlyZWN0aXZlczogW1xuXHRcdHtcblx0XHRcdGRpcmVjdGl2ZTogQnJuUmFkaW9Hcm91cERpcmVjdGl2ZSxcblx0XHRcdGlucHV0czogWyduYW1lJywgJ3ZhbHVlJywgJ2Rpc2FibGVkJywgJ3JlcXVpcmVkJywgJ2RpcmVjdGlvbiddLFxuXHRcdH0sXG5cdF0sXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdfY29tcHV0ZWRDbGFzcygpJyxcblx0fSxcblx0dGVtcGxhdGU6ICc8bmctY29udGVudCAvPicsXG59KVxuZXhwb3J0IGNsYXNzIEhsbVJhZGlvR3JvdXBDb21wb25lbnQge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGhsbSgnZ3JpZCBnYXAtMicsIHRoaXMudXNlckNsYXNzKCkpKTtcbn1cbiJdfQ==