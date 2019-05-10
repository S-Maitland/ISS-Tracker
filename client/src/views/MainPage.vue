<template lang="html">
  <div id="app">
    <!-- <div id="component1">
      <button type="button" class="btn" @click="showModal">
        Open Modal!
      </button>
      <modal v-show="isModalVisible" @close="closeModal" /> -->
      <!-- <button type="button" class="btn-close btn-right" @click="closeModal" aria-label="Close modal">x
      </button> -->
      <!-- <ModelButtonOne :buttonone="contentone"/> -->



  </div>

</template>

<script>

import ModalButtonOne from '@/components/ModalComponentOne';

export default {
  components: {
    ModalButtonOne
  },
  data() {
    return {
      content: [
        {
          name: "this is our content"
        }
      ],
      // contentone: "more info",
      messages: [],
      location: [],
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
    fetch('http://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(location => this.location = location);

    fetch('http://localhost:3000/api/messages/')
    .then(response => response.json())
    .then(messages => this.messages = messages);
  }
}

</script>

<style lang="css" scoped>
  #app {
    display: flex;
  }
  #component1 {
    display: flex;
    justify-content: flex-end;
  }
</style>
