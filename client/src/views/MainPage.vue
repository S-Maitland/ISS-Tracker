<template lang="html">
  <div id="app">
    <div id="container">
      <MessageList id="messageList" />
      <InputForm id="inputForm" />
      <MapView id="mapView" />
      <ModalButtons id="buttonsContainer" />
    </div>
  </div>
</template>

<script>

import ModalButtons from '@/components/ModalButtons';
import InputForm from '@/components/InputForm';
import MessageList from '@/components/MessageList';
import MapView from '@/components/MapView';

export default {
  components: {
    ModalButtons, InputForm, MessageList, MapView
  },
  data() {
    return {
      messages: [],
      location: [],
    }
  },

  mounted() {
    fetch('http://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(location => this.location = location);

    // fetch('http://localhost:3000/api/messages/')
    // .then(response => response.json())
    // .then(messages => this.messages = messages);
  }
}

</script>

<style lang="css" scoped>

  #container {
    border: 5px solid green;
    display: flex;
    height: 100%;
    
  }

  #buttonsContainer {
    /* display: flex; */
  }

  #messageList {
    border: 1px solid blue;
    width: 10vw;
    height: 10vh;
  }

  #inputForm {
    border: 1px solid red;
    width: 10vw;
    height: 10vh;
  }

  #mapView {
    border: 1px solid black;
    width: 10vw;
    height: 10vh;
  }

</style>
