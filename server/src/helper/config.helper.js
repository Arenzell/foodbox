const path = require('path')
const Config = require('config-js')
const config = new Config(path.join(__dirname, '../properties.js'))
module.exports = config
