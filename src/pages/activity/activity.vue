<template>
  <div class="activity">
    <div class="card">
      <div class="card-title">
        <span>贷款现金红包</span>
      </div>
      <div class="card-con">
        <div class="con-left">
          <div>
            <span>￥&nbsp;</span><span style="font-size:30px">880</span><span>&nbsp;元</span>
          </div>
        </div>
        <div class="con-right">
          <p>在线下单任意一款贷款产品，并成功借款，借款金额大于等于80000元，订单完成后，红包将自动发放至您的账户</p>
        </div>
      </div>
      <div class="card-bot">
        <span>立即使用</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">
        <span>理财现金红包</span>
      </div>
      <div class="card-con">
        <div class="con-left">
          <div>
            <span>￥&nbsp;</span><span style="font-size:30px">100</span><span>&nbsp;元</span>
          </div>
        </div>
        <div class="con-right">
          <p>在理财板块开户（不用下单），开户成功，红包将自动发放至您的账户</p>
        </div>
      </div>
      <div class="card-bot">
        <span>立即使用</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">
        <span>信用卡现金红包</span>
      </div>
      <div class="card-con">
        <div class="con-left">
          <div>
            <span>￥&nbsp;</span><span style="font-size:30px">880</span><span>&nbsp;元</span>
          </div>
        </div>
        <div class="con-right">
          <p>在线办卡，申领成功，红包将自动发放至您的账户</p>
        </div>
      </div>
      <div class="card-bot">
        <span>立即使用</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
.activity
  width 100%
  box-sizing border-box
  // padding-top 10px
  background-color #f5f5f5
  padding-top 10px
  .card
    width 100%
    color #ffffff
    background url('../../common/img/ac@2x.png') 100% no-repeat
    background-size cover
    box-sizing border-box
    @media screen and (max-width: 320px)
      height 144px
    @media (min-width: 321px) and (max-width: 360px)
      height 163px
    @media (min-width: 361px) and (max-width: 376px)
      height 169px
    @media (min-width: 377px) and (max-width: 415px)
      height 187px
    @media (min-width: 416px) and (max-width: 768px)
      height 350px
    @media (min-width: 770px)
      height 463px
    .card-title
      width 100%
      height 25%
      line-height 38px
      box-sizing border-box
      padding-left 20px
      font-size 18px
    .card-con
      display flex
      box-sizing border-box
      padding-left 20px
      height 40%
      .con-left
        flex 1
        height 100%
        line-height 260%
        div
          border-right 2px solid #ffffff
      .con-right
        flex 2
        p
          font-size 12px
          box-sizing border-box
          padding 0px 15px
          line-height 15px
          text-align justify
    .card-bot
      width 100%
      height 35%
      position relative
      span
        position absolute
        color #db4130
        right 6%
        bottom 38%
        font-size 12px
        display inline-block
        box-sizing border-box
        padding 4px 10px
        border 1px solid #db4130
        border-radius 10px
</style>
