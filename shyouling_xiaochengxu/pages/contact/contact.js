var app = getApp();

Page({
  data: {
  },
  
  // //转发时获取群信息
  // onShareAppMessage: function () {
  //   return {
  //     title: '上海友灵代理记账有限公司',
  //     desc: '小程序',
  //     path: '/pages/index/index'
  //   }
  // },

// <!--复制操作 -->
  copyTBL: function (e) {

    wx.setClipboardData({
      data: '234064346@qq.com',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              　title: '复制成功'
　　　　　　　})
          }
        })
      }
    })
  }  ,

  //联系客服
  contact: function () {
    wx.navigateTo({
      url: 'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=ACCESS_TOKEN',
    })
  },

  //拨打手机
  callMobilePhoneTap: function () {
    wx.makePhoneCall({
      phoneNumber: '13321907683',
      leading: "拨打热线",
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
   //拨打手机
  callMobilePhoneTap2: function () {
    wx.makePhoneCall({
      phoneNumber: '15000811167',
      leading: "拨打热线",
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  //拨打手机
  callMobilePhoneTap3: function () {
    wx.makePhoneCall({
      phoneNumber: '021-37780095',
      leading: "拨打热线",
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  //地图导航  高德
  //谷歌地图：31.1168918718,121.2852613281
  Mapnavigation: function (e) {
    wx.openLocation({
      type: 'wgs84',
      latitude: 31.1168918718,
      longitude: 121.2852613281,
      name: '上海友灵企业登记代理有限公司',
      address: '上海市松江区沪松公路2511弄泗泾五金城大厦1号楼401室',
      success: function () {
        console.log("地图导航成功！")
      },
      fail: function () {
        console.log("地图导航失败！")
      }
    
    })
  },

})
