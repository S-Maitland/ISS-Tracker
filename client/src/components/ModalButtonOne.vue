<template lang="html">
<div class="">
  <button type="button" class="btn" @click="showModal">
    Open Modal!
  </button>
  <modal v-show="isModalVisible" @close="closeModal" />
</div>
</template>

<script>
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
  }
}
</script>

<style lang="css" scoped>
</style>
