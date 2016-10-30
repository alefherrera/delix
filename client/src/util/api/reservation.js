import API from './api';

export default {
  getAll: () => API.get('reservas'),
  get: id => API.get(`reservas/${id}`),
  create: reservation => API.post('reservas', reservation),
  delete: id => API.delete(`reservas/${id}`),
  getTables: () => API.get('reservas_mesas'),
};
