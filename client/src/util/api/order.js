import API from './api';

export default {
  create: pedido => API.post('pedidos', pedido),
  add: comandas => API.post('comandas', comandas),
};
