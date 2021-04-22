<template lang="pug">
ul(v-if='navs')
  li(v-for='nav in navs')
    nuxt-link.text-white(to='/') {{ nav.title }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NavStore } from '~/store'

@Component
export default class TheNav extends Vue {
  get navs() {
    return NavStore.data
  }
}
</script>
