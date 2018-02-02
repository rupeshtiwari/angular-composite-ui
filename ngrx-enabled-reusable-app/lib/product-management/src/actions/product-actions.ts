import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export enum ProductActionTypes {
  ADD = '[Products] Add',
  ADD_SUCCESS = '[Products] Success',
  ADD_FAIL = '[Products] Fail',
  LOAD = '[Products] Load',
}

export class Add implements Action {
  readonly type = ProductActionTypes.ADD;
  constructor(public payload: Product) { }
}

export class AddSuccess implements Action {
  readonly type = ProductActionTypes.ADD_SUCCESS;
  constructor(public payload: Product) { }
}

export class AddError implements Action {
  readonly type = ProductActionTypes.ADD_FAIL;
  constructor(public payload: string) { }
}

export class Load implements Action {
  readonly type = ProductActionTypes.LOAD;
  constructor() { }
}

export type ProductActions = Add
  | Load
  | AddError
  | AddSuccess;

