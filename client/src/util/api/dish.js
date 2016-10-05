import API from './api';

export default {
  get: id => API.get(`platos/${id}`),
  getAll: () => API.get('platos'),
  create: dish => API.post('platos', dish),
};
