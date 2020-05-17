import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: false,
    snack: false,
    message: '',
    profile: {}
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  },
  actions: {
  },
  modules: {
  }
})
