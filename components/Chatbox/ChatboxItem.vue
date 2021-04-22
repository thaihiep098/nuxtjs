<template lang="pug">
.message.incoming_msg(v-if='message.who === 1')
  .received_msg
    .received_withd_msg
      p {{ message.message }}
      span.time_date
.message.outgoing_msg(v-else)
  .sent_msg
    p {{ message.message }}
    span.time_date
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ChatBoxModel from '~/models/chatbox'

@Component
export default class ChatboxItem extends Vue {
  @Prop({ required: true })
  message!: ChatBoxModel
}
</script>
