import API from './api';

export default {
  getAll: () => API.get('ticket_pedido'),
  pay: ticket => API.post('pagos', ticket),
  get: id => API.get(`ticket_pedido/${id}`),
};
