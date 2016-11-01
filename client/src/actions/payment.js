import {
  GET_PAYMENTS,
} from '../constants';
import { createAction } from 'redux-actions';
import { payment } from '../util/api';

export const getPayments = createAction(GET_PAYMENTS, payment.getAll);
