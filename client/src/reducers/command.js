import {
  GET_COMMANDS,
  ADD_COMMAND,
  DELETE_COMMAND,
} from '../constants';

import { handleActions } from 'redux-actions';
const initialState = {
  list: null,
};

export default handleActions({
  [GET_COMMANDS]: (state, { payload }) => (
    {
      ...state,
      list: payload,
    }
  ),
  [ADD_COMMAND]: (state, { payload }) => (
    {
      ...state,
      list: [...state.list, payload],
    }
  ),
  [DELETE_COMMAND]: (state, { payload }) => (
    {
      ...state,
      list: state.list.filter(x => x.id !== payload),
    }
  ),
}, initialState);
