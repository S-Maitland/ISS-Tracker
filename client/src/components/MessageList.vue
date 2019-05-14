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
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 90vw;
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
  color: #4AAE9B;
  justify-content: space-between;
  flex-wrap: wrap;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  /* justify-content: flex-end; */
}

.modal-body {
  height: 60vh;
  /* position: relative; */
}

#list-wrapper {
  display: flex;
  width: 90vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
ul {

  margin: 0;
  padding: 2em;
}

.btn-close {
  /* display: flex; */
  border: none;
  font-size: 40px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
  justify-content: flex-end;
}




</style>
