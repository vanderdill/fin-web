import { Injectable, inject } from '@angular/core';
import { BrnDialogService, DEFAULT_BRN_DIALOG_OPTIONS, cssClassesToArray, } from '@spartan-ng/brain/dialog';
import { HlmDialogContentComponent } from './hlm-dialog-content.component';
import { hlmDialogOverlayClass } from './hlm-dialog-overlay.directive';
import * as i0 from "@angular/core";
export class HlmDialogService {
    _brnDialogService = inject(BrnDialogService);
    open(component, options) {
        const mergedOptions = {
            ...DEFAULT_BRN_DIALOG_OPTIONS,
            ...(options ?? {}),
            backdropClass: cssClassesToArray(`${hlmDialogOverlayClass} ${options?.backdropClass ?? ''}`),
            context: { ...(typeof options?.context === 'object' ? options?.context : {}), $component: component, $dynamicComponentClass: options?.contentClass },
        };
        return this._brnDialogService.open(HlmDialogContentComponent, undefined, mergedOptions.context, mergedOptions);
    }
    static ɵfac = function HlmDialogService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HlmDialogService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HlmDialogService, factory: HlmDialogService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HlmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGxtLWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS91aS1kaWFsb2ctaGVsbS9zcmMvbGliL2hsbS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFvQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUVOLGdCQUFnQixFQUNoQiwwQkFBMEIsRUFDMUIsaUJBQWlCLEdBQ2pCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBVXZFLE1BQU0sT0FBTyxnQkFBZ0I7SUFDWCxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUV2RCxJQUFJLENBQUMsU0FBd0QsRUFBRSxPQUFtQztRQUN4RyxNQUFNLGFBQWEsR0FBRztZQUNyQixHQUFHLDBCQUEwQjtZQUU3QixHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNsQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxxQkFBcUIsSUFBSSxPQUFPLEVBQUUsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQzVGLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7U0FDcEosQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNoSCxDQUFDOzBHQWJXLGdCQUFnQjtnRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGaEIsTUFBTTs7aUZBRU4sZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgdHlwZSBUZW1wbGF0ZVJlZiwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHR0eXBlIEJybkRpYWxvZ09wdGlvbnMsXG5cdEJybkRpYWxvZ1NlcnZpY2UsXG5cdERFRkFVTFRfQlJOX0RJQUxPR19PUFRJT05TLFxuXHRjc3NDbGFzc2VzVG9BcnJheSxcbn0gZnJvbSAnQHNwYXJ0YW4tbmcvYnJhaW4vZGlhbG9nJztcbmltcG9ydCB7IEhsbURpYWxvZ0NvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2hsbS1kaWFsb2ctY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgaGxtRGlhbG9nT3ZlcmxheUNsYXNzIH0gZnJvbSAnLi9obG0tZGlhbG9nLW92ZXJsYXkuZGlyZWN0aXZlJztcblxuZXhwb3J0IHR5cGUgSGxtRGlhbG9nT3B0aW9uczxEaWFsb2dDb250ZXh0ID0gdW5rbm93bj4gPSBCcm5EaWFsb2dPcHRpb25zICYge1xuXHRjb250ZW50Q2xhc3M/OiBzdHJpbmc7XG5cdGNvbnRleHQ/OiBEaWFsb2dDb250ZXh0O1xufTtcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEhsbURpYWxvZ1NlcnZpY2Uge1xuXHRwcml2YXRlIHJlYWRvbmx5IF9icm5EaWFsb2dTZXJ2aWNlID0gaW5qZWN0KEJybkRpYWxvZ1NlcnZpY2UpO1xuXG5cdHB1YmxpYyBvcGVuKGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTx1bmtub3duPiB8IFRlbXBsYXRlUmVmPHVua25vd24+LCBvcHRpb25zPzogUGFydGlhbDxIbG1EaWFsb2dPcHRpb25zPikge1xuXHRcdGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG5cdFx0XHQuLi5ERUZBVUxUX0JSTl9ESUFMT0dfT1BUSU9OUyxcblxuXHRcdFx0Li4uKG9wdGlvbnMgPz8ge30pLFxuXHRcdFx0YmFja2Ryb3BDbGFzczogY3NzQ2xhc3Nlc1RvQXJyYXkoYCR7aGxtRGlhbG9nT3ZlcmxheUNsYXNzfSAke29wdGlvbnM/LmJhY2tkcm9wQ2xhc3MgPz8gJyd9YCksXG5cdFx0XHRjb250ZXh0OiB7IC4uLih0eXBlb2Ygb3B0aW9ucz8uY29udGV4dCA9PT0gJ29iamVjdCcgPyBvcHRpb25zPy5jb250ZXh0IDoge30pLCAkY29tcG9uZW50OiBjb21wb25lbnQsICRkeW5hbWljQ29tcG9uZW50Q2xhc3M6IG9wdGlvbnM/LmNvbnRlbnRDbGFzcyB9LFxuXHRcdH07XG5cblx0XHRyZXR1cm4gdGhpcy5fYnJuRGlhbG9nU2VydmljZS5vcGVuKEhsbURpYWxvZ0NvbnRlbnRDb21wb25lbnQsIHVuZGVmaW5lZCwgbWVyZ2VkT3B0aW9ucy5jb250ZXh0LCBtZXJnZWRPcHRpb25zKTtcblx0fVxufVxuIl19