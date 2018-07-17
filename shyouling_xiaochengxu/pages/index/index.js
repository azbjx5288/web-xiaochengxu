
var app = getApp();
Page({

  data: {
  },
  


  gotoserver_01: function () {
    wx.navigateTo({
      url: '../details/detail01',
    })
  },

  gotoserver_02: function () {
    wx.navigateTo({
      url: '../details/detail02',
    })
  },

  gotoserver_03: function () {
    wx.navigateTo({
      url: '../details/detail03',
    })
  },

  gotoserver_04: function () {
    wx.navigateTo({
      url: '../details/detail04',
    })
  },

  gotoserver_05: function () {
    wx.navigateTo({
      url: '../details/detail05',
    })
  },

  gotoserver_06: function () {
    wx.navigateTo({
      url: '../details/detail06',
    })
  },

  gotoserver_07: function () {
    wx.navigateTo({
      url: '../details/detail07',
    })
  },

  gotoserver_08: function () {
    wx.navigateTo({
      url: '../details/detail08',
    })
  },

  //转发时获取群信息
  onShareAppMessage: function () {
    return {
      title: '上海友灵代理记账有限公司',
      desc: '小程序',
      path: '/pages/index/index'
    }
  }

})
