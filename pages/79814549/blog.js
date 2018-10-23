var WxParse = require('../../wxParse/wxParse.js');
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://blog.csdn.net/xvshu/article/details/81102203',
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'text/css'
      },
      success: function (res) {
        var article = res.data;
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    })
  }
})
