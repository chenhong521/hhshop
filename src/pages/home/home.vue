<template>
  <div class="home">
    <div v-if="true" class="slider-wrapper">
      <Slider>
        <div v-for="item in 3" :key="item.index">
          <a href="#">
            <img class="needsclick" src="../../common/img/banner@2x.png">
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
        <div class="hot-item" v-for="item in 3" :key="item">
          <div class="item-limit">
            <h1>500万</h1>
            <span>最高额度(元)</span>
          </div>
          <div class="item-details">
            <h1>平安-宅E经营贷</h1>
            <p>月费率0.98%</p>
            <span class="lv">低利率</span>
            <span class="dy">有抵押</span>
          </div>
        </div>
      </div>
      <div class="hot-title">
        <div class="title-logo"></div>
        <span class="title-text">看头条会更赚钱</span>
        <router-link to="/news" tag="span" class="title-all">查看全部<i class="iconfont icon-gengduo"></i></router-link>
      </div>
      <div class="news-list">
        <div class="news-item" v-for="item in 3" :key="item">
          <div class="news-title">
            <img src="../../common/img/news@2x.png" alt="news_logo" width="20%">
            <div class="news-title-text">
              <h1 style="margin-bottom:5px;font-size:14px;color:#666666">平安银行</h1>
              <span style="font-size:11px;color:#999999">07-27</span>
            </div>
            <div class="guan" style="font-size:14px">
              <i class="iconfont icon-love-b"></i>
              <span>关注</span>
            </div>
          </div>
          <div class="news-con">
            <div class="news_img">
              <img src="../../common/img/news1@3x.png" alt="news_img" width="100%">
            </div>
            <div class="con-details">
              <h1>平安银行打造“更懂您”的一站式</h1>
              <p>胡跃飞表示：去年下半年以来，党的十九大、全国金融工作会议和中工作会议和中央...</p>
            </div>
          </div>
          <div class="news-bottom">
            <i class="iconfont icon-chakan1"></i><span>1321</span>
            <i class="iconfont icon-dianzan"></i><span>987</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from '../../components/Slider/Slider'
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {},
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
