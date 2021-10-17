var base = require('./base.js');
const { logger, myReq } = require("./config")
const schedule = require("node-schedule")
const api = require("./api/api")

if (base.verifyApp(myReq) === false) {
    const notify = "Verify config is invalid. Stop program..."
    console.log(notify)
    logger.error(notify)
    return
}

// Run program
myReq.forEach(item => {

    // // Debugs
    // item.source.forEach((item1) => {
    //     if (item1.active === true)
    //     base.submitAPI(item1)
    // })

    // Schedule
    const notify = `${item.job.name} is starting on schedule ${item.job.schedule}`
    console.log(notify)
    logger.info(notify)

    schedule.scheduleJob(item.job.schedule, function () {
        item.source.forEach(item1 => {
            if (item1.active === true)
                base.submitAPI(item1)
        })
    })
})