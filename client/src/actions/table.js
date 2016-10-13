import {
  GET_TABLES,
  GET_SECTORS,
} from '../constants';
import { createAction } from 'redux-actions';
import { table, sector } from '../util/api';

export const getSectors = createAction(GET_SECTORS, sector.getAll);
export const getTables = createAction(GET_TABLES, table.getAll);
