import API from './api';
import order from './order';
import dish from './dish';
import product from './product';
import promo from './promo';
import table from './table';
import command from './command';
import sector from './sector';
import commandStatus from './commandStatus';
import tablesStatus from './tablesStatus';

export default {
  login: () => API.post('login'),
};

export const setHost = newHost => API.setHost(newHost);

export {
  order,
  dish,
  product,
  promo,
  table,
  command,
  sector,
  commandStatus,
  tablesStatus,
};
