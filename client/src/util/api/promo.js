import API from './api';

export default {
  get: id => API.get(`promos/${id}`),
  getAll: () => API.get('promos'),
  create: promo => API.post('promos', promo),
  delete: id => API.delete(`promos/${id}`),
};
