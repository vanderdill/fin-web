import { Directive, Injector, computed, effect, inject, input, signal, untracked } from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { hlm } from '@spartan-ng/brain/core';
import { BrnFormFieldControl } from '@spartan-ng/brain/form-field';
import { ErrorStateMatcher, ErrorStateTracker } from '@spartan-ng/brain/forms';
import { cva } from 'class-variance-authority';
import * as i0 from "@angular/core";
export const inputVariants = cva('flex rounded-md border font-normal border-input bg-transparent text-base md:text-sm ring-offset-background file:border-0 file:text-foreground file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', {
    variants: {
        size: {
            default: 'h-10 py-2 px-4 file:max-md:py-0',
            sm: 'h-9 px-3 file:md:py-2 file:max-md:py-1.5',
            lg: 'h-11 px-8 file:md:py-3 file:max-md:py-2.5',
        },
        error: {
            auto: '[&.ng-invalid.ng-touched]:text-destructive [&.ng-invalid.ng-touched]:border-destructive [&.ng-invalid.ng-touched]:focus-visible:ring-destructive',
            true: 'text-destructive border-destructive focus-visible:ring-destructive',
        },
    },
    defaultVariants: {
        size: 'default',
        error: 'auto',
    },
});
export class HlmInputDirective {
    size = input('default');
    error = input('auto');
    state = computed(() => ({
        error: signal(this.error()),
    }));
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(inputVariants({ size: this.size(), error: this.state().error() }), this.userClass()));
    _injector = inject(Injector);
    ngControl = this._injector.get(NgControl, null);
    _errorStateTracker;
    _defaultErrorStateMatcher = inject(ErrorStateMatcher);
    _parentForm = inject(NgForm, { optional: true });
    _parentFormGroup = inject(FormGroupDirective, { optional: true });
    errorState = computed(() => this._errorStateTracker.errorState());
    constructor() {
        this._errorStateTracker = new ErrorStateTracker(this._defaultErrorStateMatcher, this.ngControl, this._parentFormGroup, this._parentForm);
        effect(() => {
            const error = this._errorStateTracker.errorState();
            untracked(() => {
                if (this.ngControl) {
                    this.setError(error);
                }
            });
        });
    }
    ngDoCheck() {
        this._errorStateTracker.updateErrorState();
    }
    setError(error) {
        this.state().error.set(error);
    }
    static ɵfac = function HlmInputDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmInputDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmInputDirective, selectors: [["", "hlmInput", ""]], hostVars: 2, hostBindings: function HlmInputDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { size: [1, "size"], error: [1, "error"], userClass: [1, "class", "userClass"] }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: BrnFormFieldControl,
                    useExisting: HlmInputDirective,
                },
            ])] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmInputDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmInput]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
                providers: [
                    {
                        provide: BrnFormFieldControl,
                        useExisting: HlmInputDirective,
                    },
                ],
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktaW5wdXQtaGVsbS9zcmMvbGliL2hsbS1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRS9FLE9BQU8sRUFBcUIsR0FBRyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBR2xFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQy9CLDBXQUEwVyxFQUMxVztJQUNDLFFBQVEsRUFBRTtRQUNULElBQUksRUFBRTtZQUNMLE9BQU8sRUFBRSxpQ0FBaUM7WUFDMUMsRUFBRSxFQUFFLDBDQUEwQztZQUM5QyxFQUFFLEVBQUUsMkNBQTJDO1NBQy9DO1FBQ0QsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLGtKQUFrSjtZQUN4SixJQUFJLEVBQUUsb0VBQW9FO1NBQzFFO0tBQ0Q7SUFDRCxlQUFlLEVBQUU7UUFDaEIsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsTUFBTTtLQUNiO0NBQ0QsQ0FDRCxDQUFDO0FBZ0JGLE1BQU0sT0FBTyxpQkFBaUI7SUFDYixJQUFJLEdBQUcsS0FBSyxDQUF3QixTQUFTLENBQUMsQ0FBQztJQUUvQyxLQUFLLEdBQUcsS0FBSyxDQUF5QixNQUFNLENBQUMsQ0FBQztJQUUzQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDMUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDM0IsQ0FBQyxDQUFDLENBQUM7SUFFWSxTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQ2pELEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUN4RixDQUFDO0lBRWUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUU5QixTQUFTLEdBQXFCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVqRSxrQkFBa0IsQ0FBb0I7SUFFdEMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNqRCxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUVuRSxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBRWxGO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksaUJBQWlCLENBQzlDLElBQUksQ0FBQyx5QkFBeUIsRUFDOUIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQyxXQUFXLENBQ2hCLENBQUM7UUFFRixNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1gsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ25ELFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQTZCO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7MkdBbERXLGlCQUFpQjs2REFBakIsaUJBQWlCO1lBQWpCLGNBQUEsb0JBQWdCLENBQUM7d0lBUGxCO2dCQUNWO29CQUNDLE9BQU8sRUFBRSxtQkFBbUI7b0JBQzVCLFdBQVcsRUFBRSxpQkFBaUI7aUJBQzlCO2FBQ0Q7O2lGQUVXLGlCQUFpQjtjQWI3QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGtCQUFrQjtpQkFDN0I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxtQkFBbUI7d0JBQzVCLFdBQVcsbUJBQW1CO3FCQUM5QjtpQkFDRDthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCB0eXBlIERvQ2hlY2ssIEluamVjdG9yLCBjb21wdXRlZCwgZWZmZWN0LCBpbmplY3QsIGlucHV0LCBzaWduYWwsIHVudHJhY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0NvbnRyb2wsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGhsbSB9IGZyb20gJ0BzcGFydGFuLW5nL2JyYWluL2NvcmUnO1xuaW1wb3J0IHsgQnJuRm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0BzcGFydGFuLW5nL2JyYWluL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgRXJyb3JTdGF0ZU1hdGNoZXIsIEVycm9yU3RhdGVUcmFja2VyIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vZm9ybXMnO1xuXG5pbXBvcnQgeyB0eXBlIFZhcmlhbnRQcm9wcywgY3ZhIH0gZnJvbSAnY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5JztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5leHBvcnQgY29uc3QgaW5wdXRWYXJpYW50cyA9IGN2YShcblx0J2ZsZXggcm91bmRlZC1tZCBib3JkZXIgZm9udC1ub3JtYWwgYm9yZGVyLWlucHV0IGJnLXRyYW5zcGFyZW50IHRleHQtYmFzZSBtZDp0ZXh0LXNtIHJpbmctb2Zmc2V0LWJhY2tncm91bmQgZmlsZTpib3JkZXItMCBmaWxlOnRleHQtZm9yZWdyb3VuZCBmaWxlOmJnLXRyYW5zcGFyZW50IGZpbGU6Zm9udC1tZWRpdW0gcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCcsXG5cdHtcblx0XHR2YXJpYW50czoge1xuXHRcdFx0c2l6ZToge1xuXHRcdFx0XHRkZWZhdWx0OiAnaC0xMCBweS0yIHB4LTQgZmlsZTptYXgtbWQ6cHktMCcsXG5cdFx0XHRcdHNtOiAnaC05IHB4LTMgZmlsZTptZDpweS0yIGZpbGU6bWF4LW1kOnB5LTEuNScsXG5cdFx0XHRcdGxnOiAnaC0xMSBweC04IGZpbGU6bWQ6cHktMyBmaWxlOm1heC1tZDpweS0yLjUnLFxuXHRcdFx0fSxcblx0XHRcdGVycm9yOiB7XG5cdFx0XHRcdGF1dG86ICdbJi5uZy1pbnZhbGlkLm5nLXRvdWNoZWRdOnRleHQtZGVzdHJ1Y3RpdmUgWyYubmctaW52YWxpZC5uZy10b3VjaGVkXTpib3JkZXItZGVzdHJ1Y3RpdmUgWyYubmctaW52YWxpZC5uZy10b3VjaGVkXTpmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUnLFxuXHRcdFx0XHR0cnVlOiAndGV4dC1kZXN0cnVjdGl2ZSBib3JkZXItZGVzdHJ1Y3RpdmUgZm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRkZWZhdWx0VmFyaWFudHM6IHtcblx0XHRcdHNpemU6ICdkZWZhdWx0Jyxcblx0XHRcdGVycm9yOiAnYXV0bycsXG5cdFx0fSxcblx0fSxcbik7XG50eXBlIElucHV0VmFyaWFudHMgPSBWYXJpYW50UHJvcHM8dHlwZW9mIGlucHV0VmFyaWFudHM+O1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbaGxtSW5wdXRdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ19jb21wdXRlZENsYXNzKCknLFxuXHR9LFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBCcm5Gb3JtRmllbGRDb250cm9sLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IEhsbUlucHV0RGlyZWN0aXZlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEhsbUlucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgQnJuRm9ybUZpZWxkQ29udHJvbCwgRG9DaGVjayB7XG5cdHB1YmxpYyByZWFkb25seSBzaXplID0gaW5wdXQ8SW5wdXRWYXJpYW50c1snc2l6ZSddPignZGVmYXVsdCcpO1xuXG5cdHB1YmxpYyByZWFkb25seSBlcnJvciA9IGlucHV0PElucHV0VmFyaWFudHNbJ2Vycm9yJ10+KCdhdXRvJyk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IHN0YXRlID0gY29tcHV0ZWQoKCkgPT4gKHtcblx0XHRlcnJvcjogc2lnbmFsKHRoaXMuZXJyb3IoKSksXG5cdH0pKTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCByZWFkb25seSBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG5cdFx0aGxtKGlucHV0VmFyaWFudHMoeyBzaXplOiB0aGlzLnNpemUoKSwgZXJyb3I6IHRoaXMuc3RhdGUoKS5lcnJvcigpIH0pLCB0aGlzLnVzZXJDbGFzcygpKSxcblx0KTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IF9pbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cblx0cHVibGljIHJlYWRvbmx5IG5nQ29udHJvbDogTmdDb250cm9sIHwgbnVsbCA9IHRoaXMuX2luamVjdG9yLmdldChOZ0NvbnRyb2wsIG51bGwpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgX2Vycm9yU3RhdGVUcmFja2VyOiBFcnJvclN0YXRlVHJhY2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IF9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXIgPSBpbmplY3QoRXJyb3JTdGF0ZU1hdGNoZXIpO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9wYXJlbnRGb3JtID0gaW5qZWN0KE5nRm9ybSwgeyBvcHRpb25hbDogdHJ1ZSB9KTtcblx0cHJpdmF0ZSByZWFkb25seSBfcGFyZW50Rm9ybUdyb3VwID0gaW5qZWN0KEZvcm1Hcm91cERpcmVjdGl2ZSwgeyBvcHRpb25hbDogdHJ1ZSB9KTtcblxuXHRwdWJsaWMgcmVhZG9ubHkgZXJyb3JTdGF0ZSA9IGNvbXB1dGVkKCgpID0+IHRoaXMuX2Vycm9yU3RhdGVUcmFja2VyLmVycm9yU3RhdGUoKSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fZXJyb3JTdGF0ZVRyYWNrZXIgPSBuZXcgRXJyb3JTdGF0ZVRyYWNrZXIoXG5cdFx0XHR0aGlzLl9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXIsXG5cdFx0XHR0aGlzLm5nQ29udHJvbCxcblx0XHRcdHRoaXMuX3BhcmVudEZvcm1Hcm91cCxcblx0XHRcdHRoaXMuX3BhcmVudEZvcm0sXG5cdFx0KTtcblxuXHRcdGVmZmVjdCgoKSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvciA9IHRoaXMuX2Vycm9yU3RhdGVUcmFja2VyLmVycm9yU3RhdGUoKTtcblx0XHRcdHVudHJhY2tlZCgoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLm5nQ29udHJvbCkge1xuXHRcdFx0XHRcdHRoaXMuc2V0RXJyb3IoZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdG5nRG9DaGVjaygpIHtcblx0XHR0aGlzLl9lcnJvclN0YXRlVHJhY2tlci51cGRhdGVFcnJvclN0YXRlKCk7XG5cdH1cblxuXHRzZXRFcnJvcihlcnJvcjogSW5wdXRWYXJpYW50c1snZXJyb3InXSkge1xuXHRcdHRoaXMuc3RhdGUoKS5lcnJvci5zZXQoZXJyb3IpO1xuXHR9XG59XG4iXX0=