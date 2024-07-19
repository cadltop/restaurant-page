const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
      rules: {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
    }
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Restaurant page',
    template: 'src/index.html'
  })]
};