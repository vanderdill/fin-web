import type { ComponentType } from '@angular/cdk/portal';
import { type TemplateRef } from '@angular/core';
import { type BrnDialogOptions } from '@spartan-ng/brain/dialog';
import * as i0 from "@angular/core";
export type HlmDialogOptions<DialogContext = unknown> = BrnDialogOptions & {
    contentClass?: string;
    context?: DialogContext;
};
export declare class HlmDialogService {
    private readonly _brnDialogService;
    open(component: ComponentType<unknown> | TemplateRef<unknown>, options?: Partial<HlmDialogOptions>): import("@spartan-ng/brain/dialog").BrnDialogRef<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HlmDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HlmDialogService>;
}
