import createPersistedState from 'vuex-persistedstate'
import { Context } from '@nuxt/types'

export default ({ store }: Context): void => {
  createPersistedState({ key: 'vuex', paths: ['auth'] })(store)
}
