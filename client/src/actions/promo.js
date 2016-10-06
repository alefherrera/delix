import {
  GET_PROMOS,
  GET_PROMO,
  FILTER_PROMOS,
  SET_PROMO,
  ADD_PROMO,
  EDIT_PROMO,
  DELETE_PROMO,
} from '../constants';
import { createAction } from 'redux-actions';
import { promo } from '../util/api';

export const getPromos = createAction(GET_PROMOS, promo.getAll);
export const getPromo = createAction(GET_PROMO, promo.get);
export const filterPromos = createAction(FILTER_PROMOS);
export const setPromo = createAction(SET_PROMO, null,
  () => p => p.id);
export const addPromo = createAction(ADD_PROMO, promo.create, () => () => '/promo');
export const editPromo = createAction(EDIT_PROMO, promo.create, () => () => '/promo');
export const deletePromo = createAction(DELETE_PROMO);
