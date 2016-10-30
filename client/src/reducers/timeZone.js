import {
  ADD_TIMEZONE,
  GET_TIMEZONES,
  GET_TIMEZONE,
  DELETE_TIMEZONE,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  current: null,
  list: [],
};

const convertDate = timeZone => ({
  ...timeZone,
  horaInicio: new Date(timeZone.horaInicio),
  horaFin: new Date(timeZone.horaFin),
});

export default handleActions({
  [GET_TIMEZONES]: (state, { payload }) =>
    ({
      ...state,
      list: payload.map(convertDate),
    }),
  [GET_TIMEZONE]: (state, { payload }) =>
    ({
      ...state,
      current: convertDate(payload),
    }),
  [ADD_TIMEZONE]: (state, { payload }) =>
  ({
    ...state,
    list: [...state.list, payload],
  }),
  [DELETE_TIMEZONE]: (state, { payload }) =>
    ({
      ...state,
      list: state.list.filter(x => x.id !== payload),
    }),
}, initialState);
