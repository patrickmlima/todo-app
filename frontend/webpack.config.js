const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'app.css' })
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.woff|\.woff2|\.ttf|\.eot|\.svg*.*$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}
