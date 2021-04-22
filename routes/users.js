var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var dbc = require("../utils/userdb.js")
var CryptoJS = require("crypto-js");
var createToken = require("../utils/createToken")
const IV = 'TRYTOCN394402133';


function decrypt(data) {

  const iv = CryptoJS.enc.Utf8.parse(IV);

  let encryptedHexStr = CryptoJS.enc.Hex.parse(data.password);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, data.timestamp, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });

  return decrypt.toString(CryptoJS.enc.Utf8);
}

/* GET users listing. */
router.post('/userlogin', async function(req, res, next) {
  req.body.password = decrypt(req.body)
  let result = await dbc.getUser(req.body)
  if(result && result.length > 0) {
    res.send({
      status: 'ok',
      flag: 1,
      userinfo: {
        username: result[0].username,
        usid: result[0].usid,
        token: createToken(req.body)
      }
    })
  }else {
    res.send({
      status: 'fail',
      flag: 0,
      error: '用户名密码错误！'
    })
  }
  // res.send(result);
});

router.post('/usersignup', async function(req, res, next) {
  req.body.password = decrypt(req.body)
  let getuser = await dbc.searchUser(req.body)
  if(getuser.length > 0) {
    res.send({
      status: 'ok',
      flag: 3,
      mes: '该用户名已存在！'
    })
  }else {
    let result = await dbc.insertUser(req.body)
    if(result.fieldCount == 0) {
      res.send({
        status: 'ok',
        flag: 1,
        mes: '用户注册成功！'
      })
    }else {
      res.send({
        status: 'ok',
        flag: 0,
        mes: '用户注册失败！'
      })
    }
  }
});

module.exports = router;
