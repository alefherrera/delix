import API from './api';

export default {
  getAll: () => API.get('pedidos'),
  getByStatus: pedidoEstadoId => API.get(`pedidos?pedidoEstadoId=${pedidoEstadoId}`),
  get: id => API.get(`pedidos/${id}`),
  create: pedido => API.post('pedidos', pedido),
  add: comandas => API.post('comandas', comandas),
  update: (id, pedido) => API.put(`pedidos/${id}`, pedido),
  status: {
    promo: obj => API.post('comandas/promo/status', obj),
    product: obj => API.post('comandas/producto/status', obj),
    dish: obj => API.post('comandas/plato/status', obj),
  },
  delete: {
    promo: obj => API.post('comandas/promo/delete', obj),
    product: obj => API.post('comandas/producto/delete', obj),
    dish: obj => API.post('comandas/plato/delete', obj),
  },
};
