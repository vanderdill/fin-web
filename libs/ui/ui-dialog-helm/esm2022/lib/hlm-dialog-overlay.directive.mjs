import { Directive, computed, effect, input, untracked } from '@angular/core';
import { hlm, injectCustomClassSettable } from '@spartan-ng/brain/core';
import * as i0 from "@angular/core";
export const hlmDialogOverlayClass = 'bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0';
export class HlmDialogOverlayDirective {
    _classSettable = injectCustomClassSettable({ optional: true, host: true });
    userClass = input('', { alias: 'class' });
    _computedClass = computed(() => hlm(hlmDialogOverlayClass, this.userClass()));
    constructor() {
        effect(() => {
            const newClass = this._computedClass();
            untracked(() => this._classSettable?.setClassToCustomElement(newClass));
        });
    }
    static ɵfac = function HlmDialogOverlayDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogOverlayDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmDialogOverlayDirective, selectors: [["", "hlmDialogOverlay", ""], ["brn-dialog-overlay", "hlm", ""]], inputs: { userClass: [1, "class", "userClass"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogOverlayDirective, [{
        type: Directive,
        args: [{
                selector: '[hlmDialogOverlay],brn-dialog-overlay[hlm]',
                standalone: true,
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy1vdmVybGF5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvdWktZGlhbG9nLWhlbG0vc3JjL2xpYi9obG0tZGlhbG9nLW92ZXJsYXkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHeEUsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQ2pDLHFJQUFxSSxDQUFDO0FBTXZJLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEIsY0FBYyxHQUFHLHlCQUF5QixDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUU1RSxTQUFTLEdBQUcsS0FBSyxDQUFhLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFakc7UUFDQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1gsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO21IQVhXLHlCQUF5Qjs2REFBekIseUJBQXlCOztpRkFBekIseUJBQXlCO2NBSnJDLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCxVQUFVLEVBQUUsSUFBSTthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgY29tcHV0ZWQsIGVmZmVjdCwgaW5wdXQsIHVudHJhY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGxtLCBpbmplY3RDdXN0b21DbGFzc1NldHRhYmxlIH0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vY29yZSc7XG5pbXBvcnQgdHlwZSB7IENsYXNzVmFsdWUgfSBmcm9tICdjbHN4JztcblxuZXhwb3J0IGNvbnN0IGhsbURpYWxvZ092ZXJsYXlDbGFzcyA9XG5cdCdiZy1ibGFjay84MCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tobG1EaWFsb2dPdmVybGF5XSxicm4tZGlhbG9nLW92ZXJsYXlbaGxtXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEhsbURpYWxvZ092ZXJsYXlEaXJlY3RpdmUge1xuXHRwcml2YXRlIHJlYWRvbmx5IF9jbGFzc1NldHRhYmxlID0gaW5qZWN0Q3VzdG9tQ2xhc3NTZXR0YWJsZSh7IG9wdGlvbmFsOiB0cnVlLCBob3N0OiB0cnVlIH0pO1xuXG5cdHB1YmxpYyByZWFkb25seSB1c2VyQ2xhc3MgPSBpbnB1dDxDbGFzc1ZhbHVlPignJywgeyBhbGlhczogJ2NsYXNzJyB9KTtcblx0cHJvdGVjdGVkIHJlYWRvbmx5IF9jb21wdXRlZENsYXNzID0gY29tcHV0ZWQoKCkgPT4gaGxtKGhsbURpYWxvZ092ZXJsYXlDbGFzcywgdGhpcy51c2VyQ2xhc3MoKSkpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGVmZmVjdCgoKSA9PiB7XG5cdFx0XHRjb25zdCBuZXdDbGFzcyA9IHRoaXMuX2NvbXB1dGVkQ2xhc3MoKTtcblx0XHRcdHVudHJhY2tlZCgoKSA9PiB0aGlzLl9jbGFzc1NldHRhYmxlPy5zZXRDbGFzc1RvQ3VzdG9tRWxlbWVudChuZXdDbGFzcykpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=