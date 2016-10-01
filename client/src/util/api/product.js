import API from './api';

export default {
  getAll: () => API.get('productos?esFinal=true'),
};
