export default (method, url, params) => {
  console.log('API', {
    method, url, params,
  });
  switch (method) {
    case 'GET':
      return fetch(url);
    case 'DELETE':
      return fetch(url, {
        method: 'DELETE',
      });
    default:
      return fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method,
        body: JSON.stringify(params),
      });
  }
};
