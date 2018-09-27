<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <Tab id="searchBar" :class="searchBarFixed == true ? 'isFixed' :''"></Tab>
    <router-view :class="marginTop == true ? 'ismarginTop' :''"></router-view>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop/HeaderTop'
import Tab from './components/Tab/Tab'
import MyAjax from './common/js/ajax.js'
export default {
  name: 'App',
  data () {
    return {
      searchBarFixed: false,
      marginTop: false,
      scrollTop: 0,
      offsetTop: 165,
      id: '',
      thisUrl: '',
      status: 0,
      url: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  created () {
    this.thisUrl = location.search.split('?')[1]
    this.id = this.getUrlKey('storeid')
    // this.id = '98'
    this.$store.dispatch('reStoreid', this.id)
    this.band()
  },
  methods: {
    async band () {
      const result = await MyAjax('./index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=ajax.ajax.getloginstatus', {backurl: this.thisUrl}, 'POST')
      if (result.status !== 1) {
        this.url = result.result.url
        this.$store.dispatch('reUrl', this.url)
        console.log(1)
      }
    },
    // 导航栏置顶方法
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.offsetTop = document.querySelector('#searchBar').offsetTop
      // console.log(scrollTop)
      if (this.scrollTop > this.offsetTop) {
        this.searchBarFixed = true
        this.marginTop = true
      } else {
        this.searchBarFixed = false
        this.marginTop = false
      }
    },
    getUrlKey (name) {
      // eslint-disable-next-line
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
    }
  },
  watch: {
    // 监听scrollTop值 解决缓慢上划时导航栏不归位bug
    scrollTop (oldscrollTop, newscrollTop) {
      if (this.scrollTop <= 50) {
        this.searchBarFixed = false
        this.marginTop = false
      }
    }
  },
  components: {
    HeaderTop,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
.isFixed{
  position: fixed;
  background-color: #ffffff;
  top: 0;
  z-index: 10;
}
.ismarginTop{
  margin-top: 57px;
}
</style>
