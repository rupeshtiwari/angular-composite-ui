import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import {
  createConfig,
  INITIAL_OPTIONS,
  PRODUCT_MANAGEMENT_CONFIG,
  ProductManagementSettings,
} from './config';
import { AddProductContainerComponent } from './containers/add-product-container';
import { reducers } from './reducers';
import { AddProductComponent } from './components/add-product';

export const COMPONENTS = [AddProductContainerComponent, AddProductComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      { path: '', component: AddProductContainerComponent },
    ]),
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('products', reducers),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ProductManagementModule {
  public static forFeature(
    settings: ProductManagementSettings = {}
  ): ModuleWithProviders {
    return {
      ngModule: ProductManagementModule,
      providers: [
        {
          provide: INITIAL_OPTIONS,
          useValue: settings,
        },
        {
          provide: PRODUCT_MANAGEMENT_CONFIG,
          deps: [INITIAL_OPTIONS],
          useFactory: createConfig,
        },
      ],
    };
  }
}
