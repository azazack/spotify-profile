<template lang="pug">
button.button(@click="$emit('click')")
  slot
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({ name: 'Button' })
export default class Button extends Vue {}
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
.button {
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 5px 9px 39px -19px rgba(0, 0, 0, 0.75);

  &.primary {
    background-color: $green-color;
    color: $white-color;
  }

  &.upper-case {
    text-transform: uppercase;
  }

  &.rounded {
    border-radius: 30px !important;
  }
}
</style>
