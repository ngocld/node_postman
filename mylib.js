var fs = require('fs');
// var deasync = require('deasync');
var log4js = require('log4js')

log4js.configure({
    appenders: {
        everything: {
            type: 'dateFile',
            filename: 'logs/all-logs.log',
            maxLogSize: 10485760,
            backups: 30,
            compress: true
        }
    },
    categories: {
        default: {
            appenders: ['everything'],
            level: 'debug'
        }
    }
})

const logger = log4js.getLogger()
logger.level = 'debugs'


module.exports = {
    logger
}