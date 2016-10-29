import API from './api';

export default {
  getAll: () => API.get('franjas'),
  get: id => API.get(`franjas/${id}`),
  create: timeZone => API.post('franjas', timeZone),
  delete: id => API.delete(`franjas/${id}`),
};
