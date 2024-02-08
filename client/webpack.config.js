const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@store": path.resolve(__dirname, "src/store"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    proxy: {
      "/api": "http://localhost:5000",
    },
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
};
