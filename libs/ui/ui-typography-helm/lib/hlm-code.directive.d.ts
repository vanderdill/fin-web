import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
export declare const hlmCode = "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold";
export declare class HlmCodeDirective {
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected _computedClass: import("@angular/core").Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmCodeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmCodeDirective, "[hlmCode]", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
