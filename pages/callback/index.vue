<template lang="pug">

</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import LoginData from '~/mixins/loginData'
import { isEmpty } from 'lodash'

@Component({ name: 'CallBack' })
export default class CallBack extends LoginData {
  mounted(): void {
    // console.log(isEmpty(this.$store.state.auth.data.access_token), 'test')
    if(this.$store.getters['auth/isLogged']) {
      console.log('test')
    }

    if (window.location.hash) {
      this.$store.commit(
        'auth/setLogin',
        this.CheckReturnedParamsFromLink(window.location.hash)
      )
      // console.log(this.CheckReturnedParamsFromLink(window.location.hash))
    }
  }
}
</script>
