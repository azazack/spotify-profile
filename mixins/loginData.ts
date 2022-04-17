import { Vue } from 'nuxt-property-decorator'

export default class LoginData extends Vue {
  CheckReturnedParamsFromLink(hash: string): string[] {
    const stringAfterHashtag = hash.substring(1).split('&')
    stringAfterHashtag.reduce((acc, currentValue): string => {
      const [key, value] = currentValue.split('=')
      acc[key] = value
      return acc
    }, {})
    console.log(stringAfterHashtag)
    return stringAfterHashtag
  }
}
