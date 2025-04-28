import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmH2 = 'scroll-m-20 border-border border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0';
export class HlmH2Directive {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmH2, this.userClass()));
    static ɵfac = function HlmH2Directive_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmH2Directive)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmH2Directive, selectors: [["", "hlmH2", ""]], hostVars: 2, hostBindings: function HlmH2Directive_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmH2Directive, [{
        type: Directive,
        args: [{
                selector: '[hlmH2]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWgyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktdHlwb2dyYXBoeS1oZWxtL3NyYy9saWIvaGxtLWgyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUc3QyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQ2pCLDRHQUE0RyxDQUFDO0FBUzlHLE1BQU0sT0FBTyxjQUFjO0lBQ1YsU0FBUyxHQUFHLEtBQUssQ0FBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3R0FGNUQsY0FBYzs2REFBZCxjQUFjO1lBQWQsY0FBQSxvQkFBZ0IsQ0FBRjs7O2lGQUFkLGNBQWM7Y0FQMUIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsSUFBSSxFQUFFO29CQUNMLFNBQVMsRUFBRSxrQkFBa0I7aUJBQzdCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGNvbXB1dGVkLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGxtIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IENsYXNzVmFsdWUgfSBmcm9tICdjbHN4JztcblxuZXhwb3J0IGNvbnN0IGhsbUgyID1cblx0J3Njcm9sbC1tLTIwIGJvcmRlci1ib3JkZXIgYm9yZGVyLWIgcGItMiB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRyYW5zaXRpb24tY29sb3JzIGZpcnN0Om10LTAnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbaGxtSDJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBIbG1IMkRpcmVjdGl2ZSB7XG5cdHB1YmxpYyByZWFkb25seSB1c2VyQ2xhc3MgPSBpbnB1dDxDbGFzc1ZhbHVlPignJywgeyBhbGlhczogJ2NsYXNzJyB9KTtcblx0cHJvdGVjdGVkIF9jb21wdXRlZENsYXNzID0gY29tcHV0ZWQoKCkgPT4gaGxtKGhsbUgyLCB0aGlzLnVzZXJDbGFzcygpKSk7XG59XG4iXX0=