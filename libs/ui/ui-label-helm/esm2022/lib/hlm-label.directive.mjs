import { Directive, computed, inject, input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { BrnLabelDirective } from '@spartan-ng/brain/label';
import { cva } from 'class-variance-authority';
import * as i0 from "@angular/core";
import * as i1 from "@spartan-ng/brain/label";
export const labelVariants = cva('text-sm font-medium leading-none [&>[hlmInput]]:my-1 [&:has([hlmInput]:disabled)]:cursor-not-allowed [&:has([hlmInput]:disabled)]:opacity-70', {
    variants: {
        variant: {
            default: '',
        },
        error: {
            auto: '[&:has([hlmInput].ng-invalid.ng-touched)]:text-destructive',
            true: 'text-destructive',
        },
        disabled: {
            auto: '[&:has([hlmInput]:disabled)]:opacity-70',
            true: 'opacity-70',
            false: '',
        },
    },
    defaultVariants: {
        variant: 'default',
        error: 'auto',
    },
});
export class HlmLabelDirective {
    _brn = inject(BrnLabelDirective, { host: true });
    userClass = input('', { alias: 'class' });
    variant = input('default');
    error = input('auto');
    state = computed(() => ({
        error: signal(this.error()),
    }));
    _computedClass = computed(() => hlm(labelVariants({
        variant: this.variant(),
        error: this.state().error(),
        disabled: this._brn?.dataDisabled() ?? 'auto',
    }), '[&.ng-invalid.ng-touched]:text-destructive', this.userClass()));
    setError(error) {
        this.state().error.set(error);
    }
    static ɵfac = function HlmLabelDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmLabelDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmLabelDirective, selectors: [["", "hlmLabel", ""]], hostVars: 2, hostBindings: function HlmLabelDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"], variant: [1, "variant"], error: [1, "error"] }, features: [i0.ɵɵHostDirectivesFeature([{ directive: i1.BrnLabelDirective, inputs: ["id", "id"] }])] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmLabelDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmLabel]',
                standalone: true,
                hostDirectives: [
                    {
                        directive: BrnLabelDirective,
                        inputs: ['id'],
                    },
                ],
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktbGFiZWwtaGVsbS9zcmMvbGliL2hsbS1sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBcUIsR0FBRyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUdsRSxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUMvQiw4SUFBOEksRUFDOUk7SUFDQyxRQUFRLEVBQUU7UUFDVCxPQUFPLEVBQUU7WUFDUixPQUFPLEVBQUUsRUFBRTtTQUNYO1FBQ0QsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLDREQUE0RDtZQUNsRSxJQUFJLEVBQUUsa0JBQWtCO1NBQ3hCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLHlDQUF5QztZQUMvQyxJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsRUFBRTtTQUNUO0tBQ0Q7SUFDRCxlQUFlLEVBQUU7UUFDaEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsS0FBSyxFQUFFLE1BQU07S0FDYjtDQUNELENBQ0QsQ0FBQztBQWdCRixNQUFNLE9BQU8saUJBQWlCO0lBQ1osSUFBSSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRWxELFNBQVMsR0FBRyxLQUFLLENBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFdEQsT0FBTyxHQUFHLEtBQUssQ0FBMkIsU0FBUyxDQUFDLENBQUM7SUFFckQsS0FBSyxHQUFHLEtBQUssQ0FBeUIsTUFBTSxDQUFDLENBQUM7SUFFM0MsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRWUsY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FDakQsR0FBRyxDQUNGLGFBQWEsQ0FBQztRQUNiLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLE1BQU07S0FDN0MsQ0FBQyxFQUNGLDRDQUE0QyxFQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCLENBQ0QsQ0FBQztJQUVGLFFBQVEsQ0FBQyxLQUE2QjtRQUNyQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDOzJHQTNCVyxpQkFBaUI7NkRBQWpCLGlCQUFpQjtZQUFqQixjQUFBLG9CQUFnQixDQUFDOzs7aUZBQWpCLGlCQUFpQjtjQWI3QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixjQUFjLEVBQUU7b0JBQ2Y7d0JBQ0MsU0FBUyxFQUFFLGlCQUFpQjt3QkFDNUIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO3FCQUNkO2lCQUNEO2dCQUNELElBQUksRUFBRTtvQkFDTCxTQUFTLEVBQUUsa0JBQWtCO2lCQUM3QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBjb21wdXRlZCwgaW5qZWN0LCBpbnB1dCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB7IEJybkxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vbGFiZWwnO1xuaW1wb3J0IHsgdHlwZSBWYXJpYW50UHJvcHMsIGN2YSB9IGZyb20gJ2NsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSc7XG5pbXBvcnQgdHlwZSB7IENsYXNzVmFsdWUgfSBmcm9tICdjbHN4JztcblxuZXhwb3J0IGNvbnN0IGxhYmVsVmFyaWFudHMgPSBjdmEoXG5cdCd0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctbm9uZSBbJj5baGxtSW5wdXRdXTpteS0xIFsmOmhhcyhbaGxtSW5wdXRdOmRpc2FibGVkKV06Y3Vyc29yLW5vdC1hbGxvd2VkIFsmOmhhcyhbaGxtSW5wdXRdOmRpc2FibGVkKV06b3BhY2l0eS03MCcsXG5cdHtcblx0XHR2YXJpYW50czoge1xuXHRcdFx0dmFyaWFudDoge1xuXHRcdFx0XHRkZWZhdWx0OiAnJyxcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRhdXRvOiAnWyY6aGFzKFtobG1JbnB1dF0ubmctaW52YWxpZC5uZy10b3VjaGVkKV06dGV4dC1kZXN0cnVjdGl2ZScsXG5cdFx0XHRcdHRydWU6ICd0ZXh0LWRlc3RydWN0aXZlJyxcblx0XHRcdH0sXG5cdFx0XHRkaXNhYmxlZDoge1xuXHRcdFx0XHRhdXRvOiAnWyY6aGFzKFtobG1JbnB1dF06ZGlzYWJsZWQpXTpvcGFjaXR5LTcwJyxcblx0XHRcdFx0dHJ1ZTogJ29wYWNpdHktNzAnLFxuXHRcdFx0XHRmYWxzZTogJycsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZGVmYXVsdFZhcmlhbnRzOiB7XG5cdFx0XHR2YXJpYW50OiAnZGVmYXVsdCcsXG5cdFx0XHRlcnJvcjogJ2F1dG8nLFxuXHRcdH0sXG5cdH0sXG4pO1xuZXhwb3J0IHR5cGUgTGFiZWxWYXJpYW50cyA9IFZhcmlhbnRQcm9wczx0eXBlb2YgbGFiZWxWYXJpYW50cz47XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tobG1MYWJlbF0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0RGlyZWN0aXZlczogW1xuXHRcdHtcblx0XHRcdGRpcmVjdGl2ZTogQnJuTGFiZWxEaXJlY3RpdmUsXG5cdFx0XHRpbnB1dHM6IFsnaWQnXSxcblx0XHR9LFxuXHRdLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnX2NvbXB1dGVkQ2xhc3MoKScsXG5cdH0sXG59KVxuZXhwb3J0IGNsYXNzIEhsbUxhYmVsRGlyZWN0aXZlIHtcblx0cHJpdmF0ZSByZWFkb25seSBfYnJuID0gaW5qZWN0KEJybkxhYmVsRGlyZWN0aXZlLCB7IGhvc3Q6IHRydWUgfSk7XG5cblx0cHVibGljIHJlYWRvbmx5IHVzZXJDbGFzcyA9IGlucHV0PENsYXNzVmFsdWU+KCcnLCB7IGFsaWFzOiAnY2xhc3MnIH0pO1xuXG5cdHB1YmxpYyByZWFkb25seSB2YXJpYW50ID0gaW5wdXQ8TGFiZWxWYXJpYW50c1sndmFyaWFudCddPignZGVmYXVsdCcpO1xuXG5cdHB1YmxpYyByZWFkb25seSBlcnJvciA9IGlucHV0PExhYmVsVmFyaWFudHNbJ2Vycm9yJ10+KCdhdXRvJyk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IHN0YXRlID0gY29tcHV0ZWQoKCkgPT4gKHtcblx0XHRlcnJvcjogc2lnbmFsKHRoaXMuZXJyb3IoKSksXG5cdH0pKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvbXB1dGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuXHRcdGhsbShcblx0XHRcdGxhYmVsVmFyaWFudHMoe1xuXHRcdFx0XHR2YXJpYW50OiB0aGlzLnZhcmlhbnQoKSxcblx0XHRcdFx0ZXJyb3I6IHRoaXMuc3RhdGUoKS5lcnJvcigpLFxuXHRcdFx0XHRkaXNhYmxlZDogdGhpcy5fYnJuPy5kYXRhRGlzYWJsZWQoKSA/PyAnYXV0bycsXG5cdFx0XHR9KSxcblx0XHRcdCdbJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWRdOnRleHQtZGVzdHJ1Y3RpdmUnLFxuXHRcdFx0dGhpcy51c2VyQ2xhc3MoKSxcblx0XHQpLFxuXHQpO1xuXG5cdHNldEVycm9yKGVycm9yOiBMYWJlbFZhcmlhbnRzWydlcnJvciddKTogdm9pZCB7XG5cdFx0dGhpcy5zdGF0ZSgpLmVycm9yLnNldChlcnJvcik7XG5cdH1cbn1cbiJdfQ==