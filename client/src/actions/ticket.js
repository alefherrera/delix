import {
  GET_TICKETS,
  GET_TICKET,
  PAY_TICKET,
  GET_PAYMENT_TYPES,
} from '../constants';

import { createAction } from 'redux-actions';
import { ticket, paymentType } from '../util/api';

export const getTickets = createAction(GET_TICKETS, ticket.getAll);
export const getTicket = createAction(GET_TICKET, ticket.get);
export const getPaymentTypes = createAction(GET_PAYMENT_TYPES, paymentType.getAll);
export const payTicket = createAction(PAY_TICKET, ticket.pay);
