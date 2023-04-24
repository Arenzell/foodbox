const config = require('./helper/config.helper')
const logger = require('./components/logger/logger.service')
const app = require('./config/app')

const host = config.get('api.host')
const port = config.get('api.port')

/**
 * Start the server.
 */
const server = app.listen(port, host, error => {
    if (error) {
        logger.error('Unable to listen for connections', error)
        process.exit(1)
    }
    logger.info(`Server listening on http://${host}:${port}`)
})

/**
 * Perform some graceful shutdown.
 */
const shutDown = () => {
    logger.info('Received kill signal, shutting down gracefully')
    server.close(() => {
        process.exit(0)
    })
}

process.on('SIGTERM', shutDown)
process.on('SIGINT', shutDown)
