<template>
  <header class="header">
    <div class="headerTop">
      <span class="headerTopleft" @click="$router.back(-1)"><i class="iconfont icon-zuo"></i></span>
      <span class="headerTopright"><i class="iconfont icon-chakan"></i></span>
    </div>
    <div class="headerCon">
      <div class="avatar"><img src="../../common/img/logo@2x.png" alt="logo" width="100%" /></div>
      <div class="shopName">
        <h1 class="headerTitle">平安银行</h1>
        <span>动态&nbsp;&nbsp;781</span>&nbsp;&nbsp;&nbsp;<span>关注数&nbsp;&nbsp;1871</span>
        <span class="guanzhu" @click="guanzhu = !guanzhu"><i class="iconfont" :class="guanzhu?'icon-dagou1':'icon-tianjia'" style="font-size:14px"></i>关注</span>
      </div>
    </div>
    <div class="headerBottom">
      <span>银行系</span>
      <span>金融科技</span>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      guanzhu: false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.header
  // position fixed
  // z-index 10
  width 100%
  height 165px
  color #fff
  background url('../../common/img/header@2x.png') no-repeat
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
      border-radius 50%
      margin 0 20px
      margin-top 5px
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
