const HOST = 'http://localhost:3001';
const getApi = endpoint => `${HOST}/${endpoint}`;
const API = {
  get: url => fetch(getApi(url)).then(r => r.json()),
  post: (url, obj = {}) => fetch(getApi(url),
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(obj),
    }
  ).then(r => r.json()),
};

export default API;
