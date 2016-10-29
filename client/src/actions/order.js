import {
  CREATE_ORDER,
  GET_ORDER,
  GET_ORDERS,
  CHANGE_ORDER_STATE,
  SEND_ORDERLINES,
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
  POST_ORDERLINES,
} from '../constants';
import { createAction } from 'redux-actions';
import { order } from '../util/api';

export const createOrder = createAction(CREATE_ORDER, order.create, () => pedido => pedido.id);
export const getOrder = createAction(GET_ORDER, order.get);
export const getOrders = createAction(GET_ORDERS, order.getAll);
export const changeOrderState = createAction(CHANGE_ORDER_STATE);
export const sendOrderLines = createAction(SEND_ORDERLINES,
  current => {
    const comandas = {
      pedidoId: current.id,
      promos: current.promos.filter(x => !x.estado)
      .map(promo => ({ id: promo.id, cant: promo.quantity })),
      productos: current.products.filter(x => !x.estado)
      .map(product => ({ id: product.id, cant: product.quantity })),
      platos: current.dishes.filter(x => !x.estado)
      .map(dish => ({ id: dish.id, cant: dish.quantity })),
    };
    return order.add(comandas);
    // sacar esto cuando agregar comandas devuelva algo bien
    // .then(() => order.create(current));
  });
export const closeOrder = createAction(CLOSE_ORDER,
  id => {
    const obj = {
      pedidoEstadoId: 2,
    };
    return order.update(id, obj);
  },
  () => () => 'detalle'
);
export const addOrderLine = createAction(ADD_ORDERLINE);
export const editOrderLine = createAction(EDIT_ORDERLINE);
export const postOrderLines = createAction(POST_ORDERLINES);
export const addOrderLinePromo = createAction(ADD_ORDERLINE_PROMO, null,
  (obj, { mesaId, pedidoId }) => () => `/sector/${mesaId}/${pedidoId}`);
export const deleteOrderLinePromo = createAction(DELETE_ORDERLINE_PROMO, promo => {
  if (promo.estado === 1) return order.delete.promo(promo);
  return promo;
});
export const changeStatusOrderLinePromo =
  createAction(CHANGE_STATUS_ORDERLINE_PROMO, order.status.promo);
export const addOrderLineProduct = createAction(ADD_ORDERLINE_PRODUCT, null,
  (obj, { mesaId, pedidoId }) => () => `/sector/${mesaId}/${pedidoId}`);
export const deleteOrderLineProduct = createAction(DELETE_ORDERLINE_PRODUCT, product => {
  if (product.estado === 1) return order.delete.product(product);
  return product;
});
export const changeStatusOrderLineProduct =
  createAction(CHANGE_STATUS_ORDERLINE_PRODUCT, order.status.product);
export const addOrderLineDish = createAction(ADD_ORDERLINE_DISH, null,
  (obj, { mesaId, pedidoId }) => () => `/sector/${mesaId}/${pedidoId}`);
export const deleteOrderLineDish = createAction(DELETE_ORDERLINE_DISH, dish => {
  if (dish.estado === 1) return order.delete.dish(dish);
  return dish;
});
export const changeStatusOrderLineDish =
  createAction(CHANGE_STATUS_ORDERLINE_DISH, order.status.dish);
