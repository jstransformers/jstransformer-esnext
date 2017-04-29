# jstransformer-esnext

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-esnext.svg)](https://greenkeeper.io/)

[esnext](https://github.com/esnext/esnext) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-esnext/master.svg)](https://travis-ci.org/jstransformers/jstransformer-esnext)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-esnext/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-esnext)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-esnext/master.svg)](http://david-dm.org/jstransformers/jstransformer-esnext)
[![NPM version](https://img.shields.io/npm/v/jstransformer-esnext.svg)](https://www.npmjs.org/package/jstransformer-esnext)

## Installation

    npm install jstransformer-esnext

## API

```js
var esnext = require('jstransformer')(require('jstransformer-esnext'));

esnext.render('list.map(function(item) { return item.name; })').body
//=> 'list.map(item => item.name)'
```

## License

MIT
