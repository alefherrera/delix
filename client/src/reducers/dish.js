import {
  GET_DISHES,
  FILTER_DISHES,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  all: [],
  list: [],
};

const filter = (f, all) =>
  all.filter(s => s.descripcion.toLowerCase().indexOf(f.toLowerCase()) !== -1);

export default handleActions({
  [GET_DISHES]: (state, { payload }) => ({ ...state, all: payload, list: payload }),
  [FILTER_DISHES]: (state, { payload }) => (
    {
      ...state,
      list: filter(payload, state.all),
    }
  ),
}, initialState);
