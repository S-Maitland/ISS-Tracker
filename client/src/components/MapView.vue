<template lang="html">
  <div class="earth">
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import {Icon} from 'leaflet';
export default {
  name: 'earth',
  props: ['location'],
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: function(){
    return {
      earth: null,
      marker: null,
      marker2: null
    }
  },
  methods: {
    //on call, create an earth object utilisng WebGLEarth
    initialize() {
      this.earth = new WebGLEarth('earth_div', {
        draggable: true,
        zooming: true,
      });
      //set view on render so that it centers the ISS live location fetched from the
      this.earth.setView([this.location.iss_position.latitude, this.location.iss_position.longitude], 2.5);

      // add an overlay tile to the earth object
      WE.tileLayer('https://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg').addTo(this.earth);

      // Drop a pin to show where the ISS currently is based on live co-ordinates form // API fetch
      this.marker = WE.marker([this.location.iss_position.latitude, this.location.iss_position.longitude]).addTo(this.earth).bindPopup("<b>ISS</b>", {maxWidth: 20, closeButton: true}).openPopup();

      // Drop a pin on CodeClan office
      this.marker2 = WE.marker([55.86548,-4.2601867]).addTo(this.earth).bindPopup("<b>CodeClan Glasgow</b><br />#CodeClanLife", {maxWidth: 120, closeButton: true}).openPopup();
    }
  },
  mounted(){
    this.initialize();
  }
}
</script>

<style lang="css" scoped>
#earth_div {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute !important;
}
</style>
