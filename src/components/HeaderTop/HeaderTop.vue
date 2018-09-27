<template>
  <header class="header">
    <div class="headerTop">
      <a class="headerTopleft" href="https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile"><i class="iconfont icon-zuo"></i></a>
      <span class="headerTopright"><i class="iconfont icon-chakan"></i></span>
    </div>
    <div class="headerCon">
      <div class="avatar"><img :src="logoUrl+TopData.logo" width="100%" /></div>
      <div class="shopName">
        <h1 class="headerTitle">{{TopData.merchname}}</h1>
        <span>动态&nbsp;&nbsp;{{TopData.c}}</span>&nbsp;&nbsp;<span>关注数&nbsp;&nbsp;{{TopData.follow}}</span>
        <span class="guanzhu" @click="guanzhu"><i class="iconfont" :class="isfollow===1?'icon-dagou1':'icon-tianjia'" style="font-size:14px"></i>关注</span>
      </div>
    </div>
    <div class="headerBottom">
      <span>银行系</span>
      <span>金融科技</span>
    </div>
  </header>
</template>

<script>
import MyAjax from '../../common/js/ajax.js'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      TopData: '',
      logoUrl: 'https://fjhhjr.com/attachment/',
      isfollow: 0
    }
  },
  async created () {
    const result = await MyAjax(`./index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=wt.store.getinfo&storeid=${this.storeid}`)
    if (result.status === 1) {
      this.TopData = result.result.data
      this.isfollow = result.result.data.isfollow
    }
    // this.WXConfig.wxShowMenu(`商户店铺-${this.TopData.merchname}`, '', `https://fjhhjr.com/attachment/${this.TopData.logo}`)
    this.$store.dispatch('reBbsid', this.TopData.bbsid)
    this.$store.dispatch('relogo', this.TopData.logo)
  },
  methods: {
    getUrlKey (name) {
      // eslint-disable-next-line
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    },
    async guanzhu () {
      if (this.isfollow === 0) {
        var isguan = await MyAjax(`./index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=wt.store.follow&bbsid=${this.TopData.bbsid}`)
        if (isguan.status === 1) {
          this.isfollow = 1
        }
      }
    }
  },
  computed: {
    ...mapState(['storeid'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.header
  width 100%
  height 165px
  color #fff
  background url($url) no-repeat
  background-size cover
  .headerTop
    width 100%
    height 50px
    position relative
    .headerTopleft
      line-height 50px
      position absolute
      left 20px
      .iconfont
        font-size 25px
        color #ffffff
    .headerTopright
      line-height 50px
      position absolute
      right 20px
      .iconfont
        font-size 25px
  .headerCon
    height 80px
    display flex
    .avatar
      height 65px
      width 65px
      margin 0 20px
      margin-top 5px
      background-color #ffffff
      border-radius 50%
      img
        border-radius 50%
    .shopName
      width 66%
      h1
        margin-top 20px
        margin-bottom 10px
        font-size 18px
      span
        display inline-block
        font-size 14px
      .guanzhu
        float right
        display inline-block
        background-color rgba(119,112,124,0.8)
        border-radius 10px
        padding 4px 9px 4px 5px
      clearFix()
  .headerBottom
    display table-cell
    width 100%
    height 35px
    box-sizing border-box
    padding-left 20px
    font-size 14px
    vertical-align middle
    span
      display inline-block
      line-height 22px
      background-color rgba(119,112,124,0.8)
      padding 0px 10px 0px
      margin 0px 3px 0px
</style>
