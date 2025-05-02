const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      favicon: path.resolve(__dirname, 'src/images/favicon.ico')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ],
  },
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  devtool: 'inline-source-map',
};
