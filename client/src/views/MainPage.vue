<template lang="html">
  <div id="app">
    <div id="container">
      <div id="form-container">
        <!-- <MessageList id="messageList" /> -->
        <!-- <MessageModalButton id="messageModal" class="left-buttons" /> -->
        <!-- <FormModalButton id="inputForm" class="left-buttons" /> -->
        <a class="twitter-timeline" data-lang="en" data-width="250" data-height="800" data-theme="dark" href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw">Tweets by Space_Station</a>
      </div>
      <div id="map-container">
        <MapView id="mapView" :location="location" v-if="location"/>
        <div id="earth_div"></div>
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
import MessageModalButton from '@/components/MessageModalButton'
import MapView from '@/components/MapView';

export default {
  components: {
    ModalButtons, FormModalButton, MessageList, MessageModalButton, MapView
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
  /* background-color: #000024; */
}

#buttons {
  /* border: 2px solid blue; */
  height: 100%;
}

#form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0px;
  /* background-color: #000024; */
}

#messageList {
  /* width: 10vw; */
  height: 80vh;
  border: solid 1px black;
}

#messageModal {
  height: 10vh;
  margin-top: 0vh;
}

#inputForm {

  height: 10vh;
  margin-top: 45vh;
  /* align-self: flex-start; */
}

#map-container {
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0px;
  z-index: 1;
}
#earth_div {
  height: 100%;
  width: 100%;
}
.left-buttons:hover {

}


@media all and (min-width: 20vw) {
  #form-container { flex: 0.6 0 0; }
}
@media all and (min-width: 20vw) {
  #buttons-container { flex: 0.6 0 0; }
}

 @media all and (min-width: 40vw) {
  #map-container    { flex: 4 0px; }
  .form-container { order: 1; }
  .map-container    { order: 2; }
  .aside-2 { order: 3; }
  .footer  { order: 4; }
}
</style>
