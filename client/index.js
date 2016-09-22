const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');
const opn = require('opn');
const url = 'http://localhost:3000/';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(3000, '0.0.0.0', err => {
  if (err) {
    return console.log(err);
  }
  console.log(`Listening at ${url}`);
  opn(url);
});
