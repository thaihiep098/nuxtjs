<template lang="pug">
.row
  .col-4
    faq-search
  .col-4
    chat-box
  .col-4
    faq-history
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FaqSearch: () => import('~/components/Dashboard/FaqSearch.vue'),
    ChatBox: () => import('~/components/Dashboard/ChatBox.vue'),
    FaqHistory: () => import('~/components/Dashboard/FaqHistory.vue'),
  },
})
export default class Dashboard extends Vue {}
</script>
