<template lang="html">
  <div class="modal-backdrop">
     <div class="modal">
       <header class="modal-header">
         <slot name="header">
            Here we can see some fun info about the ISS!!

           <button
             type="button"
             class="btn-close"
             @click="close(); stopTimer();"
           >
             x
           </button>
         </slot>
       </header>
       <section class="modal-body">
         <slot name="body">
           <p>The ISS is currently <b>{{info.data.altitude.toFixed(2)}} km</b> above  us and travelling at a breathtaking <b>{{info.data.velocity.toFixed(2)}} km/h</b>!!!</p>
           <p>As it orbits around the Earth, it goes through periods of day and night just like the rest of us!</p>
            <p>At the moment, the ISS is in<b v-if="info.data.visibility === eclipsed"> pitch black</b><b v-else> daylight</b> !!!</p>
         </slot>
        </section>
     </div>
   </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
  name: 'modal2',
  props: ['info'],
  methods: {
    close() {
      eventBus.$emit('close2');
      // console.log('stoppedtwo');
    },
    stopTimer() {
      eventBus.$emit('closeTimer');
      console.log('stoppedtwo');
    }
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
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 90vw;
  }

  .modal-header,
  .modal-footer {
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
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

</style>
