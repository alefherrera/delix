import {
  GET_PRODUCTS,
  FILTER_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from '../constants';
import { createAction } from 'redux-actions';
import { product } from '../util/api';

export const getProducts = createAction(GET_PRODUCTS, product.getAll);
export const filterProducts = createAction(FILTER_PRODUCTS);
export const addProduct = createAction(ADD_PRODUCT);
export const editProduct = createAction(EDIT_PRODUCT);
export const deleteProduct = createAction(DELETE_PRODUCT);
