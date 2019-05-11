<template lang="html">
<div id="modalButtons">

  <div id ="modal1">
    <ModalComponentOne v-if="isModalVisible"/>
    <button type="button" class="btn" @click="showModal">
      Open Modal!
    </button>
    <modal name="bar" v-show="isModalVisible"  />
  </div>


  <div id="modal2">
    <ModalComponentTwo v-if="isModalVisible2"/>
    <button type="button" class="btn" @click="showModal2">
      Modal Two!
    </button>
    <modal name="bar" v-show="isModalVisible2"  />
  </div>


<div id="modal3">
  <ModalComponentThree v-if="isModalVisible3"/>
  <button type="button" class="btn" @click="showModal3">
    Modal Three!
  </button>
  <modal name="bar" v-show="isModalVisible3"  />
</div>
</div>

</template>

<script>
import {eventBus } from '@/main.js'
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
      isModalVisible3: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    showModal2() {
      this.isModalVisible2 = true;
    },
    showModal3() {
      this.isModalVisible3 = true;
    },

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
    })
  }
}
</script>

<style lang="css" scoped>
/* #modalButtons {
  display: flex;
  /* flex-direction: column; */
    /* align-content: space-evenly;
}
#modal1 {
  display:flex;
  justify-content: flex-end;
}
#modal2 {
  display:flex;
  justify-content: flex-end;

}
#modal3 {
  display:flex;
  justify-content: flex-end;
} */ 
</style>
