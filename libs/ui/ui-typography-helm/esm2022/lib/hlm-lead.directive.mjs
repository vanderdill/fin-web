import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmLead = 'text-xl text-muted-foreground';
export class HlmLeadDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmLead, this.userClass()));
    static ɵfac = function HlmLeadDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmLeadDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmLeadDirective, selectors: [["", "hlmLead", ""]], hostVars: 2, hostBindings: function HlmLeadDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmLeadDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmLead]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWxlYWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS91aS10eXBvZ3JhcGh5LWhlbG0vc3JjL2xpYi9obG0tbGVhZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHN0MsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLCtCQUErQixDQUFDO0FBU3ZELE1BQU0sT0FBTyxnQkFBZ0I7SUFDWixTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDOzBHQUY5RCxnQkFBZ0I7NkRBQWhCLGdCQUFnQjtZQUFoQixjQUFBLG9CQUFnQixDQUFBOzs7aUZBQWhCLGdCQUFnQjtjQVA1QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGtCQUFrQjtpQkFDN0I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5leHBvcnQgY29uc3QgaGxtTGVhZCA9ICd0ZXh0LXhsIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tobG1MZWFkXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdfY29tcHV0ZWRDbGFzcygpJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtTGVhZERpcmVjdGl2ZSB7XG5cdHB1YmxpYyByZWFkb25seSB1c2VyQ2xhc3MgPSBpbnB1dDxDbGFzc1ZhbHVlPignJywgeyBhbGlhczogJ2NsYXNzJyB9KTtcblx0cHJvdGVjdGVkIF9jb21wdXRlZENsYXNzID0gY29tcHV0ZWQoKCkgPT4gaGxtKGhsbUxlYWQsIHRoaXMudXNlckNsYXNzKCkpKTtcbn1cbiJdfQ==