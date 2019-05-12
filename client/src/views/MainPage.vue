<template lang="html">
  <div id="app">
    <div id="container">
      <div id="form-container">
        <MessageList id="messageList" />
        <InputForm id="inputForm" />
      </div>
      <div id="map-container">
        <MapView id="mapView" />
      </div>
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
  #map-container {
    height: 180px;
  }

  #container {
    border: 5px solid green;
    display: flex;
    height: 100%;
    flex-wrap: row wrap;
    /* justify-content: space-between; */

    /* flex-direction: row; */
    text-align: center;

  }

  #container > * {
    padding: 10px;
    /* flex: 2 100%; */
    border: 2px solid blue;
  }

  #buttonsContainer {
    border: 2px solid blue;
  }

  #form-container {
    display: flex;
    flex-direction: column;

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

    /* align-self: flex-start; */
  }

  #mapContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #mapView {
    border: 1px solid black;
    /* width: 10vw;
    height: 10vh; */
    /* flex-grow: 2; */

  }


  @media all and (min-width: 20vw) {
    #form-container { flex: 1 0 0; }
  }
  @media all and (min-width: 20vw) {
    #buttonsContainer { flex: 1 0 0; }
  }

  @media all and (min-width: 40vw) {
    #map-container    { flex: 4 0px; }
    .aside-1 { order: 1; }
    .main    { order: 2; }
    .aside-2 { order: 3; }
    .footer  { order: 4; }
  }


</style>
