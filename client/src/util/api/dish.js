import API from './api';

export default {
  getAll: () => API.get('platos'),
  create: dish => API.post('platos', dish),
};
