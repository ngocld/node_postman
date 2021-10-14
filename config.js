const fs = require('fs');
const {
    logger
} = require('./configs/log4j')

const scheduleTime = '*/15 * * * *'


let myReqJson = []
const dirData = './data/shot/';
if (fs.existsSync(dirData)) {

    fs.readdirSync(dirData).forEach(file => {
        const dataJson = fs.readFileSync(`${dirData}/${file}`, 'utf8');
        const oJson = JSON.parse(dataJson);

        oJson.forEach(element => {
            myReqJson.push(element)
        });
    });
}


module.exports = {
    logger: logger,
    myReq: myReqJson,
    scheduleTime: scheduleTime
}