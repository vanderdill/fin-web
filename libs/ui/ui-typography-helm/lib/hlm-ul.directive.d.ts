import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
export declare const hlmUl = "my-6 ml-6 list-disc [&>li]:mt-2";
export declare class HlmUlDirective {
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected _computedClass: import("@angular/core").Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmUlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmUlDirective, "[hlmUl]", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
