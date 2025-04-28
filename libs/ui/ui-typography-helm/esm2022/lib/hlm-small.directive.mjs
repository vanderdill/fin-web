import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmSmall = 'text-sm font-medium leading-none';
export class HlmSmallDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmSmall, this.userClass()));
    static ɵfac = function HlmSmallDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmSmallDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmSmallDirective, selectors: [["", "hlmSmall", ""]], hostVars: 2, hostBindings: function HlmSmallDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmSmallDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmSmall]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLXNtYWxsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktdHlwb2dyYXBoeS1oZWxtL3NyYy9saWIvaGxtLXNtYWxsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUc3QyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsa0NBQWtDLENBQUM7QUFTM0QsTUFBTSxPQUFPLGlCQUFpQjtJQUNiLFNBQVMsR0FBRyxLQUFLLENBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUQsY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7MkdBRi9ELGlCQUFpQjs2REFBakIsaUJBQWlCO1lBQWpCLGNBQUEsb0JBQWdCLENBQUM7OztpRkFBakIsaUJBQWlCO2NBUDdCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRTtvQkFDTCxTQUFTLEVBQUUsa0JBQWtCO2lCQUM3QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBjb21wdXRlZCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhsbSB9IGZyb20gJ0BzcGFydGFuLW5nL2JyYWluL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBDbGFzc1ZhbHVlIH0gZnJvbSAnY2xzeCc7XG5cbmV4cG9ydCBjb25zdCBobG1TbWFsbCA9ICd0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tobG1TbWFsbF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnX2NvbXB1dGVkQ2xhc3MoKScsXG5cdH0sXG59KVxuZXhwb3J0IGNsYXNzIEhsbVNtYWxsRGlyZWN0aXZlIHtcblx0cHVibGljIHJlYWRvbmx5IHVzZXJDbGFzcyA9IGlucHV0PENsYXNzVmFsdWU+KCcnLCB7IGFsaWFzOiAnY2xhc3MnIH0pO1xuXHRwcm90ZWN0ZWQgX2NvbXB1dGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBobG0oaGxtU21hbGwsIHRoaXMudXNlckNsYXNzKCkpKTtcbn1cbiJdfQ==