const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry:  ['./index.js'],
  output: {
    path: path.resolve(__dirname, '_js'),
    filename: 'newixsuser.js',
    publicPath: '_js/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }, {
        test: /\.(jpe?g|png|gif\svg)$/,
        use: [
          {
            loader:'url-loader',
            options: { limit: 40000}
          },
          'image-webpack-loader'
        ]
      }  

    ]

  },
  plugins: [
    new ExtractTextPlugin('newisxuser_style.css')
  ]
}