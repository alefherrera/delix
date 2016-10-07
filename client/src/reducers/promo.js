import {
  GET_PROMOS,
  GET_PROMO,
  SET_PROMO,
  DELETE_PROMO,
  FILTER_PROMOS,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  all: [],
  list: [],
  current: null,
};

const filter = (f, all) =>
  all.filter(s => s.nombre.toLowerCase().indexOf(f.toLowerCase()) !== -1);

const calcularPrecio = promo => {
  const platos = promo.platosPorPromos.reduce((p, n) => p + n.plato.precio, 0);
  const productos = promo.productosPorPromos.reduce((p, n) => p + n.producto.precio, 0);
  const subTotal = platos + productos;
  const descuento = subTotal * promo.porcentajeDescuento / 100;
  return {
    subTotal,
    descuento,
    total: subTotal - descuento,
  };
};

export default handleActions({
  [GET_PROMOS]: (state, { payload }) => {
    const promos = payload.map(promo => ({ ...promo, precio: calcularPrecio(promo) }));
    return {
      ...state,
      all: promos,
      list: promos,
    };
  },
  [GET_PROMO]: (state, { payload }) =>
    ({ ...state, current: { ...payload, precio: calcularPrecio(payload) } }),
  [DELETE_PROMO]: (state, { payload }) => (
    {
      ...state,
      all: state.all.filter(x => x.id !== payload),
      list: state.list.filter(x => x.id !== payload),
    }
  ),
  [FILTER_PROMOS]: (state, { payload }) => (
    {
      ...state,
      list: filter(payload, state.all),
    }
  ),
  [SET_PROMO]: (state, { payload }) => (
    {
      ...state,
      selected: payload,
    }
  ),
}, initialState);
