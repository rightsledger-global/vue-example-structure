import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import VueRouter from './router'
import router from './router/index'
import _ from 'lodash'

Vue.use(Vuex)
Vue.use(axios)
Vue.prototype.$axios = axios
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(VueRouter)
Object.defineProperty(Vue.prototype, '$_', { value: _ })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
