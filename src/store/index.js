import Vue from 'vue'
import Vuex from 'vuex'
import getters from './gutters.js'
import setting from './modules/setting.js'
import user from './modules/user.js'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    setting,
    user
  },
  getters
})

export default store
