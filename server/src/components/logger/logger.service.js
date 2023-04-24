const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format
const config = require('../../helper/config.helper')

const customLog = printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)

const formatter = combine(
    label({ label: config.get('app.name') }),
    timestamp(),
    format.splat(),
    format.simple(),
    customLog
)

const logger = createLogger({
    level: 'info',
    format: formatter
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: formatter
    }))
}

module.exports = logger
