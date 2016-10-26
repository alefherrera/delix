import {
  GET_COMMANDS,
  ADD_COMMAND,
  ADD_COMMANDS,
  DELETE_COMMAND,
  DELETE_COMMANDS,
} from '../constants';
import { createAction } from 'redux-actions';
import { command } from '../util/api';

export const getCommands = createAction(GET_COMMANDS, command.getAll);
export const addCommand = createAction(ADD_COMMAND);
export const addCommands = createAction(ADD_COMMANDS);
export const deleteCommand = createAction(DELETE_COMMAND);
export const deleteCommands = createAction(DELETE_COMMANDS);
