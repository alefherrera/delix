import {
  GET_RESERVATIONS,
  GET_RESERVATION,
  ADD_RESERVATION,
  EDIT_RESERVATION,
  DELETE_RESERVATION,
} from '../constants';
import { createAction } from 'redux-actions';
import { reservation } from '../util/api';

export const getReservations = createAction(GET_RESERVATIONS, reservation.getAll);
export const getReservation = createAction(GET_RESERVATION, reservation.get);
export const addReservation = createAction(ADD_RESERVATION,
  reservation.create, () => () => '/reserva');
export const editReservation = createAction(EDIT_RESERVATION,
  reservation.create, () => () => '/reserva');
export const deleteReservation = createAction(DELETE_RESERVATION, reservation.delete);
