import {
  TAKE_TABLE,
  FREE_TABLE,
  GET_TABLE,
} from '../constants';
import { createAction } from 'redux-actions';
import { table } from '../util/api';

export const takeTable = createAction(TAKE_TABLE, id => {
  const mesa = {
    id: parseInt(id, 10),
    grupoDeMesasEstadoId: 2,
  };
  return table.update(mesa);
});

export const freeTable = createAction(FREE_TABLE, id => {
  const mesa = {
    id: parseInt(id, 10),
    grupoDeMesasEstadoId: 1,
  };
  return table.update(mesa);
});

export const getTable = createAction(GET_TABLE, table.get, () => t => {
  if (t.pedidos.length > 0) {
    return `/sector/${t.id}/${t.pedidos[0].id}`;
  }
  return null;
});
