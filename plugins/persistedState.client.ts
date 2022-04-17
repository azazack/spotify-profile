import createPersistedState from 'vuex-persistedstate'

// @ts-ignore
export default ({ store }) => {
  createPersistedState()(store)
}
