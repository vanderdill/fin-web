import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmBlockquote = 'mt-6 border-border border-l-2 pl-6 italic';
export class HlmBlockquoteDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmBlockquote, this.userClass()));
    static ɵfac = function HlmBlockquoteDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmBlockquoteDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmBlockquoteDirective, selectors: [["", "hlmBlockquote", ""]], hostVars: 2, hostBindings: function HlmBlockquoteDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmBlockquoteDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmBlockquote]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWJsb2NrcXVvdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS91aS10eXBvZ3JhcGh5LWhlbG0vc3JjL2xpYi9obG0tYmxvY2txdW90ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHN0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLDJDQUEyQyxDQUFDO0FBU3pFLE1BQU0sT0FBTyxzQkFBc0I7SUFDbEIsU0FBUyxHQUFHLEtBQUssQ0FBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnSEFGcEUsc0JBQXNCOzZEQUF0QixzQkFBc0I7WUFBdEIsY0FBQSxvQkFBZ0IsQ0FBTTs7O2lGQUF0QixzQkFBc0I7Y0FQbEMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGtCQUFrQjtpQkFDN0I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5leHBvcnQgY29uc3QgaGxtQmxvY2txdW90ZSA9ICdtdC02IGJvcmRlci1ib3JkZXIgYm9yZGVyLWwtMiBwbC02IGl0YWxpYyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tobG1CbG9ja3F1b3RlXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdfY29tcHV0ZWRDbGFzcygpJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtQmxvY2txdW90ZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyByZWFkb25seSB1c2VyQ2xhc3MgPSBpbnB1dDxDbGFzc1ZhbHVlPignJywgeyBhbGlhczogJ2NsYXNzJyB9KTtcblx0cHJvdGVjdGVkIF9jb21wdXRlZENsYXNzID0gY29tcHV0ZWQoKCkgPT4gaGxtKGhsbUJsb2NrcXVvdGUsIHRoaXMudXNlckNsYXNzKCkpKTtcbn1cbiJdfQ==