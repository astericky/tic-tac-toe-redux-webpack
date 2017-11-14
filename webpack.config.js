// const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = [
  "react",
  "react-dom",
  "react-router",
  "react-redux",
  "redux",
  "redux-thunk",
];

module.exports = {
  context: `${__dirname}/src`,

  entry: {
    bundle: "./js/index.jsx",
    vendor: VENDOR_LIBS
  },

  output: {
    path: `${__dirname}/public`,
    filename: "[name].[chunkhash].js"
  },

  devtool: "inline-source-map",

  devServer: {
    contentBase: `${__dirname}/src/`,
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                sourceMap: true,
                localIdentName: "[path]--[name]-[local]--[hash:base64:5]"
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
