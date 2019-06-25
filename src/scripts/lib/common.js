/* eslint-disable */
// import apiList from 'scripts/axios/interface.js'
import Cookies from 'js-cookie';
// 常用业务方法
var business = {
  show: function() {
    // alert(1)
  },
  hide: function($obj) {
    // $obj.fadeOut(200);
    // $('.masklayer').fadeOut(200);
    $obj.hide();
    $(".masklayer").hide();
  },
  isLogin(fail, success) {
    // var nebulaInfo = ClientAPI.getLoginXingYun();
    // var loginGame = ClientAPI.getLoginGame(13216);
    // if(!nebulaInfo || !nebulaInfo.userId){
    //     //未登录火马
    //     fail();
    //     return;
    // } else if(!loginGame){
    //     //未登录游戏
    //     fail();
    //     return;
    // }
    // 登录火马或登录游戏
    success();
  },
  getAccount() {
    // var loginGame = ClientAPI.getLoginGame(13216);
    // if (loginGame) {
    // 	return loginGame.account;
    // }
    // test
    return "13714073";
  },
  getSelect(data, flag) {
    var arr = [];
    if (flag === "qq") {
      data.forEach((element, index) => {
        var obj = {
          text: element.account,
          value: element.account
        };
        arr.push(obj);
      });
    } else {
      data.forEach((element, index) => {
        var obj = {
          text: element,
          value: element
        };
        arr.push(obj);
      });
    }
    return arr;
  },
  // 获取活动名称
  getActivityName(){
    return utils.getUrlParam('activityName');
  },
  // 获取活动名称
  getSources(){
    return utils.getUrlParam('sources');
  },
  // 获得用户信息
  getUser() {
    var tel = Cookies.get('phone');
    // var tel = '180000000';
    var user = {};
    user['tel'] = tel;
    return user;
  },
  //登录判断
  isLoginFn(){
    var userName = Cookies.get('userName');
    var hasLogin = Cookies.get('USER_LOGIN_TOKEN');
    // 测试
    // var userName = 'test';
    // var hasLogin = '6545D16808EC756188759D641897DA5A'
    if(userName && hasLogin){
      /*var name=decodeURI(userName);
      self.user=name.replace(/\+/g, ' ');*/
      return true
    }
    return false
  },
  getUserNameFn(){
    var userName= Cookies.get('userName');
    var hasLogin=Cookies.get('USER_LOGIN_TOKEN');
    // 测试
    // var userName = 'test';
    // var hasLogin = '6545D16808EC756188759D641897DA5A'
    if(userName&&hasLogin){
      var name=decodeURI(userName);
      var userNameLast=name.replace(/\+/g, ' ');
      return userNameLast
    }
    return null
  }
};

// 常用 API
var utils = {
  getUrlParam: function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); // 匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; // 返回参数值
  },
  getHashParameters(key){
    var arr = (location.hash || "").replace(/^\#/,'').split("&");
    var params = {};
    for(var i=0; i<arr.length; i++){
      var data = arr[i].split("=");
      if(data.length == 2){
        params[data[0]] = data[1];
      }
    }
    return params[key];
  },
  // 判断对象是否为空
  checkObj(obj){
    for (var i in obj) { // 如果为空不会进入循环体
      return true
    }
    return false
  },
  // 判断字符串是否为空
  checkNull(str) {
    if (/^\s*$/.test(str)) {
      return true;
    }
    return false
  },
  // 判断手机号是否正确
  checkPhone(phone) {
    if (!/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[56789]|17[0-9]|19[189]|16[6])[0-9]{8}$/.test(phone)) {
      return '请输入正确的手机号！';
    }
  },
  // 判断 QQ 是否正确
  checkQQ(qq) {
    if (!/^[1-9]\d{4,9}$/.test(qq)) {
      return '请输入正确的 QQ 号！';
    }
  },
  // 判断 E-Mail 是否正确
  checkEmail(email) {
    if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(phone)) {
      return '请输入正确的 E-Mail ！';
    }
  },
  // 判断数字
  checkNumber(number){
    if(/^\d+$/.test(number)){
      return true;
    }
  },
  // 判断银行卡
  checkBank(bank){
    if(/^([1-9]{1})(\d{15}|\d{18})$/.test(bank)){
      return true;
    }
  },
  // 将浮点数点左边的数每三位添加一个逗号
  commafy(num){
  	return num && num
  		.toString()
  		.replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
  			return $2 + ',';
      });
    // or 这项黑科技
    // return num && num.toLocaleString('en-US');
  },
  // 60 秒倒计时
  countDown(time) {
    var flag = setInterval(function(time){
      time--
      if(time === 0) {
        clearInterval(flag)
        return '获取验证码'
      }
      return time
    }, 1000)
  },
  // 判断一个数是另一个数的整数倍
  isMultiple(value, multiple) {
    if(value % multiple !== 0) {
      return `请输入 ${multiple} 的整数倍`
    } else {
      return null
    }
  },
  // 保留两位小数，并四舍五入
  saveDigit(num, digit){
    return parseFloat(num).toFixed(digit)
  },
  // 保留两位小数，不四舍五入
  saveTwoDigit(num){
    return Math.round(num*100)/100
  },
  // 格式化手机号
  formatPhone(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }
};

var config = {
  GAMEID: 112561 // DNF gameId
};

export default {
  business,
  utils,
  config
};
