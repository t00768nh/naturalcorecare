import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: () => ({
    isMenuOpen: false
  }),
  mutations: {
    toggleMenu (state) {
      state.isMenuOpen = !state.isMenuOpen
    },
    resetMenu (state) {
      state.isMenuOpen = false
    }
  },
  actions: {
    resetMenu (context) {
      context.commit('resetMenu')
    }
  }
})

export default store