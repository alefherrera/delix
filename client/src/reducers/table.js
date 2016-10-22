import {
  GET_TABLE,
  TAKE_TABLE,
  FREE_TABLE,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  current: null,
};
export default handleActions({
  [GET_TABLE]: (state, { payload }) =>
    ({ ...state, current: payload }),
  [TAKE_TABLE]: (state, { payload }) =>
    ({ ...state, current: payload }),
  [FREE_TABLE]: (state, { payload }) =>
    ({ ...state, current: payload }),
}, initialState);
