import Vue from 'vue'
import './style.scss'

import store from './store'

// import Vuex from 'vuex'
// Vue.use(Vuex)

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', { get () {return this.$root.moment}})

import App from './components/App.vue';


// let events = [
//     {description: 'Random event', date : moment('2017-04-16','YYYY-MM-DD')},
//     {description: 'Random event', date : moment('2017-04-12','YYYY-MM-DD')},
//     {description: 'Random event', date : moment('2017-05-11','YYYY-MM-DD')}
//   ]

let events = window.__INITIAL_STATE__.map(event => {
  return {
    description : event.description,
    date : moment(event.date)
  }
})

let initialState = Object.assign({}, store.state, {events})
console.log(initialState)
store.replaceState(initialState)

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
