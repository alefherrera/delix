import API from './api';

export default {
  get: id => API.get(`sectores/${id}`),
  getAll: () => API.get('sectores'),
  create: sector => API.post('sectores', sector),
  delete: id => API.delete(`sectores/${id}`),
};
