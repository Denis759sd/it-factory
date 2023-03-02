const config = require('config')

module.exports = {
    development: config.get('db'),
    production: config.get('db')
}