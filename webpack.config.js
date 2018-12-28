const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
