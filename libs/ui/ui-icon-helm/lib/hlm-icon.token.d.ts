import { ValueProvider } from '@angular/core';
import type { IconSize } from './hlm-icon.directive';
export interface HlmIconConfig {
    size: IconSize;
}
export declare function provideHlmIconConfig(config: Partial<HlmIconConfig>): ValueProvider;
export declare function injectHlmIconConfig(): HlmIconConfig;
