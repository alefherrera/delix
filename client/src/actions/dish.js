import {
  GET_DISHES,
  ADD_DISH,
  EDIT_DISH,
  DELETE_DISH,
} from '../constants';
import { createAction } from 'redux-actions';

export const getDishes = createAction(GET_DISHES);
export const addDish = createAction(ADD_DISH);
export const editDish = createAction(EDIT_DISH);
export const deleteDish = createAction(DELETE_DISH);
