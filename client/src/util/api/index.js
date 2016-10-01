import API from './api';
import order from './order';

export default {
  login: () => API.post('login'),
};

export {
  order,
};
