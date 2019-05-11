<template lang="html">
<div class="">
  <button type="button" class="btn" @click="showModal">
    Open Modal!
  </button>
  <modal name="bar" v-show="isModalVisible" @close="closeModal" />
</div>
</template>

<script>
import {eventBus } from '@/main.js'
import ModalComponentOne from '@/components/ModalComponentOne';

export default {
  // props: ['contentone'],
  components: { ModalComponentOne },
  data() {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
