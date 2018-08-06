<template>
  <div class="tabCon">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/home">
        <i class="iconfont icon-weibiaoti2fuzhi14"></i>
        <span class="tab-link">首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/goods">
        <i class="iconfont icon-shangpin-"></i>
        <span class="tab-link">商品</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/news">
        <i class="iconfont icon-xiaoxi1"></i>
        <span class="tab-link">动态</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/activity">
        <i class="iconfont icon-laba"></i>
        <span class="tab-link">活动</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/service">
        <i class="iconfont icon-xingjifuwu"></i>
        <span class="tab-link">服务</span>
      </router-link>
    </div>
  </div>
</template>
<script type="type/ecmascript-6">
export default {}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.tabCon
  box-sizing border-box
  width 100vw
  background-color #ffffff
  border-bottom 1px solid #ededed
  .tab
    display flex
    height 51px
    font-size 16px
    padding-top 5px
    .tab-item
      flex 1
      text-align center
      i
        display block
        font-size 20px
        line-height 30px
      .tab-link
        padding-bottom 5px
        color: #333333
      &.router-link-active
          border-bottom 2px solid #ff6600
          .tab-link
            color #ff6600
          i
            color #ff6600
</style>
