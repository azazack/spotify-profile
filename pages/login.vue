<template lang="pug">
  .spotify-profile-page
    Button.primary.text-uppercase.rounded(@click="redirection") test
</template>

<script lang="ts">
import querystring from 'querystring'
import { Component, Vue } from 'nuxt-property-decorator'
import Button from '~/components/WebElement/Button.vue'
@Component({
  name: 'Login',
  components: { Button },
})
export default class Login extends Vue {
  mounted(): void {
    console.log(
      this.$store.getters['auth/isLogged'],
    )
    this.$axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
  }

  redirection(): void {
    const scopes =
      'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public'
    window.location.href = `https://accounts.spotify.com/authorize?${querystring.stringify(
      {
        client_id: this.$config.CLIENT_ID,
        redirect_uri: 'http://localhost:3000/callback',
        scope: scopes,
        response_type: 'token',
        show_dialog: true,
      }
    )}`
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
.spotify-profile-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
