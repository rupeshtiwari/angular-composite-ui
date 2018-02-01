import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProductManagementModule } from './src/product-management.module';

platformBrowserDynamic()
  .bootstrapModule(ProductManagementModule)
  .catch(err => console.log(err));
