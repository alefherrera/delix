import {
  ADD_RESERVATION,
  GET_RESERVATIONS,
  GET_RESERVATION,
  DELETE_RESERVATION,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  current: null,
  list: [],
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
  [ADD_RESERVATION]: (state, { payload }) =>
  ({
    ...state,
    list: [...state.list, payload],
  }),
  [DELETE_RESERVATION]: (state, { payload }) =>
    ({
      ...state,
      list: state.list.filter(x => x.id !== payload),
    }),
}, initialState);
