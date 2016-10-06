import API from './api';

export default {
  getAll: () => API.get('grupos_mesas'),
};
