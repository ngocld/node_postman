const mylib = require('./mylib')
const { requests, scheduleTime} = require('./config');
const schedule = require('node-schedule')
var axios = require('axios');
var qs = require('qs');


schedule.scheduleJob(scheduleTime, function () {
    requests.forEach(item => {
        var data = null
    
        if (item.type === 'qs') {
            data = qs.stringify(item.body);
        } else if (item.type === 'js') {
            data = JSON.stringify(item.body);
        }
    
        var method = item.method
        var url = item.url
        var headers = item.headers
    
        var config = {
            method: method,
            url: url,
            headers: headers,
            data: data
        };
        
        mylib.logger.info(`Start request ${item.method.toUpperCase()} ${item.url}`)
    
        axios(config)
            .then(function (response) {
                mylib.logger.info(`${item.method.toUpperCase()} ${item.url}`)
                mylib.logger.info(JSON.stringify(response.data))
            })
            .catch(function (error) {
                mylib.logger.error(error)
            });
    })
})




