import { Directive, computed, input, signal } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { cva } from 'class-variance-authority';
import { injectBrnButtonConfig } from './hlm-button.token';
import * as i0 from "@angular/core";
export const buttonVariants = cva('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'underline-offset-4 hover:underline text-primary',
        },
        size: {
            default: 'h-10 py-2 px-4',
            sm: 'h-9 px-3 rounded-md',
            lg: 'h-11 px-8 rounded-md',
            icon: 'h-10 w-10',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});
export class HlmButtonDirective {
    _config = injectBrnButtonConfig();
    _additionalClasses = signal('');
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(buttonVariants({ variant: this.variant(), size: this.size() }), this.userClass(), this._additionalClasses()));
    variant = input(this._config.variant);
    size = input(this._config.size);
    setClass(classes) {
        this._additionalClasses.set(classes);
    }
    static ɵfac = function HlmButtonDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmButtonDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmButtonDirective, selectors: [["", "hlmBtn", ""]], hostVars: 2, hostBindings: function HlmButtonDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"], variant: [1, "variant"], size: [1, "size"] }, exportAs: ["hlmBtn"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmBtn]',
                standalone: true,
                exportAs: 'hlmBtn',
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLWJ1dHRvbi1oZWxtL3NyYy9saWIvaGxtLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0MsT0FBTyxFQUFxQixHQUFHLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFM0QsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FDaEMsc1FBQXNRLEVBQ3RRO0lBQ0MsUUFBUSxFQUFFO1FBQ1QsT0FBTyxFQUFFO1lBQ1IsT0FBTyxFQUFFLHdEQUF3RDtZQUNqRSxXQUFXLEVBQUUsb0VBQW9FO1lBQ2pGLE9BQU8sRUFBRSxrRUFBa0U7WUFDM0UsU0FBUyxFQUFFLDhEQUE4RDtZQUN6RSxLQUFLLEVBQUUsOENBQThDO1lBQ3JELElBQUksRUFBRSxpREFBaUQ7U0FDdkQ7UUFDRCxJQUFJLEVBQUU7WUFDTCxPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLEVBQUUsRUFBRSxxQkFBcUI7WUFDekIsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQixJQUFJLEVBQUUsV0FBVztTQUNqQjtLQUNEO0lBQ0QsZUFBZSxFQUFFO1FBQ2hCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO0tBQ2Y7Q0FDRCxDQUNELENBQUM7QUFXRixNQUFNLE9BQU8sa0JBQWtCO0lBQ2IsT0FBTyxHQUFHLHFCQUFxQixFQUFFLENBQUM7SUFFbEMsa0JBQWtCLEdBQUcsTUFBTSxDQUFhLEVBQUUsQ0FBQyxDQUFDO0lBRTdDLFNBQVMsR0FBRyxLQUFLLENBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFbkQsY0FBYyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FDakQsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQ2hILENBQUM7SUFFYyxPQUFPLEdBQUcsS0FBSyxDQUE0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWpFLElBQUksR0FBRyxLQUFLLENBQXlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFeEUsUUFBUSxDQUFDLE9BQWU7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzRHQWpCVyxrQkFBa0I7NkRBQWxCLGtCQUFrQjtZQUFsQixjQUFBLG9CQUFnQixDQUFFOzs7aUZBQWxCLGtCQUFrQjtjQVI5QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsSUFBSSxFQUFFO29CQUNMLFNBQVMsRUFBRSxrQkFBa0I7aUJBQzdCO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGNvbXB1dGVkLCBpbnB1dCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB7IHR5cGUgVmFyaWFudFByb3BzLCBjdmEgfSBmcm9tICdjbGFzcy12YXJpYW5jZS1hdXRob3JpdHknO1xuaW1wb3J0IHR5cGUgeyBDbGFzc1ZhbHVlIH0gZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBpbmplY3RCcm5CdXR0b25Db25maWcgfSBmcm9tICcuL2hsbS1idXR0b24udG9rZW4nO1xuXG5leHBvcnQgY29uc3QgYnV0dG9uVmFyaWFudHMgPSBjdmEoXG5cdCdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpvcGFjaXR5LTUwIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgcmluZy1vZmZzZXQtYmFja2dyb3VuZCcsXG5cdHtcblx0XHR2YXJpYW50czoge1xuXHRcdFx0dmFyaWFudDoge1xuXHRcdFx0XHRkZWZhdWx0OiAnYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1wcmltYXJ5LzkwJyxcblx0XHRcdFx0ZGVzdHJ1Y3RpdmU6ICdiZy1kZXN0cnVjdGl2ZSB0ZXh0LWRlc3RydWN0aXZlLWZvcmVncm91bmQgaG92ZXI6YmctZGVzdHJ1Y3RpdmUvOTAnLFxuXHRcdFx0XHRvdXRsaW5lOiAnYm9yZGVyIGJvcmRlci1pbnB1dCBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCcsXG5cdFx0XHRcdHNlY29uZGFyeTogJ2JnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS84MCcsXG5cdFx0XHRcdGdob3N0OiAnaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQnLFxuXHRcdFx0XHRsaW5rOiAndW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZSB0ZXh0LXByaW1hcnknLFxuXHRcdFx0fSxcblx0XHRcdHNpemU6IHtcblx0XHRcdFx0ZGVmYXVsdDogJ2gtMTAgcHktMiBweC00Jyxcblx0XHRcdFx0c206ICdoLTkgcHgtMyByb3VuZGVkLW1kJyxcblx0XHRcdFx0bGc6ICdoLTExIHB4LTggcm91bmRlZC1tZCcsXG5cdFx0XHRcdGljb246ICdoLTEwIHctMTAnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGRlZmF1bHRWYXJpYW50czoge1xuXHRcdFx0dmFyaWFudDogJ2RlZmF1bHQnLFxuXHRcdFx0c2l6ZTogJ2RlZmF1bHQnLFxuXHRcdH0sXG5cdH0sXG4pO1xuZXhwb3J0IHR5cGUgQnV0dG9uVmFyaWFudHMgPSBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPjtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2hsbUJ0bl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRleHBvcnRBczogJ2hsbUJ0bicsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdfY29tcHV0ZWRDbGFzcygpJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtQnV0dG9uRGlyZWN0aXZlIHtcblx0cHJpdmF0ZSByZWFkb25seSBfY29uZmlnID0gaW5qZWN0QnJuQnV0dG9uQ29uZmlnKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBfYWRkaXRpb25hbENsYXNzZXMgPSBzaWduYWw8Q2xhc3NWYWx1ZT4oJycpO1xuXG5cdHB1YmxpYyByZWFkb25seSB1c2VyQ2xhc3MgPSBpbnB1dDxDbGFzc1ZhbHVlPignJywgeyBhbGlhczogJ2NsYXNzJyB9KTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvbXB1dGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuXHRcdGhsbShidXR0b25WYXJpYW50cyh7IHZhcmlhbnQ6IHRoaXMudmFyaWFudCgpLCBzaXplOiB0aGlzLnNpemUoKSB9KSwgdGhpcy51c2VyQ2xhc3MoKSwgdGhpcy5fYWRkaXRpb25hbENsYXNzZXMoKSksXG5cdCk7XG5cblx0cHVibGljIHJlYWRvbmx5IHZhcmlhbnQgPSBpbnB1dDxCdXR0b25WYXJpYW50c1sndmFyaWFudCddPih0aGlzLl9jb25maWcudmFyaWFudCk7XG5cblx0cHVibGljIHJlYWRvbmx5IHNpemUgPSBpbnB1dDxCdXR0b25WYXJpYW50c1snc2l6ZSddPih0aGlzLl9jb25maWcuc2l6ZSk7XG5cblx0c2V0Q2xhc3MoY2xhc3Nlczogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5fYWRkaXRpb25hbENsYXNzZXMuc2V0KGNsYXNzZXMpO1xuXHR9XG59XG4iXX0=