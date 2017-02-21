const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/client/application.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'application.bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract(
          'style?sourceMap',
          'css?',
          'resolve-url'
        )
    }]
  },

  plugins: [
    new ExtractTextPlugin('application.bundle.css', { allChunks: true })
  ]
};
