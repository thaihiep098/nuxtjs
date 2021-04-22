<template lang="pug">
.card.blue
  .card-header
    h3.text-white FAQをお持ち
  .card-body
    .mb-3
      input.form-control(type='text', v-model='keyword')
      button.btn.btn-danger.mt-3(v-on:click='clickSearch') Search
    .lists
      faq-item(v-for='(faq, key) in faqs', v-bind:faq='faq', v-bind:key='key')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { FaqStore } from '~/store'

@Component({
  components: {
    FaqItem: () => import('~/components/FaqSearch/FaqItem.vue'),
  },
})
export default class FaqSearch extends Vue {
  private keywordValue: string = ''

  get keyword() {
    return this.keywordValue
  }

  set keyword(value: string) {
    this.keywordValue = value
  }

  get faqs() {
    return FaqStore.data
  }

  private clickSearch() {
    FaqStore.search(this.keywordValue)
  }
}
</script>
