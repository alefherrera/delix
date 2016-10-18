import API from './api';

export default {
  getAll: () => API.get('estado_mesas'),
};
