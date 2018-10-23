//获取应用实例

const app = getApp()
function delHtmlTag(str) {
  return str.replace(/<[^>]+>/g, "");//去掉所有的html标记
}
function date(str) {
  let date = new Date(str);
  function p(s) {
    return s < 10 ? '0' + s : s;
  }
  return date.getFullYear() + '-' + p((date.getMonth() + 1)) + '-' + p(date.getDate()) + '  ' + p(date.getHours()) + ':' + p(date.getMinutes()) + ':' + p(date.getSeconds());
}
Page({
  data: {
    username: '',
    useremail: '',
    message: '',
    messages: {},
    alert: ''
  },
  gotoBlog:function (options) {
    wx.navigateTo({
      url: '../guoxue/guoxue',
    })
  }
})