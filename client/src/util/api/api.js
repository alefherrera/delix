const HOST = 'http://localhost:3001';
const getApi = endpoint => `${HOST}/${endpoint}`;
import wrap from './wrap';

const API = {
  get: url => wrap('GET', getApi(url)).then(r => r.json()),
  post: (url, obj = {}) => wrap('POST', getApi(url), obj).then(r => r.json()),
};

export default API;
