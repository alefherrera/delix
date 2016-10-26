import {
  GET_ORDER,
  GET_ORDERS,
  CHANGE_ORDER_STATE,
  CLOSE_ORDER,
  ADD_ORDERLINE,
  ADD_ORDERLINE_PROMO,
  DELETE_ORDERLINE_PROMO,
  CHANGE_STATUS_ORDERLINE_PROMO,
  ADD_ORDERLINE_PRODUCT,
  DELETE_ORDERLINE_PRODUCT,
  CHANGE_STATUS_ORDERLINE_PRODUCT,
  ADD_ORDERLINE_DISH,
  DELETE_ORDERLINE_DISH,
  CHANGE_STATUS_ORDERLINE_DISH,
  EDIT_ORDERLINE,
  SEND_ORDERLINES,
} from '../constants';

import { handleActions } from 'redux-actions';
import { groupBy, forEach } from 'lodash';

const initialState = {
  current: null,
  list: [],
};

const groupById = array => {
  const grouped = groupBy(array, 'id');
  const ret = [];
  forEach(grouped, value => {
    ret.push({
      ...value[0],
      estado: value[0].estado,
      pedidoId: value[0].pedidoId,
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
    const extend = {
      estado: comanda.comandaEstadoId,
      pedidoId: comanda.pedidoId,
    };

    if (comanda.platos && comanda.platos.length) {
      ret.dishes.push({
        ...comanda.platos[0],
        ...extend,
      });
    }
    if (comanda.productos && comanda.productos.length) {
      ret.products.push({
        ...comanda.productos[0],
        ...extend,
      });
    }
    if (comanda.promos && comanda.promos.length) {
      ret.promos.push({
        ...comanda.promos[0],
        ...extend,
      });
    }
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

const removeCondition = payload => x => x.id !== payload.id || x.estado !== payload.estado;

export default handleActions({
  [GET_ORDER]: (state, action) => ({ ...state, current: transformOrder(action.payload) }),
  [GET_ORDERS]: (state, { payload }) => ({ ...state, list: payload }),
  [CHANGE_ORDER_STATE]: (state, action) => ({ ...state, current: action.payload }),
  [CLOSE_ORDER]: () => initialState,
  [ADD_ORDERLINE]: (state, action) => ({ ...state, current: action.payload }),
  [ADD_ORDERLINE_PROMO]: (state, { payload }) => ({
    ...state,
    current: {
      ...state.current,
      promos: [
        ...state.current.promos,
        payload,
      ],
    },
  }),
  [DELETE_ORDERLINE_PROMO]: (state, { payload }) => ({
    ...state,
    current: {
      ...state.current,
      promos: state.current.promos.filter(removeCondition(payload)),
    },
  }),
  [CHANGE_STATUS_ORDERLINE_PROMO]: (state, { payload }) => {
    const command = groupCommands(payload).promos[0];
    return {
      ...state,
      current: {
        ...state.current,
        promos: state.current.promos.map(promo =>
          (promo.id === command.id ? { ...promo, estado: command.estado } : promo)),
      },
    };
  },
  [ADD_ORDERLINE_PRODUCT]: (state, { payload }) => ({
    ...state,
    current: {
      ...state.current,
      products: [
        ...state.current.products,
        payload,
      ],
    },
  }),
  [DELETE_ORDERLINE_PRODUCT]: (state, { payload }) => ({
    ...state,
    current: {
      ...state.current,
      products: state.current.products.filter(removeCondition(payload)),
    },
  }),
  [CHANGE_STATUS_ORDERLINE_PRODUCT]: (state, { payload }) => {
    const command = groupCommands(payload).products[0];
    return {
      ...state,
      current: {
        ...state.current,
        products: state.current.products.map(product =>
          (product.id === command.id ? { ...product, estado: command.estado } : product)),
      },
    };
  },
  [ADD_ORDERLINE_DISH]: (state, { payload }) => ({
    ...state,
    current: {
      ...state.current,
      dishes: [
        ...state.current.dishes,
        payload,
      ],
    },
  }),
  [DELETE_ORDERLINE_DISH]: (state, { payload }) => ({
    ...state,
    current: {
      ...state.current,
      dishes: state.current.dishes.filter(removeCondition(payload)),
    },
  }),
  [CHANGE_STATUS_ORDERLINE_DISH]: (state, { payload }) => {
    const command = groupCommands(payload).dishes[0];
    return {
      ...state,
      current: {
        ...state.current,
        dishes: state.current.dishes.map(dish =>
          (dish.id === command.id ? { ...dish, estado: command.estado } : dish)),
      },
    };
  },
  [EDIT_ORDERLINE]: (state, action) => ({ ...state, current: action.payload }),
  [SEND_ORDERLINES]: (state, action) =>
  (
    {
      ...initialState,
      current: transformOrder(action.payload),
    }
),
}, initialState);
