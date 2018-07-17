// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入全局状态库
// import store from './store'

// 引入fastclick插件
import fastclick from 'fastclick'

// 引入lazyload懒加载插件
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 引入默认图片
Vue.use(VueLazyload, {
  loading: require('./common/image/default.png')
})

// 注册fastclick插件
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
