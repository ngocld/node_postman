const config = {
    user: 'sa',
    password: 'Aa@123456',
    database: 'MAS',
    server: 'localhost',
    pool: {
        max: 30,
        min: 3,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

module.exports = {
    sqlConfig: config
}