import {
  CREATE_ORDER,
  GET_ORDER,
  GET_ORDERS,
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
export const getOrder = createAction(GET_ORDER, order.create);
export const getOrders = createAction(GET_ORDERS, order.getAll);
export const changeOrderState = createAction(CHANGE_ORDER_STATE);
export const closeOrder = createAction(CLOSE_ORDER,
  ({
    promos, products, dishes, current,
  }) => {
    const comandas = {
      pedidoId: current.id,
      promos: promos.map(promo => ({ id: promo.selected.id, cant: promo.quantity })),
      productos: products.map(product => ({ id: product.selected.id, cant: product.quantity })),
      platos: dishes.map(dish => ({ id: dish.selected.id, cant: dish.quantity })),
    };
    return order.add(comandas);
  });
export const addOrderLine = createAction(ADD_ORDERLINE);
export const editOrderLine = createAction(EDIT_ORDERLINE);
export const postOrderLines = createAction(POST_ORDERLINES);
export const addOrderLinePromo = createAction(ADD_ORDERLINE_PROMO, null,
  (obj, { mesaId, pedidoId }) => () => `/sector/${mesaId}/${pedidoId}`);
export const addOrderLineProduct = createAction(ADD_ORDERLINE_PRODUCT, null,
  (obj, { mesaId, pedidoId }) => () => `/sector/${mesaId}/${pedidoId}`);
export const addOrderLineDish = createAction(ADD_ORDERLINE_DISH, null,
  (obj, { mesaId, pedidoId }) => () => `/sector/${mesaId}/${pedidoId}`);
