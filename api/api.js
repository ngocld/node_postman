var express = require('express')
var basicAuth = require('express-basic-auth')
const sql = require('mssql')
const { logger, usersAuthen, hosting, sqlConfig } = require("./../config")
const { apiSearch, dataSearch } = require("./../sqlserver/sql")


const app = express()
app.listen(hosting.port, hosting.host)
app.use(basicAuth({
    users: usersAuthen
}))


app.get('/ping', (req, res) => {
    sql.connect(sqlConfig).then(() => {
        return sql.query`select 1 as VerifyData`
    }).then(result => {
        res.send(result.recordset)
    }).catch(err => {
        res.send(err)
    })
    
    sql.on('error', err => {
        res.send(err)
    })
    
})

app.get('/take-error', (req, res) => {
    const ago = req.query['ago'] === undefined ? '30' : req.query['ago']
    let param = {
        MinAgo: ago
    }

    sql.connect(sqlConfig, err => {
        new sql.Request()
            .input('MinAgo', sql.Int, param.MinAgo)
            .execute('sp_api_search', (err, result) => {
                if (!err){
                    logger.info(`Row count: ${result.recordset.length}`)
                    res.send(result.recordset)
                }
                else{
                    res.json(err)
                }
            })
    })
})


app.get('/take-current', (req, res) => {
    const ago = req.query['ago'] === undefined ? '30' : req.query['ago']

    let param = {
        MinAgo: ago
    }

    sql.connect(sqlConfig, err => {
        new sql.Request()
            .input('MinAgo', sql.Int, param.MinAgo)
            .execute('sp_api_search1', (err, result) => {
                if (!err){
                    logger.info(`Row count: ${result.recordset.length}`)
                    res.send(result.recordset)
                }
                else{
                    res.json(err)
                }
            })
    })
})


const ShowResult = (rows) =>
{
    let info = ''
    rows.forEach((item) => {
        info += `${item.Method} ${item.StatusCode} ${item.Link} ${item.CreateTimeVN} \n`
    })

    return info
}

module.exports = {
    api: app
}