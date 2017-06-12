'use strict'

const esnext = require('esnext')

exports.name = 'esnext'
exports.outputFormat = 'js'
exports.render = function (str, options) {
  const out = esnext.convert(str, options)
  return out.code
}
