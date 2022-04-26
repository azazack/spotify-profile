import { Context } from '@nuxt/types'

export default function ({ $axios, store }: Context) {
  $axios.setBaseURL('http://localhost:3000')

  if (store.getters['auth/isLogged']) {
    $axios.setToken(store.getters['auth/data'].access_token, 'Bearer')
  }
}
