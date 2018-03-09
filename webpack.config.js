const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  // plugins: [
  //   new CleanWebpackPlugin(['dist']),
  // ],
};
