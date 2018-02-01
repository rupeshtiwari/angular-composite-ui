import { InjectionToken } from '@angular/core';

export class ProductManagementConfig {
  constructor(public baseUrl: string) {}
}

export const PRODUCT_MANAGEMENT_CONFIG = new InjectionToken<
  ProductManagementConfig
>('@aicpa-projectmanagement/releasemanagement Config');

export const INITIAL_OPTIONS = new InjectionToken<ProductManagementConfig>(
  '@aicpa-projectmanagement/releasemanagement Initial Options'
);

export function createConfig(
  _config: ProductManagementConfig
): ProductManagementConfig {
  const DEFAULT_SETTINGS: ProductManagementConfig = {
    baseUrl: '',
  };
  const initialSettings = _config;
  const config = Object.assign({}, DEFAULT_SETTINGS, initialSettings);
  if (config.baseUrl == null) {
    throw new Error(
      `Product Management base url is required, got ${config.baseUrl}`
    );
  }
  return config;
}

export type ProductManagementSettings =
  | Partial<ProductManagementConfig>
  | (() => Partial<ProductManagementConfig>);
