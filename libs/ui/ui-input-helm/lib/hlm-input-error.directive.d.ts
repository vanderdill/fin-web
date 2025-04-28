import { type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
export declare const inputErrorVariants: (props?: {} & import("class-variance-authority/dist/types").ClassProp) => string;
export type InputErrorVariants = VariantProps<typeof inputErrorVariants>;
export declare class HlmInputErrorDirective {
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected _computedClass: import("@angular/core").Signal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmInputErrorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmInputErrorDirective, "[hlmInputError]", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
