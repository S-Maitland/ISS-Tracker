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
      <div id="buttons-container">
        <ModalButtons id="buttons" />
      </div>
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
    flex-wrap: row wrap;
    text-align: center;
  }

  #container > * {
  padding: 10px;
  /* flex: 2 100%; */
  border: 2px solid blue;
}

  #buttons-container {
    border: 3px solid black;
  }

  #buttons {
    border: 2px solid blue;
    height: 100%;

  }

  #form-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  #messageList {
    border: 1px solid blue;
    /* width: 10vw; */
    height: 80vh;
  }

  #inputForm {
    border: 1px solid red;
    width: 10vw;
    height: 10vh;

    /* align-self: flex-start; */
  }

  #map-container {
    display: flex;
    align-items: center;
    /* justify-content: center; */
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
#buttons-container { flex: 1 0 0; }
}

@media all and (min-width: 40vw) {
  #map-container    { flex: 4 0px; }
  .form-container { order: 1; }
  .map-container   { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}


</style>
