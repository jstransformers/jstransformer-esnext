'use strict'

var esnext = require('esnext')

exports.name = 'esnext'
exports.outputFormat = 'js'

exports.render = function (str, options) {
  var out = esnext.convert(str, options)
  return out.code
}
