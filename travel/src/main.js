// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
// 1像素边框解决方案
import 'styles/border.css'
// 解决移动端300毫秒点击延迟
// import fastClick from 'fastclick'
// fastClick.attach(document.body)
import 'styles/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  // router:router,
  router,
  components: { App },
  template: '<App/>'
})
