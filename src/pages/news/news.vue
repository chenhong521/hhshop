<template>
  <div class="news-list">
    <div class="message-con1" v-if="NewsData.length == 0">暂无信息~</div>
    <div class="news-item" v-for="item in NewsData" :key="item.index">
      <div class="news-title">
        <img :src='imgUrl+logo' width="20%">
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
          <img :src="imgUrl+item.images" v-if="item.images" alt="news_img" width="100%">
          <img src="../../common/img/news1@2x.png"  v-else alt="news_img" width="100%">
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
</template>
<script>
import MyAjax from '../../common/js/ajax.js'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      NewsData: '',
      imgUrl: 'https://fjhhjr.com/attachment/',
      listUrl: 'https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=sns.post&id='
    }
  },
  async created () {
    const result = await MyAjax(`./index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=wt.store.getlist&bbsid=${this.bbsid}`)
    console.log(result)
    if (result.status === 1) {
      this.NewsData = result.result.data
    }
    // console.log(this.NewsData)
  },
  computed: {
    ...mapState(['bbsid', 'logo'])
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
  }
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
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
