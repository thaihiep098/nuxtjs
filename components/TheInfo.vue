<template lang="pug">
.text-white
  p のお客様: {{ keyword }}
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class TheInfo extends Vue {
  private keyword: string = 'トでログ'
}
</script>
