import {
  GET_TICKETS,
  PAY_TICKET,
} from '../constants';

import { createAction } from 'redux-actions';
import { ticket } from '../util/api';

export const getTickets = createAction(GET_TICKETS, ticket.getAll);
export const payTicket = createAction(PAY_TICKET, ticket.pay);
