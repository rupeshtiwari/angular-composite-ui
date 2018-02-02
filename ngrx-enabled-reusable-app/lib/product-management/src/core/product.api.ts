import { Injectable, Inject } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PRODUCT_MANAGEMENT_CONFIG, ProductManagementConfig } from '../config';

@Injectable()
export class ProductApi {
  constructor(@Inject(PRODUCT_MANAGEMENT_CONFIG) private config: ProductManagementConfig) {
  }
  createProduct(product: Product): Observable<any> {
    // make actual server side call using baseurl provided from config
    return of('done');
  }
}
