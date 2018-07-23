'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const testENV = require('./test.env')

module.exports = merge(prodEnv, testENV, {
  NODE_ENV: '"development"'
})
