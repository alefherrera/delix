import API from './api';

export default {
  getAll: () => API.get('comandas'),
  update: (idPedido, idComanda, comanda) => API.put(`/pedidos/${idPedido}/comandas/${idComanda}`, comanda),
};
