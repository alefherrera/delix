import {
  GET_DISHES,
  GET_DISH,
  SET_DISH,
  FILTER_DISHES,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  all: [],
  list: [],
  current: null,
};

const filter = (f, all) =>
  all.filter(s => s.descripcion.toLowerCase().indexOf(f.toLowerCase()) !== -1);

export default handleActions({
  [GET_DISHES]: (state, { payload }) => ({ ...state, all: payload, list: payload }),
  [GET_DISH]: (state, { payload }) => ({ ...state, current: payload }),
  [FILTER_DISHES]: (state, { payload }) => (
    {
      ...state,
      list: filter(payload, state.all),
    }
  ),
  [SET_DISH]: (state, { payload }) => (
    {
      ...state,
      selected: payload,
    }
  ),
}, initialState);
