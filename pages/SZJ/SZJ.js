var szjtxt = require('../../utils/SZJ-VAR.js');
var text_index=1;
// pages/SZJ/SZJ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s1:"人",
    s2: "之",
    s3: "初",
    s4: "性",
    s5: "本",
    s6: "善",
    s7: "性",
    s8: "相",
    s9: "近",
    s10: "习",
    s11: "相",
    s12: "远",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tabletext = szjtxt['s' + text_index];
    var listtext = tabletext.split('');
    var that = this;
    that.setData({
      s1: listtext[0],
      s2: listtext[1],
      s3: listtext[2],
      s4: listtext[3],
      s5: listtext[4],
      s6: listtext[5],
      s7: listtext[6],
      s8: listtext[7],
      s9: listtext[8],
      s10: listtext[9],
      s11: listtext[10],
      s12: listtext[11]
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
  nextPage:function(){
    
    if (text_index<118){
      text_index = text_index+1;
    }else{
      text_index=118;
    }
    var tabletext = szjtxt['s' + text_index];
    var listtext = tabletext.split('');
    var that = this;
    that.setData({
      s1: listtext[0],
      s2: listtext[1],
      s3: listtext[2],
      s4: listtext[3],
      s5: listtext[4],
      s6: listtext[5],
      s7: listtext[6],
      s8: listtext[7],
      s9: listtext[8],
      s10: listtext[9],
      s11: listtext[10],
      s12: listtext[11]
    })

  },
  upPage: function () {
    if (text_index >1) {
      text_index = text_index - 1;
    } else {
      text_index = 1;
    }
    var tabletext = szjtxt["s" + text_index];
    var listtext = tabletext.split('');
    var that = this;
    that.setData({
      s1: listtext[0],
      s2: listtext[1],
      s3: listtext[2],
      s4: listtext[3],
      s5: listtext[4],
      s6: listtext[5],
      s7: listtext[6],
      s8: listtext[7],
      s9: listtext[8],
      s10: listtext[9],
      s11: listtext[10],
      s12: listtext[11]
    })
  }


})