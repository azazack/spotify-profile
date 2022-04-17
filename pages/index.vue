<template lang="pug">

</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({
  name: 'Dashboard',
  middleware: 'isLogged',
})
export default class Dashboard extends Vue {}
</script>
