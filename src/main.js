// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './assets/style/index.css'
import './permission' 
import store from './store'
Vue.config.productionTip = false

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.use(Antd);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
