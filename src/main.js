// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant'
import countDown from './components/countDown.vue'
import 'vant/lib/vant-css/index.css'
import './icons/iconfont.css'
import axios from './utils/request'
// import axios from 'axios'

import './utils/flexible.js'

import './permission'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
import VueCountdownTimer from 'vuejs-countdown-timer'
Vue.use(VueCountdownTimer)
Vue.prototype.axios = axios
Vue.use(Vant)
Vue.component('countDown', countDown)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
