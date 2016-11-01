import API from './api';

export default {
  getAll: () => API.get('tickets'),
  pay: table => API.post('tickets', table),
  get: id => API.get(`tickets/${id}`),
};
