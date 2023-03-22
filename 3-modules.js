// Modules - Encapsulated code (only Share minimum)
// CommonJS, every file is modules (By default)
const names = require('./4-names'); // This line makes it possible to access the variables john and peter in the 4-names file
const sayHi = require('./5-sayhifunc')
const data = require('./6-alternative-exportsyntax')
console.log(names);
console.log(data)
require('./7-mind-grenade')

sayHi('Brother D')
sayHi(names.john)
sayHi(names.peter)