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
        <footer class="modal-footer">
           <slot name="footer">
             I'm the default footer!


           </button>
         </slot>
       </footer>
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
