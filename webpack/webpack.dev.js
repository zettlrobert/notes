const path = require("path");
const common = require('./webpack.common');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('...')

module.exports = merge(common, {
  // Stops minifying
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "project.[contentHash].js",
    // Resolve absolut Path to a relative one
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
    ]
  }
})

