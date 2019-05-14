<template lang="html">
  <div>
    <InputForm v-if="isModalVisible"/>
    <button type="button" class="modal-btn" @click="showForm">
      Send message!
    </button>
    <modal v-show="isModalVisible" name="formModal"/>
    </div>
</template>

<script>

import {eventBus } from '@/main.js';
import InputForm from '@/components/InputForm';

export default {
  components: {
    InputForm
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showForm() {
      this.isModalVisible = true;
    }
  },
  mounted(){
    eventBus.$on('close5', () => {
      this.isModalVisible = false
    })
  }
}
</script>

<style lang="css" scoped>
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
}
.modal-btn:hover {
 color: #000000;
 background-color: #FFFFFF;
 cursor: pointer;
 /* cursor: url('../assets/spaceship-icon-vector.png'), auto; */
}
</style>
