import API from './api';

export default {
  getAll: () => API.get('grupos_mesas'),
  update: table => API.post('grupos_mesas', table),
  get: id => API.get(`grupos_mesas/${id}`),
};
