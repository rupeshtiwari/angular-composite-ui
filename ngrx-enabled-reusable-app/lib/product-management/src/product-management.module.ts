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
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product';
import { CoreModule } from './core/core.module';

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
    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([ProductEffects]),
    CoreModule.forFeature()
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
