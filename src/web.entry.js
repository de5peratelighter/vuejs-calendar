import Vue from 'vue'
import './style.scss'

import store from './store'

// import Vuex from 'vuex'
// Vue.use(Vuex)

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get () {return this.$root.moment}})


import App from './components/App.vue';


new Vue({
  el: '#app',
  data : {
    moment
  },
  components: {
    App
  },
  store
  // store : {
  //   state : {
  //     currentYear : 2017,
  //     currentMonth : 5
  //   }
  // }
});
