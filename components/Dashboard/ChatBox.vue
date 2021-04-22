<template lang="pug">
.card.blue
  .card-header
    h3.text-white Chatをお持ち
  .card-body
    .chatbox
      .msg_history
        chat-box-item(
          v-for='(message, key) in messages',
          v-bind:message='message',
          v-bind:key='key'
        )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ChatBoxStore } from '~/store'

@Component({
  components: {
    ChatBoxItem: () => import('~/components/Chatbox/ChatboxItem.vue'),
  },
})
export default class ChatBox extends Vue {
  created() {
    setInterval(ChatBoxStore.addMessage, 2000)
  }

  get messages() {
    return ChatBoxStore.data
  }
}
</script>
