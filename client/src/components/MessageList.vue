<template>
<div class="modal-backdrop">
   <div class="modal">
     <header class="modal-header">
       <slot name="header">
         Messages received by the Astronauts!!

         <button
           type="button"
           class="btn-close"
           @click="close"
         >
           x
         </button>
       </slot>
     </header>
     <section class="modal-body">
       <div class="message-wrapper">
        <ul>
         <MessageListItem v-bind:message="message" v-for="message in messages" v-if="messages"/>
       </ul>
       </div>
      </section>




   </div>
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
  methods: {
    close() {
      eventBus.$emit('close6');
    },
  },
  mounted(){
    MessageService.getMessage()
    .then(messages => this.messages = messages.reverse());

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

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.1em;
  font-size: 1em
}

.modal {
  background-color: #252e3d;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 60vw;
}

.modal-header,
.modal-footer,
.modal-body {
  padding: 2vw;
  /* display: flex; */
  width: 96%;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: orange;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 1.3em
}

.modal-body {
  height: 60vh;
  /* position: relative; */
  color: white;
}

ul {
  margin: 0;
  padding: 0em;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: red;
  background: transparent;
}
</style>
