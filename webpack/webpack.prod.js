const path = require("path");
const common = require('./webpack.common');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlguin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  // Stops minifying
  mode: "production",
  // Stops using eval relatively unchanged code
  devtool: "none",
  output: {
    filename: "[name].[contentHash].bundle.js",
    // Resolve absolut Path to a relative one
    path: path.resolve(__dirname, "public")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlguin(),
      new HtmlWebpackPlugin({
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })
    new CleanWebpackPlugin()

  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
    ]
  }
});

