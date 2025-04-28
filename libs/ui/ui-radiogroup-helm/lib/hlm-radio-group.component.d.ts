import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
import * as i1 from "@spartan-ng/brain/radio-group";
export declare class HlmRadioGroupComponent {
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected _computedClass: import("@angular/core").Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmRadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmRadioGroupComponent, "hlm-radio-group", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, [{ directive: typeof i1.BrnRadioGroupDirective; inputs: { "name": "name"; "value": "value"; "disabled": "disabled"; "required": "required"; "direction": "direction"; }; outputs: {}; }]>;
}
