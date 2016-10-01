import {
  GET_PRODUCTS,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  list: [],
};
export default handleActions({
  [GET_PRODUCTS]: (state, { payload }) => ({ ...state, list: payload }),
}, initialState);
