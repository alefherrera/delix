import { LOGIN } from '../constants';
import { handleActions } from 'redux-actions';
const initialState = {};
export default handleActions({
  [LOGIN]: (state, action) => ({ ...state, val: action.payload }),
}, initialState);
