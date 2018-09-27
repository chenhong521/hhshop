<template>
  <div class="goods">
    <div class="goods-tab">
      <div class="tab"  @click="showTab1=!showTab1,showTab2=false"><span>综合排序</span><i class="iconfont icon-sanjiaoxing-down"></i></div>
      <div class="tab" @click="showTab2=!showTab2,showTab1=false"><span>产品类型</span><i class="iconfont icon-sanjiaoxing-down"></i></div>
    </div>
    <div class="search-tab" @touchmove.prevent v-if="showTab1">
      <a class="tabitem" @click="Mysort(sortData, 'displayorder')">综合排序</a>
      <!-- <a class="tabitem" @click="Mysort(sortData, 'wt_rate')">通过率(由高到低)</a> -->
      <a class="tabitem" @click="Mysort(sortData, 'wt_rate')">利息(由低到高)</a>
      <a class="tabitem" @click="Mysort(sortData, 'wt_maxfund')">额度(由低到高)</a>
      <a class="tabitem" @click="Mysort(sortData, 'sales')">申请数(由低到高)</a>
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
      <ul v-if="showUl">
        <li class="message-con1" v-if="goodlists.length == 0">暂无产品~</li>
        <li class="item" v-for="item in goodlists" :key="item.index">
          <div class="icon">
            <img :src="imgUrl+item.thumb" width="60" height="60" >
          </div>
          <a class="text" :href="item.type == '1' ? (goodslisturl+item.id) : (typeUrl==''?item.virtualsendcontent:typeUrl)">
            <h1 class="name">{{item.title}}<span class="logo">{{item.name}}</span></h1>
            <p class="text-p">
              <span class="text-con">最高可贷&nbsp;<i style="font-size:15px;color:#e74040;font-style:normal">{{item.wt_maxfund+'万'}}</i></span>
              <span class="text-con">&nbsp;月利率：<i style="font-size:15px;color:#e74040;font-style:normal">{{item.wt_rate+'%'}}</i></span>
            </p>
            <p class="text-p" style="margin:0">
              <span class="text-con">期限：</span>
              <i style="font-size:15px;color:#e74040;font-style:normal">{{item.wt_maxtime/12+'年'}}</i>&nbsp;&nbsp;&nbsp;<i style="font-size:15px;color:#e74040;font-style:normal">{{item.sales}}</i><span class="text-con">人申请</span>
            </p>
          </a>
        </li>
      </ul>
      <ul v-else>
        <li class="message-con1" v-if="sortData.length == 0">暂无产品~</li>
        <li class="item" v-for="item in sortData" :key="item.index">
          <div class="icon">
            <img :src="imgUrl+item.thumb" width="60" height="60" >
          </div>
          <a class="text" :href="goodslisturl+item.id">
            <h1 class="name">{{item.title}}<span class="logo">{{item.name}}</span></h1>
            <p class="text-p">
              <span class="text-con">最高可贷&nbsp;<i style="font-size:15px;color:#e74040;font-style:normal">{{item.wt_maxfund+'万'}}</i></span>
              <span class="text-con">&nbsp;月利率：<i style="font-size:15px;color:#e74040;font-style:normal">{{item.wt_rate+'%'}}</i></span>
            </p>
            <p class="text-p" style="margin:0">
              <span class="text-con">期限：</span><i style="font-size:15px;color:#e74040;font-style:normal">{{item.wt_maxtime/12+'年'}}</i>&nbsp;&nbsp;&nbsp;<i style="font-size:15px;color:#e74040;font-style:normal">{{item.sales}}</i><span class="text-con">人申请</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import {getGoods} from '../../common/js/goods.js'
import MyAjax from '../../common/js/ajax.js'
import { mapState } from 'vuex'
import compare from '../../common/js/sort'
var datas = []
var qs = require('qs')
export default {
  data () {
    return {
      showTab1: false,
      showTab2: false,
      showUl: true,
      goodslisturl: 'https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=wt.goods&id=',
      goodlists: [],
      imgUrl: 'https://fjhhjr.com/attachment/',
      data: [],
      sortData: [],
      typeUrl: ''
    }
  },
  async created () {
    const result = await MyAjax('./index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=wt.goods.search', qs.stringify({storeid: this.storeid}), 'POST')
    // console.log(result.data)
    if (result.status === 1) {
      this.data = result.result.data
      this.sortData = result.result.data
      this.goodlists = this.data
      for (var v of this.data) {
        if (!datas.hasOwnProperty(v['pcate'])) datas[v['pcate']] = []
        datas[v['pcate']].push(v)
      }
    }
    this.typeUrl = this.url
    console.log(this.typeUrl)
  },
  computed: {
    ...mapState(['bbsid', 'storeid', 'url'])
  },
  methods: {
    fenlei (str) {
      this.showTab2 = false
      this.showTab1 = false
      this.showUl = true
      this.goodlists = []
      this.goodlists.concat(datas[str])
    },
    Mysort (arr, a) {
      this.showUl = false
      this.showTab2 = false
      this.showTab1 = false
      arr.sort(compare(a))
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
      .item
        width 100%
        // height 100px
        display flex
        padding 20px
        box-sizing border-box
        border-bottom 1px solid #ededed
        .icon
          border 1px solid #ededed
          margin-right 15px
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
              margin-left 5%
          .text-p
            margin 8px 0
            .text-con
              display inline-block
              // margin-right 25px
              line-height 13px
              font-size 11px
              color #a3a3a3
</style>
