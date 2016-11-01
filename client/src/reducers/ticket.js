import {
  GET_TICKETS,
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
}, initialState);
