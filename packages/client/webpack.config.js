const webpackMerge = require('webpack-merge')
const common = require('./webpack/base.config')

const envs = {
  development: 'dev',
  production: 'prod',
}

/* eslint-disable global-require,import/no-dynamic-require */
const env = envs[process.env.NODE_ENV || 'development']
const envConfig = require(`./webpack/${env}.config.js`)
module.exports = webpackMerge(common, envConfig)
