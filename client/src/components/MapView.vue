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
      marker2: null,
    }
  },
  methods: {
    initialize() {
      this.earth = new WebGLEarth('earth_div');

      WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.earth);

      this.marker = WE.marker([this.location.iss_position.latitude,this.location.iss_position.longitudes]).addTo(this.earth);
      this.marker.bindPopup("<b>ISS</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

      this.marker2 = WE.marker([30.058056, 31.228889]).addTo(this.earth);
      this.marker2.bindPopup("<b>Cairo</b><br>Yay, you found me!", {maxWidth: 120, closeButton: false});

      this.earth.setView([51.505, 0], 6);
    }
  },
  mounted(){
    this.initialize();
  }
}
</script>

<style lang="css" scoped>
/* .map {
height: 100%;
width: 100%;
} */

html, body{padding: 0; margin: 0; background-color: black;}
#earth_div{top: 0; right: 0; bottom: 0; left: 0; position: absolute !important;}
</style>
