var express = require('express')
var basicAuth = require('express-basic-auth')
const { logger, usersAuthen, hosting } = require("./../config")

const app = express()

app.use(basicAuth({
    users: usersAuthen
}))

app.get('/check-all', (req, res) => {
    res.send('hello world')
})

app.listen(hosting.port, hosting.host)

module.exports = {
    api: app
}