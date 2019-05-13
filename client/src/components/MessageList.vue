<template lang="html">
    <div class="message-wrapper">
      <MessageListItem v-bind:message="message" v-for="message in messages" v-if="messages"/>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
import MessageListItem from './MessageListItem'
import MessageService from '@/services/MessageService.js'

export default {
  data(){
    return {
      messages: null
    };
  },
  mounted(){
    MessageService.getMessage()
    .then(messages => this.messages = messages);

    eventBus.$on('message-added', (message) => {
      this.messages.push(message)
    })
  },
  components: {
  MessageListItem
  }
}
</script>

<style lang="css" scoped>

.message-wrapper {
  display: flex;
  flex-wrap: wrap;
}

</style>
