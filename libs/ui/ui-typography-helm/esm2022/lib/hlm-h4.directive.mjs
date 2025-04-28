import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmH4 = 'scroll-m-20 text-xl font-semibold tracking-tight';
export class HlmH4Directive {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmH4, this.userClass()));
    static ɵfac = function HlmH4Directive_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmH4Directive)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmH4Directive, selectors: [["", "hlmH4", ""]], hostVars: 2, hostBindings: function HlmH4Directive_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmH4Directive, [{
        type: Directive,
        args: [{
                selector: '[hlmH4]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWg0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktdHlwb2dyYXBoeS1oZWxtL3NyYy9saWIvaGxtLWg0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUc3QyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsa0RBQWtELENBQUM7QUFTeEUsTUFBTSxPQUFPLGNBQWM7SUFDVixTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dHQUY1RCxjQUFjOzZEQUFkLGNBQWM7WUFBZCxjQUFBLG9CQUFnQixDQUFGOzs7aUZBQWQsY0FBYztjQVAxQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGtCQUFrQjtpQkFDN0I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5leHBvcnQgY29uc3QgaGxtSDQgPSAnc2Nyb2xsLW0tMjAgdGV4dC14bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2hsbUg0XScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdfY29tcHV0ZWRDbGFzcygpJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtSDREaXJlY3RpdmUge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGhsbShobG1INCwgdGhpcy51c2VyQ2xhc3MoKSkpO1xufVxuIl19