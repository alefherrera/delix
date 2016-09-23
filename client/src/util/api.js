const HOST = 'http://localhost:3001';
const getApi = endpoint => `${HOST}/${endpoint}`;
const API = {
  get: url => fetch(getApi(url)).then(r => r.json()),
  post: (url, obj = {}) => fetch(getApi(url), obj).then(r => r.json()),
};

export default {
  login: () => API.post('login'),
};
