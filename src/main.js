// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'
import store from './store/index'
import Routers from './router/index'
import { LoadingPlugin, ToastPlugin } from 'vux'
Vue.use(VueRouter)
Vue.use(Vuex)
// 路由配置
const RouterConfig = {
  mode: 'hash',
  // mode: 'history',
  routes: Routers
}

const router = new VueRouter(RouterConfig)

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app-box')
