var szjtxt = require('../../utils/SLQM.js');
var text_index = 1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    st: "一东",
    sc: "云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tabletext = szjtxt['s' + text_index];
    var that = this;
    that.setData({
      st: tabletext["t"] ,
      sc: tabletext["c"]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  nextPage: function () {

    if (text_index < 90) {
      text_index = text_index + 1;
    } else {
      text_index = 90;
    }
    var tabletext = szjtxt['s' + text_index];
    var that = this;
    that.setData({
      st: tabletext["t"],
      sc: tabletext["c"]
    })

  },
  upPage: function () {
    if (text_index > 1) {
      text_index = text_index - 1;
    } else {
      text_index = 1;
    }
    var tabletext = szjtxt["s" + text_index];
    var that = this;
    that.setData({
      st: tabletext["t"],
      sc: tabletext["c"]
    })
  }


})