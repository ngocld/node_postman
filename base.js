var axios = require("axios")
var qs = require("qs")
const { logger, myReq } = require("./config")
const schedule = require("node-schedule")
const verifyResult = false


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

const verifyApp = () => {
    if (myReq.length === 0) {
        const notify = "There is no file shot"
        console.log(notify)
        logger.error(notify)
        return
    } else {
        myReq.forEach((item) => {
            if (item.job.schedule === undefined || item.job.schedule === null) {
                const notify = `${item.job.name} is not exits.`
                console.log(notify)
                logger.error(notify)
                return
            }
        })
    }
    verifyResult = true
}

module.exports = {
    submitAPI,
    verifyResult
 }