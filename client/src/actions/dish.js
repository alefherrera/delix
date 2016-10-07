import {
  GET_DISHES,
  GET_DISH,
  FILTER_DISHES,
  SET_DISH,
  ADD_DISH,
  EDIT_DISH,
  DELETE_DISH,
} from '../constants';
import { createAction } from 'redux-actions';
import { dish } from '../util/api';

export const getDishes = createAction(GET_DISHES, dish.getAll);
export const getDish = createAction(GET_DISH, dish.get);
export const filterDishes = createAction(FILTER_DISHES);
export const setDish = createAction(SET_DISH, null,
  () => p => p.id);
export const addDish = createAction(ADD_DISH, dish.create, () => () => '/plato');
export const editDish = createAction(EDIT_DISH, dish.create, () => () => '/plato');
export const deleteDish = createAction(DELETE_DISH, dish.delete);
