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
    contentBase: './dist',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
}
