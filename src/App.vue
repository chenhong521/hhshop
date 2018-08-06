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
export default {
  name: 'App',
  data () {
    return {
      searchBarFixed: false,
      marginTop: false,
      scrollTop: 0,
      offsetTop: 165
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
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
    }
  },
  watch: {
    // 监听scrollTop值 解决缓慢上划时导航栏不归位bug
    scrollTop (oldscrollTop, newscrollTop) {
      if (this.scrollTop <= 165) {
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
