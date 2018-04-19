const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
//      'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          }
      ]
  },
  resolve: {
      extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
  devServer: {
    contentBase: './dist',
      hot: true
  }
};
