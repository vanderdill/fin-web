import { Directive, computed, input } from '@angular/core';
import { injectHlmIconConfig } from './hlm-icon.token';
import * as i0 from "@angular/core";
export class HlmIconDirective {
    _config = injectHlmIconConfig();
    size = input(this._config.size);
    _computedSize = computed(() => {
        const size = this.size();
        switch (size) {
            case 'xs':
                return '12px';
            case 'sm':
                return '16px';
            case 'base':
                return '24px';
            case 'lg':
                return '32px';
            case 'xl':
                return '48px';
            default: {
                return size;
            }
        }
    });
    static ɵfac = function HlmIconDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmIconDirective)(); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HlmIconDirective, selectors: [["ng-icon", "hlm", ""]], hostVars: 2, hostBindings: function HlmIconDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("--ng-icon__size", ctx._computedSize());
        } }, inputs: { size: [1, "size"] } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmIconDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-icon[hlm]',
                standalone: true,
                host: {
                    '[style.--ng-icon__size]': '_computedSize()',
                },
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWljb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS91aS1pY29uLWhlbG0vc3JjL2xpYi9obG0taWNvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQVd2RCxNQUFNLE9BQU8sZ0JBQWdCO0lBQ1gsT0FBTyxHQUFHLG1CQUFtQixFQUFFLENBQUM7SUFDakMsSUFBSSxHQUFHLEtBQUssQ0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXZDLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQ2hELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QixRQUFRLElBQUksRUFBRSxDQUFDO1lBQ2QsS0FBSyxJQUFJO2dCQUNSLE9BQU8sTUFBTSxDQUFDO1lBQ2YsS0FBSyxJQUFJO2dCQUNSLE9BQU8sTUFBTSxDQUFDO1lBQ2YsS0FBSyxNQUFNO2dCQUNWLE9BQU8sTUFBTSxDQUFDO1lBQ2YsS0FBSyxJQUFJO2dCQUNSLE9BQU8sTUFBTSxDQUFDO1lBQ2YsS0FBSyxJQUFJO2dCQUNSLE9BQU8sTUFBTSxDQUFDO1lBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDVCxPQUFPLElBQUksQ0FBQztZQUNiLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQyxDQUFDLENBQUM7MEdBdEJTLGdCQUFnQjs2REFBaEIsZ0JBQWdCO1lBQWhCLGtDQUFBLG1CQUFlLENBQUM7OztpRkFBaEIsZ0JBQWdCO2NBUDVCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLElBQUksRUFBRTtvQkFDTCx5QkFBeUIsRUFBRSxpQkFBaUI7aUJBQzVDO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGNvbXB1dGVkLCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW5qZWN0SGxtSWNvbkNvbmZpZyB9IGZyb20gJy4vaGxtLWljb24udG9rZW4nO1xuXG5leHBvcnQgdHlwZSBJY29uU2l6ZSA9ICd4cycgfCAnc20nIHwgJ2Jhc2UnIHwgJ2xnJyB8ICd4bCcgfCAnbm9uZScgfCAoUmVjb3JkPG5ldmVyLCBuZXZlcj4gJiBzdHJpbmcpO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICduZy1pY29uW2hsbV0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRob3N0OiB7XG5cdFx0J1tzdHlsZS4tLW5nLWljb25fX3NpemVdJzogJ19jb21wdXRlZFNpemUoKScsXG5cdH0sXG59KVxuZXhwb3J0IGNsYXNzIEhsbUljb25EaXJlY3RpdmUge1xuXHRwcml2YXRlIHJlYWRvbmx5IF9jb25maWcgPSBpbmplY3RIbG1JY29uQ29uZmlnKCk7XG5cdHB1YmxpYyByZWFkb25seSBzaXplID0gaW5wdXQ8SWNvblNpemU+KHRoaXMuX2NvbmZpZy5zaXplKTtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgX2NvbXB1dGVkU2l6ZSA9IGNvbXB1dGVkKCgpID0+IHtcblx0XHRjb25zdCBzaXplID0gdGhpcy5zaXplKCk7XG5cblx0XHRzd2l0Y2ggKHNpemUpIHtcblx0XHRcdGNhc2UgJ3hzJzpcblx0XHRcdFx0cmV0dXJuICcxMnB4Jztcblx0XHRcdGNhc2UgJ3NtJzpcblx0XHRcdFx0cmV0dXJuICcxNnB4Jztcblx0XHRcdGNhc2UgJ2Jhc2UnOlxuXHRcdFx0XHRyZXR1cm4gJzI0cHgnO1xuXHRcdFx0Y2FzZSAnbGcnOlxuXHRcdFx0XHRyZXR1cm4gJzMycHgnO1xuXHRcdFx0Y2FzZSAneGwnOlxuXHRcdFx0XHRyZXR1cm4gJzQ4cHgnO1xuXHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRyZXR1cm4gc2l6ZTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufVxuIl19