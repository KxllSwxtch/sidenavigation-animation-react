const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = _ => ({
  // Entry
  entry: './src/index.js',

  // Output
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[hash].bundle.js",
  },

  // Module
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },

  // Plugins
  plugins: [
    new Webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: "index.html"
    }),
  ],

  // Devtool
  devtool: "source-map",

});