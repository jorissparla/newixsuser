const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
<<<<<<< HEAD
  entry: ['babel-polyfill', './index.js'],
=======
  entry:  ['./index.js'],
>>>>>>> b2c223cd98d81081a0969bebe738ab5e2797d837
  output: {
    path: path.resolve(__dirname, '_js'),
    filename: 'newixsuser2.js',
    publicPath: '_js/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif\svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [new ExtractTextPlugin('newisxuser_style2.css')]
};
