import {
  GET_TICKETS,
  GET_TICKET,
  GET_PAYMENT_TYPES,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  current: null,
  list: [],
  types: [],
};
export default handleActions({
  [GET_TICKETS]: (state, { payload }) =>
  ({
    ...state,
    list: payload,
  }),
  [GET_TICKET]: (state, { payload }) =>
  ({
    ...state,
    current: payload,
  }),
  [GET_PAYMENT_TYPES]: (state, { payload }) =>
  ({
    ...state,
    types: payload,
  }),
}, initialState);
