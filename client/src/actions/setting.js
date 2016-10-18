import {
  SET_HOSTNAME,
} from '../constants';
import { createAction } from 'redux-actions';
import { setHost } from '../util/api';

export const setHostName = createAction(SET_HOSTNAME, setHost);
