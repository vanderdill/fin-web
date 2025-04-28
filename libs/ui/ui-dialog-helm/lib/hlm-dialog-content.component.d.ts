import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
export declare class HlmDialogContentComponent {
    private readonly _dialogRef;
    private readonly _dialogContext;
    readonly state: import("@angular/core").Signal<import("@spartan-ng/brain/dialog").BrnDialogState>;
    readonly component: any;
    private readonly _dynamicComponentClass;
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected readonly _computedClass: import("@angular/core").Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HlmDialogContentComponent, "hlm-dialog-content", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
