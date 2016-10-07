import {
  GET_TABLES,
} from '../constants';
import { createAction } from 'redux-actions';
import { table } from '../util/api';

export const getTables = createAction(GET_TABLES, table.getAll);
