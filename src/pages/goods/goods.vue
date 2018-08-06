<template>
  <div class="goods">
    <div class="goods-tab">
      <div class="tab"  @click="showTab1=!showTab1,showTab2=false"><span>综合排序</span><i class="iconfont icon-sanjiaoxing-down"></i></div>
      <div class="tab" @click="showTab2=!showTab2,showTab1=false"><span>产品类型</span><i class="iconfont icon-sanjiaoxing-down"></i></div>
    </div>
      <div class="search-tab" @touchmove.prevent v-if="showTab1">
        <a class="tabitem">综合排序</a>
        <a class="tabitem">通过率(由高到低)</a>
        <a class="tabitem">利息(由高到低)</a>
        <a class="tabitem">额度(由高到低)</a>
        <a class="tabitem">申请数(由高到低)</a>
      </div>
      <div class="search-tab" @touchmove.prevent v-if="showTab2" >
        <a class="tabitem" @click="fenlei('1174')">贷款</a>
        <a class="tabitem" @click="fenlei('')">理财</a>
        <a class="tabitem" @click="fenlei('1177')">信用卡</a>
        <a class="tabitem" @click="fenlei('')">保险</a>
      </div>
      <div class="yy" @touchmove.prevent v-if="showTab1" @click="showTab1=!showTab1,showTab2=false"></div>
      <div class="yy" @touchmove.prevent v-if="showTab2" @click="showTab2=!showTab2,showTab1=false"></div>
    <div class="goods-list">
      <ul >
        <li v-if="goodlists.length>0" class="item" v-for="item in goodlists" :key="item.index">
          <div class="icon">
            <img :src="imgUrl+item.thumb" width="60" height="60" >
          </div>
          <div class="text">
            <h1 class="name">{{item.title}}&nbsp;<span class="logo">{{item.pcate|iSdaya}}</span></h1>
            <p class="text-p">
              <!-- <span class="text-con">可贷&nbsp;<i style="font-size:15px;color:#e74040;font-style:normal">500万</i></span> -->
              <span class="text-con">{{item.subtitle}}</span>
            </p>
            <p style="font-size:11px;color:#a3a3a3"><span style="font-size:11px;color:#a3a3a3">{{item.shorttitle | fenge0}}&nbsp;<i style="font-size:15px;color:#e74040;font-style:normal">{{item.shorttitle | fenge1}}</i></span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getGoods} from '../../common/js/goods.js'
// import MyAjax from '../../common/js/ajax.js'
var datas = []
export default {
  data () {
    return {
      showTab1: false,
      showTab2: false,
      url: `http://192.168.3.2/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=ajax.ajax.getallgoods`,
      goodlists: {
        type: Array,
        default: []
      },
      imgUrl: 'http://192.168.3.2/attachment/',
      merchid: 98,
      data: []
    }
  },
  filters: {
    iSdaya (Num) {
      if (Num === '1180') {
        return '信用贷'
      } else if (Num === '1174') {
        return '抵押贷'
      } else if (Num === '1177') {
        return '信用卡'
      } else {
        return '有抵押'
      }
    },
    fenge0 (str) {
      var arr = str.split(':')
      return arr[0]
    },
    fenge1 (str) {
      var arr = str.split(':')
      return arr[1]
    }
  },
  async created () {
    const result = await getGoods(this.merchid)
    // console.log(result.data)
    if (result.data.status === 1) {
      this.data = result.data.result.data
      this.goodlists = this.data
      for (var v of this.data) {
        if (!datas.hasOwnProperty(v['pcate'])) datas[v['pcate']] = []
        datas[v['pcate']].push(v)
      }
      console.log(datas)
    }
  },
  methods: {
    fenlei (str) {
      // this.showTab2 = false
      // this.showTab1 = false
      // var num = str
      // var newArr = this.goodlists.filter(function (pcate) {
      //   return pcate.pcate === num
      // })
      this.showTab2 = false
      this.showTab1 = false
      this.goodlists = datas[str]
    }
  },
  watch: {
    goodlists: function (a, b) {
    }
  }
}
</script>
<style lang="stylus" scoped>
.goods
  width 100%
  background-color #ffffff
  position relative
  .goods-tab
    display flex
    width 100%
    height 32px
    line-height 32px
    background-color #f5f5f5
    font-size 15px
    border-bottom 1px solid #ededed
    .tab
      flex 1
      text-align center
      &.tab:hover
        color #ff6600
  .search-tab
    display flex
    width 100%
    height 100px
    background-color #ffffff
    box-sizing border-box
    padding 20px 16px
    justify-content flex-start
    align-items center
    flex-wrap wrap
    .tabitem
      width 30%
      float left
      height 22px
      text-align center
      line-height 22px
      border 1px solid #b1afb0
      box-sizing border-box
      font-size 13px
      color #b1afb0
      margin-right 3.3%
      @media screen and (max-width: 320px)
        font-size 12px
      &.tabitem:hover
          color #ff6600
          border 1px solid #ff6600
  .yy
    opacity 0.3
    width 100%
    height 100%
    background #000000
    position absolute
    top 61
    z-index 1
  .goods-list
    width 100%
    ul
      width 100%
      .item
        width 100%
        height 100px
        display flex
        padding 20px
        box-sizing border-box
        border-bottom 1px solid #ededed
        .icon
          margin-right 30px
          flex 1
        .text
          position relative
          flex 4
          .name
            font-size 15px
            color #333333
            vertical-align middle
            .logo
              font-size 11px
              display inline-block
              border 1px solid #009944
              color #009944
              margin-left 15%
          .text-p
            margin 8px 0
            .text-con
              display inline-block
              // margin-right 25px
              line-height 13px
              font-size 11px
              color #a3a3a3
</style>
