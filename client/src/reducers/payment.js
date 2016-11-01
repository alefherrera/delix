import {
  GET_PAYMENTS,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  list: [],
};
export default handleActions({
  [GET_PAYMENTS]: (state, { payload }) =>
  ({
    ...state,
    list: payload,
  }),
}, initialState);
