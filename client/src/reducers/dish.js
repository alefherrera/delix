import {
  GET_DISHES,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  list: [],
};
export default handleActions({
  [GET_DISHES]: (state, { payload }) => ({ ...state, list: payload }),
}, initialState);
