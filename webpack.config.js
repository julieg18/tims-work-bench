const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
