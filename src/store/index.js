import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
Vue.use(Vuex)
import { convertToBase64, downloadFromBase64 } from '@/scripts/actions/file64'
export default new Vuex.Store({
  state: {
    loader: false,
    snack: false,
    message: '',
    profile: {},
    matrix: [],
    drawer: false
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  },
  actions: {
    convertToBase64, downloadFromBase64
  },
  modules: {
  }
})
