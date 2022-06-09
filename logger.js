const {createLogger, transports, format} = require('winston');

const customFormat = format.combine(format.timestamp(), format.printf((info) => {
    return `${info.timestamp} - [${info.level.toUpperCase().padEnd(7)}] - ${info.message}`
}))

const logger = createLogger({
    format: customFormat,
    transports: [
        new transports.Console({
            level: 'silly'
        })
    ]
});

// if (process.env.NODE_ENV == 'production') {
//     logger.add(new transports.File({
//         filename: 'app.log',
//         level: 'info'
//     }));

// if (process.env.NODE_ENV == 'development') {
//     logger.add(new transports.Console({
//       format: format.simple(),
//       level: 'silly'
//     }));

module.exports = logger;