const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [htmlPlugin, new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/images/[name].[ext]'
            }
          },
        ],
      }
    ]
  }
};