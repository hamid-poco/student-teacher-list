export default {
  addUser: ({ commit }, payload) => {
    commit('appenduser', payload)
  }
}
