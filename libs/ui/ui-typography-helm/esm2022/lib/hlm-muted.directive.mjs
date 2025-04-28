import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmMuted = 'text-sm text-muted-foreground';
export class HlmMutedDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmMuted, this.userClass()));
    static ɵfac = function HlmMutedDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmMutedDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmMutedDirective, selectors: [["", "hlmMuted", ""]], hostVars: 2, hostBindings: function HlmMutedDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmMutedDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmMuted]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLW11dGVkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktdHlwb2dyYXBoeS1oZWxtL3NyYy9saWIvaGxtLW11dGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUc3QyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsK0JBQStCLENBQUM7QUFTeEQsTUFBTSxPQUFPLGlCQUFpQjtJQUNiLFNBQVMsR0FBRyxLQUFLLENBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUQsY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7MkdBRi9ELGlCQUFpQjs2REFBakIsaUJBQWlCO1lBQWpCLGNBQUEsb0JBQWdCLENBQUM7OztpRkFBakIsaUJBQWlCO2NBUDdCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRTtvQkFDTCxTQUFTLEVBQUUsa0JBQWtCO2lCQUM3QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBjb21wdXRlZCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGhsbSB9IGZyb20gJ0BzcGFydGFuLW5nL2JyYWluL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBDbGFzc1ZhbHVlIH0gZnJvbSAnY2xzeCc7XG5cbmV4cG9ydCBjb25zdCBobG1NdXRlZCA9ICd0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tobG1NdXRlZF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnX2NvbXB1dGVkQ2xhc3MoKScsXG5cdH0sXG59KVxuZXhwb3J0IGNsYXNzIEhsbU11dGVkRGlyZWN0aXZlIHtcblx0cHVibGljIHJlYWRvbmx5IHVzZXJDbGFzcyA9IGlucHV0PENsYXNzVmFsdWU+KCcnLCB7IGFsaWFzOiAnY2xhc3MnIH0pO1xuXHRwcm90ZWN0ZWQgX2NvbXB1dGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBobG0oaGxtTXV0ZWQsIHRoaXMudXNlckNsYXNzKCkpKTtcbn1cbiJdfQ==