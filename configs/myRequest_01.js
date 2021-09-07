const myReq = [
  {
    id: '49911b5e0b07918c3716513e2ca58a3b',
    active: true,
    url: "https://svgw.hanwhalife.com.vn/orchard.api/token",
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "mCpo-Client-Scope": "prod",
      "mCpo-Client-Type": "Phone.android.11",
      "mCpo-Client-Version": "1.5.9",
    },
    type: "qs",
    body: {
      client_id: "mcpo",
      client_secret: "58447165fefe87231ae8398bff7fd2bd",
      grant_type: "client_credentials",
    },
  },

  {
    id: '04bd8399364fba8e7a97b83c09f567d9',
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
    id: '3cd7f5823cf5fcfcea62666104691ddc',
    active: true,
    url: "https://svgw.hanwhalife.com.vn/mcpo/api/mauth/token",
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "mCpo-Client-Scope": "prod",
      "mCpo-Client-Type": "Phone.android.10",
      "mCpo-Client-Version": "1.5.8",
    },
    type: "js",
    body: {
      username: "admin",
      passWord: "H@nwha123",
    },
  }
];

module.exports = {
  myReq: myReq
};
