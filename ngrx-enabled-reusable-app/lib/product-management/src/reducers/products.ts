import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ProductActions, ProductActionTypes } from '../actions/product-actions';
import { Product } from '../models/product';

export interface State extends EntityState<Product> {
  selectedProductId: string | null;
}

/**
 * createEntityAdapter creates many an object of helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
  sortComparer: false,
});

/** getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
  selectedProductId: null,
});

export function reducer(state = initialState, action: ProductActions): State {
  switch (action.type) {
    case ProductActionTypes.ADD_SUCCESS: {
      return {
        ...adapter.addOne(action.payload, state),
        selectedProductId: state.selectedProductId,
      };
    }
    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedProductId;
