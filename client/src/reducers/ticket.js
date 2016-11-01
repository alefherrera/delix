import {
  GET_TICKETS,
  GET_TICKET,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  current: null,
  list: [],
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
}, initialState);
