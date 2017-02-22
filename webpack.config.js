const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/client/application.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'application.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'application.bundle.css',
      allChunks: true
    })
  ]
};
