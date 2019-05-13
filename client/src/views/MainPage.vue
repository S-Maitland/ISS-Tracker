<template lang="html">
  <div id="app">
    <div id="container">
      <div id="form-container">
        <MessageList id="messageList" />
        <FormModalButton id="inputForm" />
      </div>
      <div id="map-container">
        <MapView id="mapView" :location="location" v-if="location"/>
      </div>
      <div id="buttons-container">
        <ModalButtons id="buttons" />
      </div>
    </div>
  </div>
</template>

<script>

import ModalButtons from '@/components/ModalButtons';
import FormModalButton from '@/components/FormModalButton';
import MessageList from '@/components/MessageList';
import MapView from '@/components/MapView';

export default {
  components: {
    ModalButtons, FormModalButton, MessageList, MapView
  },
  data() {
    return {
      location: null,
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
}

#buttons-container {
  margin: 0 auto;
  padding: 0px;
}

#buttons {
  border: 2px solid blue;
  height: 100%;
}

#form-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0px;
}

#messageList {
  /* width: 10vw; */
  height: 80vh;
  border: solid 1px black;
}

#inputForm {
  width: 10vw;
  height: 10vh;

  /* align-self: flex-start; */
}

#map-container {
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0px;
  /* justify-content: center; */
}

#mapView {
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
  .form-container { order: 1; }
  .map-container    { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}
</style>
