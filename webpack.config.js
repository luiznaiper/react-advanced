const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      // ...
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist/"),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
