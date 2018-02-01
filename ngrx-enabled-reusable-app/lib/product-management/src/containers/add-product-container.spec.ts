import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import { Load } from '../actions/product-actions';
import * as fromProducts from '../reducers';
import { AddProductComponent } from './../components/add-product';
import { AddProductContainerComponent } from './add-product-container';

describe('Add Product Page', () => {
  let fixture: ComponentFixture<AddProductContainerComponent>;
  let store: Store<fromProducts.State>;
  let instance: AddProductContainerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        StoreModule.forRoot({
          books: combineReducers(fromProducts.reducers),
        }),
        RouterTestingModule,
      ],
      declarations: [AddProductContainerComponent, AddProductComponent],
    });

    fixture = TestBed.createComponent(AddProductContainerComponent);
    instance = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should compile', () => {
    fixture.detectChanges();

    // expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a productActions.Load on init', () => {
    const action = new Load();

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
