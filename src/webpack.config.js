const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/index`,
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '*': {
        target: 'http://localhost:8000/',
        secure: false,
      },
    },
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] },
      { test: /\.scss$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
      { test: /\.(jpe?g|png|svg)$/, loader: 'file-loader', options: { name: '[path][name].[hash].[ext]' } },      
    ], 
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/public/index.html` }),
    new webpack.HotModuleReplacementPlugin(),

  ],
};
