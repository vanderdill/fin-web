import { type DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BrnFormFieldControl } from '@spartan-ng/brain/form-field';
import { type VariantProps } from 'class-variance-authority';
import type { ClassValue } from 'clsx';
import * as i0 from "@angular/core";
export declare const inputVariants: (props?: {
    size?: "default" | "sm" | "lg";
    error?: boolean | "auto";
} & import("class-variance-authority/dist/types").ClassProp) => string;
type InputVariants = VariantProps<typeof inputVariants>;
export declare class HlmInputDirective implements BrnFormFieldControl, DoCheck {
    readonly size: import("@angular/core").InputSignal<"default" | "sm" | "lg">;
    readonly error: import("@angular/core").InputSignal<boolean | "auto">;
    protected readonly state: import("@angular/core").Signal<{
        error: import("@angular/core").WritableSignal<boolean | "auto">;
    }>;
    readonly userClass: import("@angular/core").InputSignal<ClassValue>;
    protected readonly _computedClass: import("@angular/core").Signal<string>;
    private readonly _injector;
    readonly ngControl: NgControl | null;
    private readonly _errorStateTracker;
    private readonly _defaultErrorStateMatcher;
    private readonly _parentForm;
    private readonly _parentFormGroup;
    readonly errorState: import("@angular/core").Signal<boolean>;
    constructor();
    ngDoCheck(): void;
    setError(error: InputVariants['error']): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmInputDirective, "[hlmInput]", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "error": { "alias": "error"; "required": false; "isSignal": true; }; "userClass": { "alias": "class"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
export {};
