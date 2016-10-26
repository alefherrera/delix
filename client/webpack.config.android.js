const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = 'production';

module.exports = {
  // devtool: 'source-map',
  devtool: 'source-map',
  entry: {
    app: [
      './src/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../android/delix/app/src/main/assets'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        ANDROID: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file',
      },
    ],
  },
};
