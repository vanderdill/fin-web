import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmP = 'leading-7 [&:not(:first-child)]:mt-6';
export class HlmPDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmP, this.userClass()));
    static ɵfac = function HlmPDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmPDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmPDirective, selectors: [["", "hlmP", ""]], hostVars: 2, hostBindings: function HlmPDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmPDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmP]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLXAuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS91aS10eXBvZ3JhcGh5LWhlbG0vc3JjL2xpYi9obG0tcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHN0MsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLHNDQUFzQyxDQUFDO0FBUzNELE1BQU0sT0FBTyxhQUFhO0lBQ1QsU0FBUyxHQUFHLEtBQUssQ0FBYSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RCxjQUFjLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzt1R0FGM0QsYUFBYTs2REFBYixhQUFhO1lBQWIsY0FBQSxvQkFDYixDQUQwQjs7O2lGQUFiLGFBQWE7Y0FQekIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsSUFBSSxFQUFFO29CQUNMLFNBQVMsRUFBRSxrQkFBa0I7aUJBQzdCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGNvbXB1dGVkLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGxtIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IENsYXNzVmFsdWUgfSBmcm9tICdjbHN4JztcblxuZXhwb3J0IGNvbnN0IGhsbVAgPSAnbGVhZGluZy03IFsmOm5vdCg6Zmlyc3QtY2hpbGQpXTptdC02JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2hsbVBdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBIbG1QRGlyZWN0aXZlIHtcblx0cHVibGljIHJlYWRvbmx5IHVzZXJDbGFzcyA9IGlucHV0PENsYXNzVmFsdWU+KCcnLCB7IGFsaWFzOiAnY2xhc3MnIH0pO1xuXHRwcm90ZWN0ZWQgX2NvbXB1dGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBobG0oaGxtUCwgdGhpcy51c2VyQ2xhc3MoKSkpO1xufVxuIl19