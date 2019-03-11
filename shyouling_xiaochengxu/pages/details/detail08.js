
var app = getApp();
Page({

  data: {
  },

  //图片预览功能
  previewImg01: function (event) {
    var ImageLinkArray = [
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105133766-996842815.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105232186-1645980923.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105241888-385263557.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105255450-819343055.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105308492-1902391692.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105320416-1710357616.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105331214-842319749.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105343858-1630510208.jpg",
    ]
    wx.previewImage({
      current: ImageLinkArray[0], // 当前显示图片的http链接
      urls: ImageLinkArray,// 需要预览的图片http链接列表
    })
  },
  previewImg02: function (event) {
    var ImageLinkArray = [
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105133766-996842815.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105232186-1645980923.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105241888-385263557.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105255450-819343055.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105308492-1902391692.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105320416-1710357616.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105331214-842319749.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105343858-1630510208.jpg",
    ]
    wx.previewImage({
      current: ImageLinkArray[1], // 当前显示图片的http链接
      urls: ImageLinkArray,// 需要预览的图片http链接列表
    })
  },
  previewImg03: function (event) {
    var ImageLinkArray = [
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105133766-996842815.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105232186-1645980923.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105241888-385263557.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105255450-819343055.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105308492-1902391692.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105320416-1710357616.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105331214-842319749.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105343858-1630510208.jpg",
    ]
    wx.previewImage({
      current: ImageLinkArray[2], // 当前显示图片的http链接
      urls: ImageLinkArray,// 需要预览的图片http链接列表
    })
  },
  previewImg04: function (event) {
    var ImageLinkArray = [
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105133766-996842815.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105232186-1645980923.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105241888-385263557.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105255450-819343055.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105308492-1902391692.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105320416-1710357616.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105331214-842319749.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105343858-1630510208.jpg",
    ]
    wx.previewImage({
      current: ImageLinkArray[3], // 当前显示图片的http链接
      urls: ImageLinkArray,// 需要预览的图片http链接列表
    })
  },
  previewImg05: function (event) {
    var ImageLinkArray = [
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105133766-996842815.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105232186-1645980923.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105241888-385263557.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105255450-819343055.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105308492-1902391692.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105320416-1710357616.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105331214-842319749.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105343858-1630510208.jpg",
    ]
    wx.previewImage({
      current: ImageLinkArray[4], // 当前显示图片的http链接
      urls: ImageLinkArray,// 需要预览的图片http链接列表
    })
  },
  previewImg06: function (event) {
    var ImageLinkArray = [
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105133766-996842815.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105232186-1645980923.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105241888-385263557.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105255450-819343055.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105308492-1902391692.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105320416-1710357616.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105331214-842319749.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105343858-1630510208.jpg",
    ]
    wx.previewImage({
      current: ImageLinkArray[5], // 当前显示图片的http链接
      urls: ImageLinkArray,// 需要预览的图片http链接列表
    })
  },
  previewImg07: function (event) {
    var ImageLinkArray = [
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105133766-996842815.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105232186-1645980923.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105241888-385263557.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105255450-819343055.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105308492-1902391692.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105320416-1710357616.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105331214-842319749.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105343858-1630510208.jpg",
    ]
    wx.previewImage({
      current: ImageLinkArray[6], // 当前显示图片的http链接
      urls: ImageLinkArray,// 需要预览的图片http链接列表
    })
  },
  previewImg08: function (event) {
    var ImageLinkArray = [
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105133766-996842815.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105232186-1645980923.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105241888-385263557.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105255450-819343055.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105308492-1902391692.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105320416-1710357616.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105331214-842319749.jpg",
      "https://img2018.cnblogs.com/blog/1044471/201903/1044471-20190311105343858-1630510208.jpg",
    ]
    wx.previewImage({
      current: ImageLinkArray[7], // 当前显示图片的http链接
      urls: ImageLinkArray,// 需要预览的图片http链接列表
    })
  },

  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
