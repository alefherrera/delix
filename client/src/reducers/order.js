import {
  CREATE_ORDER,
  CHANGE_ORDER_STATE,
  CLOSE_ORDER,
  ADD_ORDERLINE,
  ADD_ORDERLINE_PRODUCT,
  EDIT_ORDERLINE,
  POST_ORDERLINES,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  promos: [],
  productos: [],
  platos: [],
};
export default handleActions({
  [CREATE_ORDER]: (state, action) => ({ ...state, val: action.payload }),
  [CHANGE_ORDER_STATE]: (state, action) => ({ ...state, val: action.payload }),
  [CLOSE_ORDER]: (state, action) => ({ ...state, val: action.payload }),
  [ADD_ORDERLINE]: (state, action) => ({ ...state, val: action.payload }),
  [ADD_ORDERLINE_PRODUCT]: (state, { payload }) => ({
    ...state,
    productos: [
      ...state.productos,
      payload,
    ],
  }),
  [EDIT_ORDERLINE]: (state, action) => ({ ...state, val: action.payload }),
  [POST_ORDERLINES]: (state, action) => ({ ...state, val: action.payload }),
}, initialState);
