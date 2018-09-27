<template>
  <div class="home">
    <div v-if="true" class="slider-wrapper">
      <Slider>
        <div v-for="(item,index) in 3" :key="index">
          <a href="https://fjhhjr.com/wt/LandingPpage.html?mid=54413">
            <img class="needsclick" src="../../common/img/401447491201136285.jpg">
          </a>
        </div>
      </Slider>
    </div>
    <div class="home-con">
      <div class="hot-title">
        <div class="title-logo"></div>
        <span class="title-text">爆款推荐</span>
        <router-link to="/goods" tag="span" class="title-all">查看全部<i class="iconfont icon-gengduo"></i></router-link>
      </div>
      <div class="hot-list">
        <div class="message-con1" v-if="goodlists.length == 0">暂无产品~</div>
        <div class="hot-item" v-for="(item, index) in goodlists" :key="index" v-if="index<=2">
          <a class="item-limit" :href="url+item.id">
            <h1>{{item.wt_maxfund+ '万'}}</h1>
            <span>最高额度(元)</span>
          </a>
          <a class="item-details" :href="url+item.id">
            <h1>{{item.title}}</h1>
            <p>{{item.subtitle}}</p>
            <span class="lv">{{item.name}}</span>
            <span class="dy">{{item.merchname}}</span>
          </a>
        </div>
      </div>
      <div class="hot-title">
        <div class="title-logo"></div>
        <span class="title-text">看头条会更赚钱</span>
        <router-link to="/news" tag="span" class="title-all">查看全部<i class="iconfont icon-gengduo"></i></router-link>
      </div>
      <div class="news-list">
        <div class="message-con1" v-if="NewsData.length == 0">暂无新闻~</div>
        <div class="news-item" v-for="(item,index) in NewsData" :key="index" v-if="index<=2">
          <div class="news-title">
          <img :src="imgUrl+logo" width="20%">
          <div class="news-title-text">
            <h1 style="margin-bottom:5px;font-size:14px;color:#666666">{{item.title}}</h1>
            <span style="font-size:11px;color:#999999">{{item.createtime | str}}</span>
          </div>
          <div class="guan" style="font-size:14px">
            <i class="iconfont icon-love-b"></i>
            <span>关注</span>
          </div>
          </div>
          <a class="news-con" :href="listUrl+item.id">
            <div class="news_img">
              <img :src="imgUrl+item.images" v-if="item.images" width="100%">
              <img src="../../common/img/news1@2x.png"  v-else  width="100%">
            </div>
            <div class="con-details">
              <h1>{{item.tags}}</h1>
              <p>{{item.content | getSimpleText}}</p>
            </div>
          </a>
          <div class="news-bottom">
            <i class="iconfont icon-chakan1"></i><span>{{item.views}}</span>
            <i class="iconfont icon-dianzan"></i><span>{{item.views}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from '../../components/Slider/Slider'
// import {getGoods} from '../../common/js/goods.js'
import { mapState } from 'vuex'
import MyAjax from '../../common/js/ajax.js'
var qs = require('qs')
export default {
  data () {
    return {
      data: [],
      goodlists: [],
      url: 'https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=wt.goods&id=',
      NewsData: '',
      imgUrl: 'https://fjhhjr.com/attachment/',
      listUrl: 'https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=sns.post&id='
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  async created () {
    const res = await MyAjax('./index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=wt.goods.search', qs.stringify({storeid: this.storeid}), 'POST')
    if (res.status === 1) {
      this.data = res.result.data
      this.goodlists = this.data
    }
    const result = await MyAjax(`./index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=wt.store.getlist&bbsid=${this.bbsid}`)
    if (result.status === 1) {
      this.NewsData = result.result.data
    }
  },
  computed: {
    ...mapState(['bbsid', 'storeid', 'logo'])
  },
  filters: {
    str: function (data) {
      data = data.substring(0, 10)
      return data
    },
    getSimpleText: function (html) {
      var re1 = new RegExp('<.+?>', 'g') // 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = html.replace(re1, '') // 执行替换成空字符
      var re2 = msg.substring(0, 50)
      return re2 + '...'
    }
  },
  components: {
    Slider
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.home
  width 100%
  background-color #f5f5f5
  // position absolute
  // top 205px
  .slider-wrapper
    position relative
    width 100%
    overflow hidden
  .home-con
    width 100%
    .hot-title
      position relative
      width 100%
      height 35px
      box-sizing border-box
      padding 5px 10px
      background-color #ffffff
      bottom-border-1px(#ededed)
      .title-logo
        display inline-block
        height 100%
        width 4px
        background-color #ff6600
        margin-right 10px
        border-radius 20px
      .title-text
        position absolute
        display inline-block
        line-height 25px
        color #333333
        font-size 16px
      .title-all
        position absolute
        right 10px
        display inline-block
        line-height 25px
        font-size 14px
        color #999999
        .iconfont
          font-size 14px
    .hot-list
      width 100%
      position relative
      background-color #ffffff
      padding 15px 0
      bottom-border-20px(#ededed)
      .message-con1
        width 100%
        height 80px
        background-color #ffffff
        box-sizing border-box
        padding 20px 18px
        font-size 16px
        text-align center
        line-height 40px
        color #333333
      .hot-item
        display flex
        justify-content center
        height 90px
        padding 15px
        box-sizing border-box
        .item-limit
          flex 3
          text-align center
          border-right 2px solid #e6e6e6
          h1
            color #f94661
            font-size 30px
            margin 5px 0
          span
            font-size 11px
            color #999999
        .item-details
          flex 4
          padding-left 20px
          box-sizing border-box
          h1
            color #333333
            font-size 16px
          p
            color #333333
            font-size 11px
            margin 5px 0 10px
          span
            display inline-block
            font-size 10px
            padding 2px 5px
          .lv
            border 1px solid #0e2ea5
            color #0e2ea5
          .dy
            border 1px solid #0ea728
            color #0ea728
    .news-list
      width 100%
      background-color #ffffff
      .message-con1
        width 100%
        height 80px
        background-color #ffffff
        box-sizing border-box
        padding 20px 18px
        font-size 16px
        text-align center
        line-height 40px
        color #333333
      .news-item
        width 100%
        box-sizing border-box
        padding 10px 10px
        bottom-border-1px(#ededed)
        .news-title
          display flex
          align-items center
          margin-bottom 10px
          img
            width 15%
          .news-title-text
            width 65%
            box-sizing border-box
            padding-left 10px
          .guan
            width 20%
            text-align center
        .news-con
          display flex
          min-height 70px
          margin-bottom 10px
          .news_img
            width 30%
          .con-details
            width 70%
            box-sizing border-box
            padding-left 10px
            h1
              font-size 13px
              line-height 18px
              color #333333
              margin-bottom 8px
            p
              color #666666
              font-size 11px
              line-height 17px
              box-sizing border-box
              padding-right 10px
        .news-bottom
          text-align right
          box-sizing border-box
          padding-right 12px
          font-size 13px
</style>
