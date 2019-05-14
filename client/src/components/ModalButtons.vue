<template lang="html">
<div id="modalButtons">

  <div id ="modal1">
    <ModalComponentOne v-bind:crew="crew" v-if="isModalVisible"/>
    <button type="button" class="modal-btn" @click="isModalVisible = !isModalVisible">
      Astronauts!
    </button>
    <modal v-bind:crew="crew"  class="modal" name="bar" v-show="isModalVisible" value="yo!" />
  </div>


  <div id="modal2">
    <ModalComponentTwo v-bind:info="info" v-if="isModalVisible2"/>
    <button type="button" class="modal-btn" @click="isModalVisible2 = !isModalVisible2; timerVelocity();">
      Real-Time Info!
    </button>
    <modal class="modal" name="bar" v-show="isModalVisible2"  />
  </div>


<div id="modal3">
  <ModalComponentThree v-if="isModalVisible3"/>
  <button type="button" class="modal-btn" @click="isModalVisible3 = !isModalVisible3">
    More Info!
  </button>
  <modal class="modal" name="bar" v-show="isModalVisible3"  />
</div>
</div>

</template>

<script>
import axios from 'axios';
import {eventBus } from '@/main.js';
import ModalComponentOne from '@/components/ModalComponentOne';
import ModalComponentTwo from '@/components/ModalComponentTwo';
import ModalComponentThree from '@/components/ModalComponentThree';

export default {
  // props: ['contentone'],
  components: {
    ModalComponentOne,
    ModalComponentTwo,
    ModalComponentThree
  },

  data() {
    return {
      isModalVisible: false,
      isModalVisible2: false,
      isModalVisible3: false,
      crew: [],
      info: {},
      timer: null
    }
  },
  methods: {

    updateVelocity() {
      axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      .then(info => this.info = info)
    },

    // timerVelocity() {
    //   this.updateVelocity();
    //   setInterval(() => this.updateVelocity(), 1000);
    // }

    timerVelocity() {
      this.updateVelocity()
      this.timer = setInterval(() => this.updateVelocity(), 1000);
    }

  },
  created() {

  },

  mounted() {
    eventBus.$on('close', () => {
      this.isModalVisible = false
    }),
    eventBus.$on('close2', () => {
      this.isModalVisible2 = false
    }),
    eventBus.$on('close3', () => {
      this.isModalVisible3 = false
    }),

    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(crew => this.crew = crew);

    // fetch('https://api.wheretheiss.at/v1/satellites/25544')
    // .then(response => response.json())
    // .then(info => this.info = info);

    eventBus.$on('closeTimer', () => {
      clearInterval(this.timer)

    });
  }
}
</script>

<style lang="css" scoped>


 /* .modal-btn {
   margin-top: 20vh;

 } */
 .modal-btn {
   display: inline-block;
  padding: 1em 1.2em;
border: 0.1em solid #FFFFFF;
margin: 0 0.3em 0.3em 0;
border-radius: 0.2em;
box-sizing: border-box;
text-decoration: none;
font-family: 'Roboto', sans-serif;
font-weight: 700;
color: #FFFFFF;
text-align: center;
transition: all 0.2s;
margin-top: 20vh;
background-color: rgba(0,0,0,.1);
font-size: 0.8em;
width: 10vw;
}
.modal-btn:hover {
  color: #000000;
  background-color: #FFFFFF;
  cursor: pointer;
}

@media all and (max-width: 30em) {
  .modal-btn {
    display: block;
    margin: 0.4em auto;
  }
}



</style>
