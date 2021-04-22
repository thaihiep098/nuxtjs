<template lang="pug">
.card.blue.mb-3
  .card-header
    h6.text-white Q: {{ faq.question }}
  .card-body
    p A: {{ faq.answer }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import FaqModel from '~/models/faq'

@Component
export default class FaqItem extends Vue {
  @Prop({ required: true })
  faq!: FaqModel
}
</script>
