import {
  GET_PROMOS,
  SET_PROMO,
  FILTER_PROMOS,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  selected: null,
  all: [],
  list: [],
};

const filter = (f, all) =>
  all.filter(s => s.nombre.toLowerCase().indexOf(f.toLowerCase()) !== -1);

export default handleActions({
  [GET_PROMOS]: (state, { payload }) => ({ ...state, all: payload, list: payload }),
  [FILTER_PROMOS]: (state, { payload }) => (
    {
      ...state,
      list: filter(payload, state.all),
    }
  ),
  [SET_PROMO]: (state, { payload }) => (
    {
      ...state,
      selected: payload,
    }
  ),
}, initialState);
