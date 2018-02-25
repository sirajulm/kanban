const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        use: [{
          loader: 'babel-loader'
        }],
        exclude: ['/node_modules/']

      },
      { 
        test: /\.jsx$/, 
        use: [{
          loader: 'babel-loader'
        }],
        exclude: ['/node_modules/']
      },
      {
        test: /\.scss$/,
        // loaders: 'style-loader!css-loader?modules!sass-loader'
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([ 
      { from: './public', to: './public' }
     ], {
      copyUnmodified: true
     })
  ]  
}