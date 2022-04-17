import { Context } from '@nuxt/types'

export default function isLogged({ redirect, store }: Context): void {
  if (!store.getters['auth/isLogged']) {
    redirect('/login')
  }
}
