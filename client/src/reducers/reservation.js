import {
  GET_RESERVATIONS,
  GET_RESERVATION,
  GET_RESERVATION_TABLES,
  DELETE_RESERVATION,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  current: null,
  list: [],
  tables: [],
};
export default handleActions({
  [GET_RESERVATIONS]: (state, { payload }) =>
    ({
      ...state,
      list: payload,
    }),
  [GET_RESERVATION]: (state, { payload }) =>
    ({
      ...state,
      current: payload,
    }),
  [GET_RESERVATION_TABLES]: (state, { payload }) =>
  ({
    ...state,
    tables: payload,
  }),
  [DELETE_RESERVATION]: (state, { payload }) =>
    ({
      ...state,
      list: state.list.filter(x => x.id !== payload),
    }),
}, initialState);
