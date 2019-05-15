<template lang="html">
  <div >


    <MessageList v-if="isModalVisible"/>
    <button type="button" class="modal-btn" @click="showModal">
      See messages!
    </button>
    <modal class="modal" v-show="isModalVisible" name="messageModal"/>


    </div>
</template>

<script>

import {eventBus } from '@/main.js';
import MessageList from '@/components/MessageList';

export default {
  components: {
    MessageList
  },
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    }
  },
  mounted() {
    eventBus.$on('close6', () => {
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
}

</style>
