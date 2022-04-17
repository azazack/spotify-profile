import { isEmpty } from 'lodash'

interface State {
  data: Record<string, unknown>
}
export const getters = {
  data: (state: State): Record<string, unknown> => state.data,
  isLogged: (state: State): boolean => !isEmpty(state.data.access_token),
}

export const state = (): State => ({
  data: {},
})

export const mutations = {
  setLogin(state: State, data: Record<string, unknown>): void {
    state.data = data
  },
}
