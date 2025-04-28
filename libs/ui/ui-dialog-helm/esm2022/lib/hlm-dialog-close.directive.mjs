import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export class HlmDialogCloseDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm('absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground', this.userClass()));
    static ɵfac = function HlmDialogCloseDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogCloseDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmDialogCloseDirective, selectors: [["", "hlmDialogClose", ""], ["", "brnDialogClose", "", "hlm", ""]], hostVars: 2, hostBindings: function HlmDialogCloseDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogCloseDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmDialogClose],[brnDialogClose][hlm]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy1jbG9zZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3VpLWRpYWxvZy1oZWxtL3NyYy9saWIvaGxtLWRpYWxvZy1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFVN0MsTUFBTSxPQUFPLHVCQUF1QjtJQUNuQixTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBRW5ELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQ2pELEdBQUcsQ0FDRiwrUUFBK1EsRUFDL1EsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQixDQUNELENBQUM7aUhBUlUsdUJBQXVCOzZEQUF2Qix1QkFBdUI7WUFBdkIsY0FBQSxvQkFBZ0IsQ0FBTzs7O2lGQUF2Qix1QkFBdUI7Y0FQbkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGtCQUFrQjtpQkFDN0I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbaGxtRGlhbG9nQ2xvc2VdLFticm5EaWFsb2dDbG9zZV1baGxtXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdfY29tcHV0ZWRDbGFzcygpJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgSGxtRGlhbG9nQ2xvc2VEaXJlY3RpdmUge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9jb21wdXRlZENsYXNzID0gY29tcHV0ZWQoKCkgPT5cblx0XHRobG0oXG5cdFx0XHQnYWJzb2x1dGUgcmlnaHQtNCB0b3AtNCByb3VuZGVkLXNtIG9wYWNpdHktNzAgcmluZy1vZmZzZXQtYmFja2dyb3VuZCB0cmFuc2l0aW9uLW9wYWNpdHkgaG92ZXI6b3BhY2l0eS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXJpbmcgZm9jdXM6cmluZy1vZmZzZXQtMiBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW3N0YXRlPW9wZW5dOmJnLWFjY2VudCBkYXRhLVtzdGF0ZT1vcGVuXTp0ZXh0LW11dGVkLWZvcmVncm91bmQnLFxuXHRcdFx0dGhpcy51c2VyQ2xhc3MoKSxcblx0XHQpLFxuXHQpO1xufVxuIl19