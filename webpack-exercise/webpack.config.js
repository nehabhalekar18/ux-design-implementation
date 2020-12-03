const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  /* mode: "development",
  devServer: {
    contentBase: "./dist",
  },
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  }, */
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Started"/* ,
      filename: "index.html",
      template: "src/index.html", */
    }),
  ],
};
