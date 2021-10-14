const {
    logger,
    myReq,
    scheduleTime
} = require("./config")
const schedule = require("node-schedule")
var axios = require("axios")
var qs = require("qs")


const submitAPI = (item) => {
    var data = null;

    if (item.type === "qs") {
        data = qs.stringify(item.body);
    } else if (item.type === "js") {
        data = JSON.stringify(item.body);
    }

    var method = item.method;
    var url = item.url;
    var headers = item.headers;

    var config = {
        method: method,
        url: url,
        headers: headers,
        data: data,
    };

    logger.info(`Start Request ${item.method.toUpperCase()} ${item.url}...`);

    axios(config)
        .then(function (response) {
            logger.info(`${item.method.toUpperCase()} ${item.url}`)
            logger.info(response.status + ' ' + JSON.stringify(response.data))
        })
        .catch(function (error) {
            logger.info(`${item.method.toUpperCase()} ${item.url}`)
            logger.info(JSON.stringify(error.message));
        });
}

if (myReq.length === 0){
    const notify = "There is no file shot. Stop application."
    console.log(notify);
    logger.error(notify);
    return
}

// debgus
myReq.forEach((item) => {
    if (item.active === true)
        submitAPI(item)
})

// void main
// schedule.scheduleJob(scheduleTime, function () {
//     requests.forEach((item) => {
//         submitAPI(item)
//     })
// })