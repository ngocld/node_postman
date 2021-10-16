const sql = require('mssql')
const config = {
    user: 'sa',
    password: 'Aa@123456',
    database: 'MAS',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}



const apiAdd = (param) => {

    sql.connect(config, err => {
        new sql.Request()
            .input('Link', sql.VarChar(1000), param.Link)
            .input('Method', sql.VarChar(10), param.Method)
            .input('ResponseTime', sql.Int, param.ResponseTime)
            .input('StatusCode', sql.Int, param.StatusCode)
            .input('Error', sql.Bit, param.Error)

            .execute('sp_api_add', (err, result) => {
                console.dir(result)
            })
    })

    sql.on('error', err => {
        // ... error handler
    })
}


module.exports = {
    apiAdd: apiAdd
}