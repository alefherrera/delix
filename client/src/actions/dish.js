import {
  GET_DISHES,
  SET_DISH,
  ADD_DISH,
  EDIT_DISH,
  DELETE_DISH,
} from '../constants';
import { createAction } from 'redux-actions';
import { dish } from '../util/api';

export const getDishes = createAction(GET_DISHES, dish.getAll);
export const setDish = createAction(SET_DISH);
export const addDish = createAction(ADD_DISH);
export const editDish = createAction(EDIT_DISH);
export const deleteDish = createAction(DELETE_DISH);
