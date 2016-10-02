import {
  GET_PRODUCTS,
  SET_PRODUCT,
  FILTER_PRODUCTS,
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
  [GET_PRODUCTS]: (state, { payload }) => ({ ...state, all: payload, list: payload }),
  [FILTER_PRODUCTS]: (state, { payload }) => (
    {
      ...state,
      list: filter(payload, state.all),
    }
  ),
  [SET_PRODUCT]: (state, { payload }) => (
    {
      ...state,
      selected: payload,
    }
  ),
}, initialState);