export default {
  appenduser: (state, { cat, user }) => {
    state[cat].push(user)
  }
}
