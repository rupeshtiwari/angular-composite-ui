import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export enum ProductActionTypes {
  ADD = '[Products] Add',
  LOAD = '[Products] Load',
}

export class Add implements Action {
  readonly type = ProductActionTypes.ADD;
  constructor(public payload: Product) {}
}

export class Load implements Action {
  readonly type = ProductActionTypes.LOAD;
  constructor() {}
}

export type ProductActions = Add | Load;
