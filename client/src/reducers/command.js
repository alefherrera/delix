import {
  GET_COMMANDS,
  ADD_COMMAND,
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

export default handleActions({
  [GET_COMMANDS]: (state, { payload }) => (
    {
      ...state,
      list: formatList(payload),
    }
  ),
  [ADD_COMMAND]: (state, { payload }) => (
    {
      ...state,
      list: [...state.list.filter(x => x.id !== payload.id), formatOrder(payload)],
    }
  ),
  [DELETE_COMMAND]: (state, { payload }) => (
    {
      ...state,
      list: state.list.filter(x => x.id !== payload.id),
    }
  ),
}, initialState);
