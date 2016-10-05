import API from './api';

export default {
  get: id => API.get(`productos/${id}`),
  getAll: all => API.get(`productos${all ? '' : '?esFinal=true'}`),
  create: product => API.post('productos', product),
};
