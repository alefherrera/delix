import {
  GET_TICKETS,
  GET_TICKET,
  PAY_TICKET,
} from '../constants';

import { createAction } from 'redux-actions';
import { ticket } from '../util/api';

export const getTickets = createAction(GET_TICKETS, ticket.getAll);
export const getTicket = createAction(GET_TICKET, ticket.get);
export const payTicket = createAction(PAY_TICKET, ticket.pay);
