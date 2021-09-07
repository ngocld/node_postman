const { logger } = require('./configs/log4j')
const { myReq } = require('./configs/myRequest')
const scheduleTime = '47 * * * *'

module.exports = {
    logger: logger,
    myReq: myReq,
    scheduleTime: scheduleTime
}