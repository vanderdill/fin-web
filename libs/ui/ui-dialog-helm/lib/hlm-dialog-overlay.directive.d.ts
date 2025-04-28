import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
export declare const hlmDialogOverlayClass = "bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0";
export declare class HlmDialogOverlayDirective {
    private readonly _classSettable;
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected readonly _computedClass: import("@angular/core").Signal<string>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogOverlayDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmDialogOverlayDirective, "[hlmDialogOverlay],brn-dialog-overlay[hlm]", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
