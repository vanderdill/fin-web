import { type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
import * as i1 from "@spartan-ng/brain/label";
export declare const labelVariants: (props?: {
    variant?: "default";
    error?: boolean | "auto";
    disabled?: boolean | "auto";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export type LabelVariants = VariantProps<typeof labelVariants>;
export declare class HlmLabelDirective {
    private readonly _brn;
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    readonly variant: import("@angular/core").InputSignal<"default">;
    readonly error: import("@angular/core").InputSignal<boolean | "auto">;
    protected readonly state: import("@angular/core").Signal<{
        error: import("@angular/core").WritableSignal<boolean | "auto">;
    }>;
    protected readonly _computedClass: import("@angular/core").Signal<string>;
    setError(error: LabelVariants['error']): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmLabelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmLabelDirective, "[hlmLabel]", never, { "userClass": { "alias": "class"; "required": false; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "error": { "alias": "error"; "required": false; "isSignal": true; }; }, {}, never, never, true, [{ directive: typeof i1.BrnLabelDirective; inputs: { "id": "id"; }; outputs: {}; }]>;
}
