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
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['../node_modules'],
            },
          },
        ],
      },
    ],
  },
}
