import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmH1 = 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl';
export class HlmH1Directive {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmH1, this.userClass()));
    static ɵfac = function HlmH1Directive_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmH1Directive)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmH1Directive, selectors: [["", "hlmH1", ""]], hostVars: 2, hostBindings: function HlmH1Directive_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmH1Directive, [{
        type: Directive,
        args: [{
                selector: '[hlmH1]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWgxLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktdHlwb2dyYXBoeS1oZWxtL3NyYy9saWIvaGxtLWgxLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUc3QyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsZ0VBQWdFLENBQUM7QUFTdEYsTUFBTSxPQUFPLGNBQWM7SUFDVixTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dHQUY1RCxjQUFjOzZEQUFkLGNBQWM7WUFBZCxjQUFBLG9CQUFnQixDQUFGOzs7aUZBQWQsY0FBYztjQVAxQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGtCQUFrQjtpQkFDN0I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5leHBvcnQgY29uc3QgaGxtSDEgPSAnc2Nyb2xsLW0tMjAgdGV4dC00eGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgbGc6dGV4dC01eGwnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbaGxtSDFdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBIbG1IMURpcmVjdGl2ZSB7XG5cdHB1YmxpYyByZWFkb25seSB1c2VyQ2xhc3MgPSBpbnB1dDxDbGFzc1ZhbHVlPignJywgeyBhbGlhczogJ2NsYXNzJyB9KTtcblx0cHJvdGVjdGVkIF9jb21wdXRlZENsYXNzID0gY29tcHV0ZWQoKCkgPT4gaGxtKGhsbUgxLCB0aGlzLnVzZXJDbGFzcygpKSk7XG59XG4iXX0=