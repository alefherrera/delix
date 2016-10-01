import {
  CREATE_ORDER,
  CHANGE_ORDER_STATE,
  CLOSE_ORDER,
  ADD_ORDERLINE,
  ADD_ORDERLINE_PROMO,
  ADD_ORDERLINE_PRODUCT,
  ADD_ORDERLINE_DISH,
  EDIT_ORDERLINE,
  POST_ORDERLINES,
} from '../constants';
import { createAction } from 'redux-actions';
import { order } from '../util/api';
export const createOrder = createAction(CREATE_ORDER, order.create, () => pedido => pedido.id);
export const changeOrderState = createAction(CHANGE_ORDER_STATE);
export const closeOrder = createAction(CLOSE_ORDER);
export const addOrderLine = createAction(ADD_ORDERLINE);
export const editOrderLine = createAction(EDIT_ORDERLINE);
export const postOrderLines = createAction(POST_ORDERLINES);
export const addOrderLinePromo = createAction(ADD_ORDERLINE_PROMO);
export const addOrderLineProduct = createAction(ADD_ORDERLINE_PRODUCT);
export const addOrderLineDish = createAction(ADD_ORDERLINE_DISH);
