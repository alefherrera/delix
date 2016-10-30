const jsreport = require('jsreport');

module.exports = (router) => {

  router.get('/pdf', (req, res) => {
    jsreport.render("<h1>Hello world</h1>").then(function(out) {
      out.stream.pipe(res);
    }).catch(function(e) {
      res.end(e.message);
    });
  });

}
