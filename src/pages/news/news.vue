<template>
  <div class="news-list">
    <div class="news-item" v-for="item in 8" :key="item">
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
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
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
