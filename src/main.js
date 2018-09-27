// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/stylus/reset.css'
// import WXConfig from './common/js/share.js'
Vue.config.productionTip = false
// Vue.prototype.WXConfig = WXConfig
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
