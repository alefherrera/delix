import {
  GET_TABLES,
  SET_TABLE,
} from '../constants';
import { createAction } from 'redux-actions';
import { table } from '../util/api';

export const getTables = createAction(GET_TABLES, table.getAll,
  () => pedido => pedido.id);
export const setTable = createAction(SET_TABLE);
