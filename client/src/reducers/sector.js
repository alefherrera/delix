import {
  GET_SECTORS,
  SET_TABLE,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  list: [],
};
export default handleActions({
  [GET_SECTORS]: (state, { payload }) =>
    ({ ...state, list: payload }),
  [SET_TABLE]: (state, { payload }) =>
    ({ ...state, selected: payload }),
}, initialState);
