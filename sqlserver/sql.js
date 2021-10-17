const { logger } = require("./../config")
const { sqlConfig } = require('./../configs/sqlConfig')
const sql = require('mssql')

const logProc = (proc, param) => {
    let info = proc
    for (const [key, value] of Object.entries(param)) {
        info += ` @${key}='${value}',`
    }
    info = info.substr(0, info.length - 1)
    logger.info(info);
}

const apiAdd = (param) => {
    sql.connect(sqlConfig, err => {
        new sql.Request()
            .input('Link', sql.VarChar(1000), param.Link.toLowerCase())
            .input('Method', sql.VarChar(10), param.Method.toUpperCase())
            .input('ResponseTime', sql.Int, param.ResponseTime)
            .input('StatusCode', sql.Int, param.StatusCode)
            .input('Error', sql.Bit, param.Error)
            .input('Response', sql.NVarChar(200), param.Response.toString().substr(0, 199))

            .execute('sp_api_add', (err, result) => {
                logProc('sp_api_add', param)
                logger.info(JSON.stringify(result))
            })
    })

    sql.on('error', err => {
        logger.error(err)
    })
}

module.exports = {
    apiAdd: apiAdd
}