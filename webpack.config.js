const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const Webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/helloWorld/helloWorld.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: Path.resolve(__dirname, 'dist')
  },

  // enable source maps
  devtool: 'inline-source-map',

  // enable dev server with webpack-dev-server
  devServer: {
    contentBase: './dist' // base folder to serve
  },

  module: {
    rules: [
      // CSS files
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      // SCSS files
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      // JS files (transpiled with babel)
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  plugins: [
    // cleans dist folder before each build
    new CleanWebpackPlugin(['dist']),

    // generates an index.html file with the above output
    new HtmlWebpackPlugin({
      title: 'Exiles Bookings',
      template: './src/index.ejs'
    }),

    // enable HMR
    new Webpack.HotModuleReplacementPlugin()
  ]
}
