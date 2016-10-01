import {
  GET_PROMOS,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  list: [],
};
export default handleActions({
  [GET_PROMOS]: (state, { payload }) => ({ ...state, list: payload }),
}, initialState);
