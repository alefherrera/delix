import {
  GET_COMMANDS,
  ADD_COMMAND,
  DELETE_COMMAND,
} from '../constants';
import { createAction } from 'redux-actions';
import { command } from '../util/api';

export const getCommands = createAction(GET_COMMANDS, command.getAll);
export const addCommand = createAction(ADD_COMMAND);
export const deleteCommand = createAction(DELETE_COMMAND);
