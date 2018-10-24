var szjtxt = require('../../../utils/QZW.js');
var utils = require('../../../utils/util.js');
var arr = new Array();
var game_arr = new Array();
var text_index = 1;
var gsv1 = "";
var gsv2 = "";

var tgsv1 = "";
var tgsv2 = "";

var count = 0;
// pages/games/SZJ/SZJ.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (var i = 1; i <= 63; i++) {
      arr.push(i);
    }
    game_arr = utils.roa(arr, 10);
    text_index = game_arr.pop();
    if (text_index != undefined) {
      var tabletext = szjtxt['s' + text_index];
      var listtext = tabletext.split('');
      var that = this;
      that.setData({
        s1: listtext[0],
        s2: " ? ",
        s3: listtext[2],
        s4: listtext[3],
        s5: listtext[4],
        s6: listtext[5],
        s7: listtext[6],
        s8: listtext[7],
        s9: " ? ",
        s10: listtext[9],
        s11: listtext[10],
        s12: listtext[11],
        s13: listtext[12],
        s14: listtext[13],
        s15: listtext[14],
        s16: listtext[15],
        gs1: listtext[1],
        gs2: "子",
        gs3: listtext[8],
        
      })
      tgsv1 = listtext[1];
      tgsv2 = listtext[8];
    }

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
  changegs: function (e) {

    var gsv = e.currentTarget.dataset.gsv;
    var that = this;
    if (gsv1 == "") {
      gsv1 = gsv;
      that.setData({
        gsv1: gsv1,
        gsv2: gsv2,
      })
    } else if (gsv2 == "") {
      gsv2 = gsv;
      that.setData({
        gsv1: gsv1,
        gsv2: gsv2,
      })
      if (gsv1 == tgsv1 && gsv2 == tgsv2) {
        count = count + 1;
        that.setData({
          count: count
        })

        wx.showModal({
          title: '提示',
          content: '恭喜，你答对了！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })

      } else {
        wx.showModal({
          title: '提示',
          content: '别灰心，正确答案是：' + tgsv1 + ' ' + tgsv2,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }

      if (count >= 10) {
        wx.showModal({
          title: '提示',
          content: '恭喜，你过得了满分！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              wx.switchTab({
                url: '/pages/games/GIndex'
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        count = 0;

      } else {
        gsv1 = "";
        gsv2 = "";

        text_index = game_arr.pop();
        if (text_index != undefined) {
          var tabletext = szjtxt['s' + text_index];
          var listtext = tabletext.split('');
          that.setData({
            s1: listtext[0],
            s2: " ? ",
            s3: listtext[2],
            s4: listtext[3],
            s5: listtext[4],
            s6: listtext[5],
            s7: listtext[6],
            s8: listtext[7],
            s9: " ? ",
            s10: listtext[9],
            s11: listtext[10],
            s12: listtext[11],
            s14: listtext[13],
            s15: listtext[14],
            s16: listtext[15],
            gs1: listtext[1],
            gs2: "子",
            gs3: listtext[8],
            gsv1: gsv1,
            gsv2: gsv2,
          })
          tgsv1 = listtext[1];
          tgsv2 = listtext[8];
        } else {
          if (count < 10) {
            wx.showModal({
              title: '提示',
              content: '已经很棒了，再接再厉！',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  wx.switchTab({
                    url: '/pages/games/GIndex'
                  })
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
          count = 0;

        }
      }



    } else {
      gsv1 = gsv;
      gsv2 = "";

      that.setData({
        gsv1: gsv1,
        gsv2: gsv2,
      })
    }
  }
})