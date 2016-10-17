import {
  GET_ORDER,
  GET_ORDERS,
  CHANGE_ORDER_STATE,
  CLOSE_ORDER,
  ADD_ORDERLINE,
  ADD_ORDERLINE_PROMO,
  ADD_ORDERLINE_PRODUCT,
  ADD_ORDERLINE_DISH,
  EDIT_ORDERLINE,
  SEND_ORDERLINES,
} from '../constants';

import { handleActions } from 'redux-actions';
import { groupBy, forEach } from 'lodash';

const initialState = {
  promos: [],
  products: [],
  dishes: [],
  current: null,
  list: [],
};

const groupById = array => {
  const grouped = groupBy(array, 'id');
  const ret = [];
  forEach(grouped, value => {
    ret.push({
      ...value[0],
      quantity: value.length,
    });
  });
  return ret;
};

const groupCommands = comandas => {
  const ret = {
    dishes: [],
    products: [],
    promos: [],
  };
  if (!comandas) return ret;
  comandas.forEach(comanda => {
    if (comanda.platos.length) ret.dishes.push(...comanda.platos);
    if (comanda.productos.length) ret.products.push(...comanda.productos);
    if (comanda.promos.length) ret.promos.push(...comanda.promos);
  });
  ret.dishes = groupById(ret.dishes);
  ret.products = groupById(ret.products);
  ret.promos = groupById(ret.promos);
  return ret;
};

const transformOrder = order => ({
  ...order,
  ...groupCommands(order.comandas),
});

export default handleActions({
  [GET_ORDER]: (state, action) => ({ ...state, current: transformOrder(action.payload) }),
  [GET_ORDERS]: (state, { payload }) => ({ ...state, list: payload }),
  [CHANGE_ORDER_STATE]: (state, action) => ({ ...state, current: action.payload }),
  [CLOSE_ORDER]: () => initialState,
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
  [SEND_ORDERLINES]: (state, action) =>
  (
    {
      ...initialState,
      current: transformOrder(action.payload),
    }
),
}, initialState);
