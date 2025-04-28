import * as i0 from "@angular/core";
export type IconSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'none' | (Record<never, never> & string);
export declare class HlmIconDirective {
    private readonly _config;
    readonly size: import("@angular/core").InputSignal<IconSize>;
    protected readonly _computedSize: import("@angular/core").Signal<"none" | (Record<never, never> & string) | "12px" | "16px" | "24px" | "32px" | "48px">;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmIconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HlmIconDirective, "ng-icon[hlm]", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
