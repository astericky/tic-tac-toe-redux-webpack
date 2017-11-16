// const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = ['react', 'react-dom', 'react-redux', 'redux']
const BUNDLE = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './js/index.jsx',
]

module.exports = {
  context: `${__dirname}/src`,

  entry: {
    bundle: BUNDLE,
    vendor: VENDOR_LIBS,
  },

  output: {
    path: `${__dirname}/public/`,
    filename: '[name].[hash].js',
    publicPath: '/',
  },

  devtool: 'cheap-eval-source-map',

  devServer: {
    hot: true,
    publicPath: '/',
    contentBase: '/public',
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                // modules: true,
                importLoaders: 1,
                sourceMap: true,
                // localIdentName: '[path]--[name]-[local]--[hash:base64:5]',
              },
            },
          ],
        }),
      },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
