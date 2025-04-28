import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { cva } from 'class-variance-authority';
import * as i0 from "@angular/core";
export const inputErrorVariants = cva('text-destructive text-sm font-medium', {
    variants: {},
    defaultVariants: {},
});
export class HlmInputErrorDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(inputErrorVariants(), this.userClass()));
    static ɵfac = function HlmInputErrorDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmInputErrorDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmInputErrorDirective, selectors: [["", "hlmInputError", ""]], hostVars: 2, hostBindings: function HlmInputErrorDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmInputErrorDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmInputError]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWlucHV0LWVycm9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktaW5wdXQtaGVsbS9zcmMvbGliL2hsbS1pbnB1dC1lcnJvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQXFCLEdBQUcsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUdsRSxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsc0NBQXNDLEVBQUU7SUFDN0UsUUFBUSxFQUFFLEVBQUU7SUFDWixlQUFlLEVBQUUsRUFBRTtDQUNuQixDQUFDLENBQUM7QUFVSCxNQUFNLE9BQU8sc0JBQXNCO0lBQ2xCLFNBQVMsR0FBRyxLQUFLLENBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUQsY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dIQUYzRSxzQkFBc0I7NkRBQXRCLHNCQUFzQjtZQUF0QixjQUFBLG9CQUFnQixDQUFNOzs7aUZBQXRCLHNCQUFzQjtjQVBsQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRTtvQkFDTCxTQUFTLEVBQUUsa0JBQWtCO2lCQUM3QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBjb21wdXRlZCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhsbSB9IGZyb20gJ0BzcGFydGFuLW5nL2JyYWluL2NvcmUnO1xuaW1wb3J0IHsgdHlwZSBWYXJpYW50UHJvcHMsIGN2YSB9IGZyb20gJ2NsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSc7XG5pbXBvcnQgdHlwZSB7IENsYXNzVmFsdWUgfSBmcm9tICdjbHN4JztcblxuZXhwb3J0IGNvbnN0IGlucHV0RXJyb3JWYXJpYW50cyA9IGN2YSgndGV4dC1kZXN0cnVjdGl2ZSB0ZXh0LXNtIGZvbnQtbWVkaXVtJywge1xuXHR2YXJpYW50czoge30sXG5cdGRlZmF1bHRWYXJpYW50czoge30sXG59KTtcbmV4cG9ydCB0eXBlIElucHV0RXJyb3JWYXJpYW50cyA9IFZhcmlhbnRQcm9wczx0eXBlb2YgaW5wdXRFcnJvclZhcmlhbnRzPjtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2hsbUlucHV0RXJyb3JdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxufSlcbmV4cG9ydCBjbGFzcyBIbG1JbnB1dEVycm9yRGlyZWN0aXZlIHtcblx0cHVibGljIHJlYWRvbmx5IHVzZXJDbGFzcyA9IGlucHV0PENsYXNzVmFsdWU+KCcnLCB7IGFsaWFzOiAnY2xhc3MnIH0pO1xuXHRwcm90ZWN0ZWQgX2NvbXB1dGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBobG0oaW5wdXRFcnJvclZhcmlhbnRzKCksIHRoaXMudXNlckNsYXNzKCkpKTtcbn1cbiJdfQ==