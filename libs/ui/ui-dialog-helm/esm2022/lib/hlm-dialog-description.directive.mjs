import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnDialogDescriptionDirective } from '@spartan-ng/brain/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@spartan-ng/brain/dialog";
export class HlmDialogDescriptionDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('text-sm text-muted-foreground', this.userClass()));
    static ɵfac = function HlmDialogDescriptionDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogDescriptionDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmDialogDescriptionDirective, selectors: [["", "hlmDialogDescription", ""]], hostVars: 2, hostBindings: function HlmDialogDescriptionDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] }, features: [i0.ɵɵHostDirectivesFeature([i1.BrnDialogDescriptionDirective])] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogDescriptionDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmDialogDescription]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
                hostDirectives: [BrnDialogDescriptionDirective],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy1kZXNjcmlwdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLWRpYWxvZy1oZWxtL3NyYy9saWIvaGxtLWRpYWxvZy1kZXNjcmlwdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBV3pFLE1BQU0sT0FBTyw2QkFBNkI7SUFDekIsU0FBUyxHQUFHLEtBQUssQ0FBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3VIQUZ0Riw2QkFBNkI7NkRBQTdCLDZCQUE2QjtZQUE3QixjQUFBLG9CQUFnQixDQUFhOzs7aUZBQTdCLDZCQUE2QjtjQVJ6QyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRTtvQkFDTCxTQUFTLEVBQUUsa0JBQWtCO2lCQUM3QjtnQkFDRCxjQUFjLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB7IEJybkRpYWxvZ0Rlc2NyaXB0aW9uRGlyZWN0aXZlIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vZGlhbG9nJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbaGxtRGlhbG9nRGVzY3JpcHRpb25dJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxuXHRob3N0RGlyZWN0aXZlczogW0JybkRpYWxvZ0Rlc2NyaXB0aW9uRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtRGlhbG9nRGVzY3JpcHRpb25EaXJlY3RpdmUge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGhsbSgndGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQnLCB0aGlzLnVzZXJDbGFzcygpKSk7XG59XG4iXX0=