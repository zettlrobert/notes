const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports {
  // Stops using eval relatively unchanged code
  entry: {
    main: "./src/index.js",
      vendor: ".src/vendor.js"
  },
  module: {
    rules: [

      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
          ]
  }
}
    ]
  }

}

