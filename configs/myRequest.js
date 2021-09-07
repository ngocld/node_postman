const myReq = [
    {
        url: 'https://sfagatewayuat.hanwhalife.com.vn/ping',
        method: 'get',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        type: 'qs',
        body: null
    },

    {
        url: 'https://accountsuat.hanwhalife.com.vn/connect/token',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        type: 'qs',
        body: {
            client_id: 'sfa.app.uat',
            client_secret: '2d6e3a80716d62dd88e95424b3e62a70',
            grant_type: 'client_credentials'
        }
    },
    {
        url: 'https://svgw.hanwhalife.com.vn/mcpo/api/mauth/token',
        method: 'post',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'mCpo-Client-Scope': 'prod',
            'mCpo-Client-Type': 'Phone.android.10',
            'mCpo-Client-Version': '1.5.8'
        },
        type: 'js',
        body: {
            'username': 'admin',
            'passWord': 'H@nwha123',
        }
    }
]

module.exports = {
    myReq: myReq
}