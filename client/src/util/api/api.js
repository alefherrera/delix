let myHost = location.hostname;
export const getHost = () => `http://${myHost}`;
const setHost = host => {
  myHost = host;
};

const getApi = endpoint => `${getHost()}:3001/${endpoint}`;
import wrap from './wrap';

const API = {
  get: url => wrap('GET', getApi(url)).then(r => r.json()),
  post: (url, obj = {}) => wrap('POST', getApi(url), obj).then(r => r.json()),
  put: (url, obj = {}) => wrap('PUT', getApi(url), obj).then(r => r.json()),
  delete: url => wrap('DELETE', getApi(url)).then(r => r.json()),
  setHost,
};

export default API;
