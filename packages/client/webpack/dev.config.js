const path = require('path')
const paths = require('./paths')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.OUTPUT_DIR,
    chunkFilename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './build',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, '../node_modules')],
            },
          },
        ],
      },
    ],
  },
}
