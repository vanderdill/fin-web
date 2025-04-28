import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnDialogTitleDirective } from '@spartan-ng/brain/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@spartan-ng/brain/dialog";
export class HlmDialogTitleDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('text-lg font-semibold leading-none tracking-tight', this.userClass()));
    static ɵfac = function HlmDialogTitleDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogTitleDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmDialogTitleDirective, selectors: [["", "hlmDialogTitle", ""]], hostVars: 2, hostBindings: function HlmDialogTitleDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] }, features: [i0.ɵɵHostDirectivesFeature([i1.BrnDialogTitleDirective])] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogTitleDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmDialogTitle]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
                hostDirectives: [BrnDialogTitleDirective],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy10aXRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLWRpYWxvZy1oZWxtL3NyYy9saWIvaGxtLWRpYWxvZy10aXRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBV25FLE1BQU0sT0FBTyx1QkFBdUI7SUFDbkIsU0FBUyxHQUFHLEtBQUssQ0FBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lIQUYxRyx1QkFBdUI7NkRBQXZCLHVCQUF1QjtZQUF2QixjQUFBLG9CQUFnQixDQUFPOzs7aUZBQXZCLHVCQUF1QjtjQVJuQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRTtvQkFDTCxTQUFTLEVBQUUsa0JBQWtCO2lCQUM3QjtnQkFDRCxjQUFjLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB7IEJybkRpYWxvZ1RpdGxlRGlyZWN0aXZlIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vZGlhbG9nJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbaGxtRGlhbG9nVGl0bGVdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxuXHRob3N0RGlyZWN0aXZlczogW0JybkRpYWxvZ1RpdGxlRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtRGlhbG9nVGl0bGVEaXJlY3RpdmUge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGhsbSgndGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpbmctbm9uZSB0cmFja2luZy10aWdodCcsIHRoaXMudXNlckNsYXNzKCkpKTtcbn1cbiJdfQ==