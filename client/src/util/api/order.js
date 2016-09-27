import API from './api';

export default {
  create: () => API.post('pedidos'),
};
