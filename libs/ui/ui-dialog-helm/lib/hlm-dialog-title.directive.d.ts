import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
import * as i1 from "@spartan-ng/brain/dialog";
export declare class HlmDialogTitleDirective {
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected _computedClass: import("@angular/core").Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogTitleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogTitleDirective, "[hlmDialogTitle]", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnDialogTitleDirective; inputs: {}; outputs: {}; }]>;
}
