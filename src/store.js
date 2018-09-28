import Vue from 'vue'
import Vuex from 'vuex'

let defaultCity = '';
try {
  if(localStorage.city != "undefined" && localStorage.city) {
    defaultCity = localStorage.city;
  } else {
    defaultCity = '北京';
  }
} catch (e) {}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCityEvent(state, city) {
      state.city = city;
      try {
          localStorage.city = city;         
      } catch (e) {}
    }
  },
  actions: {

  }
})
