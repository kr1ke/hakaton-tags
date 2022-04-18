import Vue from 'vue'
import Vuex from 'vuex'

import {api} from "../api/api.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tags: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  getters: {
    getTags(state) {
      return state.tags
    }
  },
  mutations: {
    setTags(state, payload) {
      state.tags = payload
    }
  },
  actions: {
    async getAllTags(ctx) {
      try {
        const tags = await api.get('/api/tags')
        console.log(tags)
        ctx.commit('setTags', tags.data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  modules: {
  }
})
