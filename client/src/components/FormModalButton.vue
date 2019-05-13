<template lang="html">
  <div>
    <InputForm v-if="isModalVisible"/>
    <button type="button" class="modal-btn" @click="showForm">
      Send a message!
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
  mounted() {
    eventBus.$on('close', () => {
      this.isModalVisible = false
    })
  }
}
</script>

<style lang="css" scoped>
</style>
