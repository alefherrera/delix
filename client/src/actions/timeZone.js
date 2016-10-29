import {
  GET_TIMEZONES,
  GET_TIMEZONE,
  ADD_TIMEZONE,
  EDIT_TIMEZONE,
  DELETE_TIMEZONE,
} from '../constants';
import { createAction } from 'redux-actions';
import { timeZone } from '../util/api';

export const getTimeZones = createAction(GET_TIMEZONES, timeZone.getAll);
export const getTimeZone = createAction(GET_TIMEZONE, timeZone.get);
export const addTimeZone = createAction(ADD_TIMEZONE, timeZone.create, () => () => '/franja');
export const editTimeZone = createAction(EDIT_TIMEZONE, timeZone.create, () => () => '/franja');
export const deleteTimeZone = createAction(DELETE_TIMEZONE, timeZone.delete);
