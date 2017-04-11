import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueResource from 'vue-resource'

import Vuex from 'vuex'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import config from './config/config'
import util from './utility/utility'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(MuseUI)

// 1 window.con = config
Vue.prototype.con = config
Vue.prototype.utils = util

Vue.config.productionTip = false
Vue.http.options.emulateJSON = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
