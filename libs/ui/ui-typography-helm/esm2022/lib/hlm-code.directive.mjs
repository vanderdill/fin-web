import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmCode = 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold';
export class HlmCodeDirective {
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmCode, this.userClass()));
    static ɵfac = function HlmCodeDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmCodeDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmCodeDirective, selectors: [["", "hlmCode", ""]], hostVars: 2, hostBindings: function HlmCodeDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx._computedClass());
        } }, inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmCodeDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmCode]',
                standalone: true,
                host: {
                    '[class]': '_computedClass()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWNvZGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS91aS10eXBvZ3JhcGh5LWhlbG0vc3JjL2xpYi9obG0tY29kZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHN0MsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLG1GQUFtRixDQUFDO0FBUzNHLE1BQU0sT0FBTyxnQkFBZ0I7SUFDWixTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDOzBHQUY5RCxnQkFBZ0I7NkRBQWhCLGdCQUFnQjtZQUFoQixjQUFBLG9CQUFnQixDQUFBOzs7aUZBQWhCLGdCQUFnQjtjQVA1QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLGtCQUFrQjtpQkFDN0I7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBobG0gfSBmcm9tICdAc3BhcnRhbi1uZy9icmFpbi9jb3JlJztcbmltcG9ydCB0eXBlIHsgQ2xhc3NWYWx1ZSB9IGZyb20gJ2Nsc3gnO1xuXG5leHBvcnQgY29uc3QgaGxtQ29kZSA9ICdyZWxhdGl2ZSByb3VuZGVkIGJnLW11dGVkIHB4LVswLjNyZW1dIHB5LVswLjJyZW1dIGZvbnQtbW9ubyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbaGxtQ29kZV0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnX2NvbXB1dGVkQ2xhc3MoKScsXG5cdH0sXG59KVxuZXhwb3J0IGNsYXNzIEhsbUNvZGVEaXJlY3RpdmUge1xuXHRwdWJsaWMgcmVhZG9ubHkgdXNlckNsYXNzID0gaW5wdXQ8Q2xhc3NWYWx1ZT4oJycsIHsgYWxpYXM6ICdjbGFzcycgfSk7XG5cdHByb3RlY3RlZCBfY29tcHV0ZWRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGhsbShobG1Db2RlLCB0aGlzLnVzZXJDbGFzcygpKSk7XG59XG4iXX0=