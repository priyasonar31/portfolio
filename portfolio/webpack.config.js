const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, args) => ({
  entry: "./src/index.tsx", // Entry point of your application
  devtool: args.mode === 'development' ? 'eval-source-map' : 'source-map',
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css|sass|scss$/,
        exclude: [/node_modules/],
        use: [
          args.mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', options: { sourceMap: true},
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, "src"),
                ]
              },
              implementation: require('sass')
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 3000, // Port for the development server
    open: true, // Open the default web browser when the server starts
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public/favicon.png',
    //       to: './favicon.png'
    //     }
    //   ]
    // })
  ]
});
