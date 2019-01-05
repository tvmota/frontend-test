import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ranking: []
  },
  mutations: {
    ADD_RANKING (state, payload) {
      state.ranking = payload
    }
  },
  actions: {
    addRanking ({ commit }, payload) {
      commit('ADD_RANKING', payload)
    }
  },
  getters: {
    getRanking: state => state.ranking
  }
})
