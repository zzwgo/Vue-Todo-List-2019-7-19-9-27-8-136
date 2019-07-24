// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'
import store from './store/store.js'
import Antd from 'ant-design-vue'
import router from './router/router'
Vue.use(Antd)
Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  router:router,
  template: '<App/>'
})
