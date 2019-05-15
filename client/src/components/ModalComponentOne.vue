<template lang="html">
  <div class="modal-backdrop">
     <div class="modal">
       <header class="modal-header">
         <slot name="header">
           Astronauts Currently in the ISS!!

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
         <div id="list-wrapper">
           <ul>
             <ModalOneListItem v-for="(member, index) in crew.people" :key="index" :member="member" />
           </ul>
         </div>
        </section>
     </div>
   </div>
</template>

<script>
import { eventBus } from '@/main.js'
import ModalOneListItem from '@/components/ModalOneListItem.vue'
export default {
  name: 'modal',
  props: ['crew'],
  components: {
    ModalOneListItem
  },
  data() {
    return {
      member: ""
    }
  },
  methods: {
    close() {
      eventBus.$emit('close');
    },
  },
};
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
  font-size: 1.3em
}

.modal {
  background-color: #252e3d;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 45vw;
}

.modal-header {
  padding: 2vw;
  border-bottom: 1px solid #eeeeee;
  color: orange;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 96%;
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


#list-wrapper {
  display: flex;
  width: 90vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  color:white;
}

ul {
  margin: 0;
  padding: 2em;
}

</style>
