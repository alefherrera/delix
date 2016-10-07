import {
  GET_TABLES,
  SET_TABLE,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  list: [],
};
export default handleActions({
  [GET_TABLES]: (state, { payload }) =>
    ({ ...state, list: payload }),
  [SET_TABLE]: (state, { payload }) =>
    ({ ...state, selected: payload }),
}, initialState);
