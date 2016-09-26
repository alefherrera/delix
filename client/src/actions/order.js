import {
  CREATE_ORDER,
  CHANGE_ORDER_STATE,
  CLOSE_ORDER,
  ADD_ORDERLINE,
  EDIT_ORDERLINE,
  POST_ORDERLINES,
} from '../constants';
import { createAction } from 'redux-actions';

export const createOrder = createAction(CREATE_ORDER);
export const changeOrderState = createAction(CHANGE_ORDER_STATE);
export const closeOrder = createAction(CLOSE_ORDER);
export const addOrderLine = createAction(ADD_ORDERLINE);
export const editOrderLine = createAction(EDIT_ORDERLINE);
export const postOrderLines = createAction(POST_ORDERLINES);
