import API from './api';

export default {
  getAll: all => API.get(`productos${all ? '' : '?esFinal=true'}`),
  create: product => API.post('productos', product),
};
