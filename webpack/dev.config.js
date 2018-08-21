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
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}
