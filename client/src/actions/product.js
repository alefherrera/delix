import {
  GET_PRODUCTS,
  GET_PRODUCT,
  FILTER_PRODUCTS,
  SET_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from '../constants';
import { createAction } from 'redux-actions';
import { product } from '../util/api';
import { push } from 'react-router-redux';

export const getProducts = createAction(GET_PRODUCTS, product.getAll);
export const getProduct = createAction(GET_PRODUCT, product.get);
export const setProduct = createAction(SET_PRODUCT, null,
  () => p => p.id);
export const filterProducts = createAction(FILTER_PRODUCTS);
export const addProduct = createAction(ADD_PRODUCT, product.create, () => () => '/producto');
export const editProduct = id => push(`${location.pathname}/edit/${id}`);
export const deleteProduct = createAction(DELETE_PRODUCT, product.delete);
