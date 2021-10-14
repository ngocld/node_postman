const myReq = [
  {
    active: true,
    url: "https://svgw.hanwhalife.com.vn/orchard.api/token",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "mCpo-Client-Scope": "prod",
      "mCpo-Client-Type": "Phone.android.11",
      "mCpo-Client-Version": "1.6.0",
    },
    type: "qs",
    body: {
      client_id: "mcpo",
      client_secret: "58447165fefe87231ae8398bff7fd2bd",
      grant_type: "client_credentials",
    },
  },

  {
    active: true,
    url: "https://svgw.hanwhalife.com.vn/orchard.api2/cmscpo/list/welcome",
    method: "post",
    headers: {
      "mCpo-Client-Scope": "prod",
      "mCpo-Client-Type": "Phone.android.11",
      "mCpo-Client-Version": "1.5.9",
      "Content-Type": "application/json",
    },
    type: "js",
    body: {}
  },

  {
    active: true,
    url: "https://svgw.hanwhalife.com.vn/mcpo/api/mauth/token",
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "mCpo-Client-Scope": "prod",
      "mCpo-Client-Type": "Phone.android.10",
      "mCpo-Client-Version": "1.6.0",
    },
    type: "js",
    body: {
      username: "admin1",
      passWord: "H@nwha123",
    },
  },

  {
    active: true,
    url: "https://svgw.hanwhalife.com.vn/epush/api/account/login",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    type: "js",
    body: {
      username: "fis.tdc.hcm",
      password: "123123",
    },
  }
];

module.exports = {
  myReq: myReq
};