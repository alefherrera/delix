import {
  GET_PROMOS,
  ADD_PROMO,
  EDIT_PROMO,
  DELETE_PROMO,
} from '../constants';
import { createAction } from 'redux-actions';

export const getPromos = createAction(GET_PROMOS);
export const addPromo = createAction(ADD_PROMO);
export const editPromo = createAction(EDIT_PROMO);
export const deletePromo = createAction(DELETE_PROMO);
