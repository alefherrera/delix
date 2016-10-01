export default (method, url, params) => {
  console.log('API', {
    method, url, params,
  });
  switch (method) {
    case 'GET':
      return fetch(url);
    default:
      return fetch(url, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(params),
      });
  }
};
