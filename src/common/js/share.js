import axios from 'axios'
import wx from 'weixin-js-sdk'
var qs = require('qs')
export default {
  wxShowMenu: function (title1, desc1, imgUrl) {
    var url = encodeURIComponent(location.href.split('#')[0])
    // var msg = url.replace('#', '&jin=')
    axios.post('http://192.168.3.2/wt/getshare.php', qs.stringify({url: url})).then(function (data) {
      console.log(1)
      console.log(data.data)
      wx.config({
        debug: true, // 生产环境需要关闭debug模式
        appId: data.data.appId, // appId通过微信服务号后台查看
        timestamp: data.data.timestamp, // 生成签名的时间戳
        nonceStr: data.data.noncestr, // 生成签名的随机字符串
        signature: data.data.signature, // 签名
        jsApiList: [ // 需要调用的JS接口列表
          'onMenuShareTimeline', // 分享给好友
          'onMenuShareAppMessage', // 分享到朋友圈
          'showMenuItems',
          'hideMenuItems'
        ]
      })
      wx.ready(function () {
        wx.checkJsApi({
          jsApiList: ['showMenuItems'],
          success: function (res) {
            wx.showMenuItems({
              menuList: [
                'menuItem:share:appMessage', // 发送给朋友
                'menuItem:share:timeline' // 分享到朋友圈
              ]
            })
          }
        })
        // 分享到朋友圈
        wx.onMenuShareTimeline({
          title: title1, // 分享标题
          desc: desc1, // 分享描述
          link: data.data.url, // 分享链接
          imgUrl: imgUrl // 分享图标
        })
        // 分享给朋友
        wx.onMenuShareAppMessage({
          title: title1, // 分享标题
          desc: desc1, // 分享描述
          link: data.data.url, // 分享链接
          imgUrl: imgUrl // 分享图标
        })
      })
    })
  }
}
