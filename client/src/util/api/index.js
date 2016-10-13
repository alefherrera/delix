import API from './api';
import order from './order';
import dish from './dish';
import product from './product';
import promo from './promo';
import table from './table';
import command from './command';
import sector from './sector';

export default {
  login: () => API.post('login'),
};

export {
  order,
  dish,
  product,
  promo,
  table,
  command,
  sector,
};
