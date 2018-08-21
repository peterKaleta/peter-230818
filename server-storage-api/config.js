import path from 'path'

const PRODUCTION_LABEL = 'production'

export default {
  PORT: 8899,
  STORE_DIR: path.resolve(__dirname, '_stores'),
  API_KEYS: ['AAABBBCCC'],
  isProduction: process.NODE_ENV === PRODUCTION_LABEL,
  DEFAULT_WINSTON_OPTIONS: {
    json: false,
    colorize: true,
    prettyPrint: true,
    handleExceptions: true,
  },
}
