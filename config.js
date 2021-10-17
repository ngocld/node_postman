const fs = require('fs');
const { logger } = require('./configs/log4j')
const { sqlConfig } = require('./configs/sqlConfig')
const { usersAuthen, hosting } = require('./configs/apiConfig')

let myReqJson = []
const dirShot = './data/shot';
if (fs.existsSync(dirShot)) {
    fs.readdirSync(dirShot).forEach(folderName => {
        const dirShotChild = `${dirShot}/${folderName}`

        let tempRow = {
            job: null,
            source: []
        }

        fs.readdirSync(dirShotChild).forEach(file => {

            const dataJson = fs.readFileSync(`${dirShotChild}/${file}`, 'utf8');
            const oJson = JSON.parse(dataJson);

            if (file.toLowerCase() === "job.json") {
                tempRow.job = oJson
            } 

            else {
                oJson.forEach(element => {
                    tempRow.source.push(element)
                });
            }
        });
        myReqJson.push(tempRow)
    });
}


module.exports = {
    logger: logger,
    myReq: myReqJson,
    sqlConfig: sqlConfig,
    usersAuthen: usersAuthen,
    hosting: hosting
}