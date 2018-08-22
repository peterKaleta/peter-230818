const path = require('path')

module.exports = {
  ROOT: path.resolve(__dirname, '../'),
  OUTPUT_DIR: path.resolve(__dirname, '../', 'build'),
  ENTRY_PATH: path.resolve(__dirname, '../', 'client/index.js'),
  TEMPLATE_PATH: path.resolve(__dirname, '../', 'client/index.html'),
  IMAGES_DIR: 'images',
  FONTS_DIR: 'fonts',
  CSS_DIR: 'css',
  JS_DIR: 'js',
}
