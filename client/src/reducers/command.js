import {
  GET_COMMANDS,
  ADD_COMMANDS,
  ADD_COMMAND,
  DELETE_COMMANDS,
  DELETE_COMMAND,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  list: null,
};

const formatOrder = order => {
  const comandas = order.comandas.map(comanda => {
    let text = '';
    if (comanda.platos.length) text = comanda.platos[0].nombre;
    if (comanda.productos.length) text = comanda.productos[0].descripcion;
    if (comanda.promos.length) text = comanda.promos[0].nombre;
    return {
      ...comanda,
      text,
    };
  });
  return {
    ...order,
    comandas,
  };
};

const formatList = list => list.map(formatOrder);

const addCommand = (order, command) => ({
  ...order,
  comandas: [...order.comandas, command],
});

const deleteCommand = (order, command) => ({
  ...order,
  comandas: order.comandas.filter(x => x.id !== command.id),
});

export default handleActions({
  [GET_COMMANDS]: (state, { payload }) => (
    {
      ...state,
      list: formatList(payload),
    }
  ),
  [ADD_COMMANDS]: (state, { payload }) => (
    {
      ...state,
      list: [...state.list.filter(x => x.id !== payload.id), formatOrder(payload)],
    }
  ),
  [ADD_COMMAND]: (state, { payload }) => (
    {
      ...state,
      list: state.list.map(x => (x.id === payload.pedidoId ? addCommand(x, payload) : x)),
    }
  ),
  [DELETE_COMMANDS]: (state, { payload }) => (
    {
      ...state,
      list: state.list.filter(x => x.id !== payload.id),
    }
  ),
  [DELETE_COMMAND]: (state, { payload }) => (
    {
      ...state,
      list: state.list.reduce((p, x) => {
        if (x.id === payload.pedidoId) {
          const newOrder = deleteCommand(x, payload);
          if (newOrder.comandas.length === 0) {
            return p;
          }
          return [...p, newOrder];
        }
        return [...p, x];
      }, []),
    }
  ),
}, initialState);
