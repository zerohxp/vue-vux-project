import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false
}
const getters = {}
const mutations = {}
mutations['UPDATE_LOADING'] = function (state, status) {
  state.isLoading = status
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})
