import {
  GET_PROMOS,
  FILTER_PROMOS,
  SET_PROMO,
  ADD_PROMO,
  EDIT_PROMO,
  DELETE_PROMO,
} from '../constants';
import { createAction } from 'redux-actions';
import { promo } from '../util/api';

export const getPromos = createAction(GET_PROMOS, promo.getAll);
export const filterPromos = createAction(FILTER_PROMOS);
export const setPromo = createAction(SET_PROMO);
export const addPromo = createAction(ADD_PROMO);
export const editPromo = createAction(EDIT_PROMO);
export const deletePromo = createAction(DELETE_PROMO);
