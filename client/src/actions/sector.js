import {
  GET_SECTORS,
} from '../constants';
import { createAction } from 'redux-actions';
import { sector } from '../util/api';

export const getSectors = createAction(GET_SECTORS, sector.getAll);
