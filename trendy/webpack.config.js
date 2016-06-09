// webpack.config.js
var path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "www"),
    filename: "app.js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    extensions: ["", ".js"],
  },
  devServer: {
    contentBase: "www/",
    inline: true,
    colors: true,
    progress: true
  }
};