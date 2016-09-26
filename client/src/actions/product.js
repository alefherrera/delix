import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from '../constants';
import { createAction } from 'redux-actions';

export const getProducts = createAction(GET_PRODUCTS);
export const addProduct = createAction(ADD_PRODUCT);
export const editProduct = createAction(EDIT_PRODUCT);
export const deleteProduct = createAction(DELETE_PRODUCT);
