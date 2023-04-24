const config = {}

/**
 * Generic app configs.
 */
config.app = {
    name: 'foodbox-api'
}

/**
 * Generic API configs.
 */
config.api = {
    host: process.env.API_HOST || '0.0.0.0',
    port: process.env.API_PORT || 5000
}

module.exports = config
