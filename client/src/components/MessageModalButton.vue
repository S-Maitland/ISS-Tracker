<template lang="html">
  <div >

    <transition appear name="slide" >
    <MessageList v-if="isModalVisible"/>
    <button type="button" class="modal-btn" @click="showModal">
      See messages !
    </button>
    <modal class="modal" v-show="isModalVisible" name="messageModal"/>
  </transition>

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


</style>
