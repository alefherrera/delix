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

import { handleActions } from 'redux-actions';
const initialState = {
  promos: [],
  products: [],
  dishes: [],
  current: null,
};
export default handleActions({
  [CREATE_ORDER]: (state, action) => ({ ...state, current: action.payload }),
  [CHANGE_ORDER_STATE]: (state, action) => ({ ...state, current: action.payload }),
  [CLOSE_ORDER]: (state) => ({ ...state, current: null }),
  [ADD_ORDERLINE]: (state, action) => ({ ...state, current: action.payload }),
  [ADD_ORDERLINE_PROMO]: (state, { payload }) => ({
    ...state,
    promos: [
      ...state.promos,
      payload,
    ],
  }),
  [ADD_ORDERLINE_PRODUCT]: (state, { payload }) => ({
    ...state,
    products: [
      ...state.products,
      payload,
    ],
  }),
  [ADD_ORDERLINE_DISH]: (state, { payload }) => ({
    ...state,
    dishes: [
      ...state.dishes,
      payload,
    ],
  }),
  [EDIT_ORDERLINE]: (state, action) => ({ ...state, current: action.payload }),
  [POST_ORDERLINES]: (state, action) => ({ ...state, current: action.payload }),
}, initialState);
