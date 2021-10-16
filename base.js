var axios = require("axios")
var qs = require("qs")
const { logger } = require("./config")
const { apiAdd } = require("./sqlserver/sql")


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

    var paramSql = {
        Link: url,
        Method: method,
        ResponseTime: 0,
        StatusCode: null,
        Error: false,
    }


    logger.info(`Start Request ${item.method.toUpperCase()} ${item.url}...`);
    axios(config)
        .then(function (response) {
            logger.info(`${item.method.toUpperCase()} ${item.url}`)
            logger.info(response.status + ' ' + JSON.stringify(response.data))

            //write data sql server
            paramSql.StatusCode = response.status
            paramSql.Error = false
            apiAdd(paramSql)
        })
        .catch(function (error) {
            logger.info(`${item.method.toUpperCase()} ${item.url}`)
            logger.info(JSON.stringify(error.message));

            //write data sql server
            paramSql.StatusCode = 500
            paramSql.Error = true
            apiAdd(paramSql)
        });
}

const verifyApp = (myReq) => {
    

    if (myReq.length === 0) {
        console.log('111');
        const notify = "There is no file shot"
        console.log(notify)
        logger.error(notify)
        return false

    } else {
        myReq.forEach((item) => {
            if (item.job.schedule === undefined || item.job.schedule === null) {
                const notify = `${item.job.name} is not exits.`
                console.log(notify)
                logger.error(notify)
                console.log('222');
                return false
            }
        })

        return true
    }
    
}

module.exports = {
    submitAPI,
    verifyApp
 }