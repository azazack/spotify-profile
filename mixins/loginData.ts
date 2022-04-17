import { Vue } from 'nuxt-property-decorator'

export default class LoginData extends Vue {
  CheckReturnedParamsFromLink(hash: string): Record<string, unknown> {
    const stringAfterHashtag = hash.substring(1).split('&')
    return stringAfterHashtag.reduce(
      (
        acc: Record<string, unknown>,
        currentValue: string
      ): Record<string, unknown> => {
        const [key, value] = currentValue.split('=')
        acc[key] = value
        return acc
      },
      {}
    )
  }
}
