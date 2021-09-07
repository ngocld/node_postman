const myReq = [
  {
    active: true,
    url: "http://10.84.1.115:51517/createindex/full",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "mCpo-Client-Scope": "prod"
    },
    type: "js",
    body: {}
  },

  {
    active: true,
    url: "http://10.84.1.115:51517/synccpo/view",
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "mCpo-Client-Scope": "prod"
    },
    type: "js",
    body: {}
  },

  {
    active: true,
    url: 'http://10.84.1.219:51517/createindex/full',
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "mCpo-Client-Scope": "uat"
    },
    type: "js",
    body: {}
  },

  {
    active: true,
    url: 'http://10.84.1.219:51517/synccpo/view',
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "mCpo-Client-Scope": "uat"
    },
    type: "js",
    body: {}
  },
  
];

module.exports = {
  myReq: myReq
};
