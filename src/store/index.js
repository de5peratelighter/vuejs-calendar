import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')

import Axios from 'axios'

export default new Vuex.Store({
    state : {
      currentYear : 2017,
      currentMonth : 5,
      eventFormPosX : 0,
      eventFormPosY : 0,
      eventFormActive : false,
      events : [
        {description: 'Random event', date : moment('2017-04-16','YYYY-MM-DD')},
        {description: 'Random event', date : moment('2017-04-12','YYYY-MM-DD')},
        {description: 'Random event', date : moment('2017-05-11','YYYY-MM-DD')}
      ],
      eventFormDate : moment()
    },
    mutations : {
        setCurrentMonth(state,payload) {
            state.currentMonth = payload
        },
        setCurrentYear(state,payload) {
            state.currentYear = payload
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload
        },
        addEvent(state, payload) {
            // let obj = {  
            //     description : payload,
            //     date: state.eventFormDate
            // }
            state.events.push(payload)
            
        },
        eventFormUpdateDate(state, payload) {
            state.eventFormDate = payload
        }
    },
    actions : {
        addEvent(context, payload) {
            return new Promise((resolve, reject) => {
                let obj = {  
                    description : payload,
                    date: context.state.eventFormDate
                };
                Axios.post('/add_event', obj).then(response => {
                    if (response.status === 200) {
                        context.commit('addEvent', obj);
                        resolve('wow');
                    } else {
                        reject();
                    }
                })
            });
        }
    }
})