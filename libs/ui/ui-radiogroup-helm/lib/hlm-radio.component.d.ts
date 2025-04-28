import { BrnRadioChange } from '@spartan-ng/brain/radio-group';
import { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
export declare class HlmRadioComponent<T = unknown> {
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected _computedClass: import("@angular/core").Signal<string>;
    /** Used to set the id on the underlying brn element. */
    readonly id: import("@angular/core").InputSignal<string>;
    /** Used to set the aria-label attribute on the underlying brn element. */
    readonly ariaLabel: import("@angular/core").InputSignal<string>;
    /** Used to set the aria-labelledby attribute on the underlying brn element. */
    readonly ariaLabelledby: import("@angular/core").InputSignal<string>;
    /** Used to set the aria-describedby attribute on the underlying brn element. */
    readonly ariaDescribedby: import("@angular/core").InputSignal<string>;
    /**
     * The value this radio button represents.
     */
    readonly value: import("@angular/core").InputSignal<T>;
    /** Whether the checkbox is required. */
    readonly required: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    /** Whether the checkbox is disabled. */
    readonly disabled: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    /**
     * Event emitted when the checked state of this radio button changes.
     */
    readonly change: import("@angular/core").OutputEmitterRef<BrnRadioChange<T>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmRadioComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmRadioComponent<any>, "hlm-radio", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "id": { "alias": "id"; "required": false; "isSignal": true; }; "ariaLabel": { "alias": "aria-label"; "required": false; "isSignal": true; }; "ariaLabelledby": { "alias": "aria-labelledby"; "required": false; "isSignal": true; }; "ariaDescribedby": { "alias": "aria-describedby"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": true; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "disabled": { "alias": "disabled"; "required": false; "isSignal": true; }; }, { "change": "change"; }, never, ["[target],[indicator]", "*"], true, never>;
}
