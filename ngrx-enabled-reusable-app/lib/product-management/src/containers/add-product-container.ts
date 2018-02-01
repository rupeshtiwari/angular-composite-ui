import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Product } from '../models/product';
import { Observable } from 'rxjs/Observable';

import { Add, Load } from '../actions/product-actions';
import { getAllProducts, State } from '../reducers';

@Component({
  selector: 'pm-add-product-container',
  exportAs: 'pmcAddProduct',
  template: `
        <div>
        <pm-add-product (addProduct)="addProduct($event)"></pm-add-product>
        </div>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductContainerComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private store: Store<State>) {
    this.products$ = store.pipe(select(getAllProducts));
  }

  ngOnInit(): void {
    this.store.dispatch(new Load());
  }

  addProduct(name: string): void {
    this.store.dispatch(
      new Add({
        id: Math.random()
          .toString()
          .substr(4),
        name: name,
      })
    );
  }
}
