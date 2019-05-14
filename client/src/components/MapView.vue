<template lang="html">
  <div class="earth">
    <l-map
    :zoom="zoom"
    :center="center"
    :markers="marker"
    style="height:96.5vh">
    <l-tile-layer
    :url="url"
    :attribution="attribution">
  </l-tile-layer>
  <l-marker
  :lat-lng="marker"
  :draggable="false">
</l-marker>
</l-map>
</div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import {Icon} from 'leaflet';
export default {
  name: 'issMap',
  props: ['location'],
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  // data() {
  //   return {
  //     zoom: 3,
  //     center: L.latLng(this.location.iss_position.latitude,this.location.iss_position.longitude),
  //     url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  //     attribution:
  //     'NASA',
  //     url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  //     marker:L.latLng(this.location.iss_position.latitude,this.location.iss_position.longitude)
  //   }
  // }
  methods: {
      initialize() {
        earth: new WebGLEarth('earth_div');
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

        marker: WE.marker([51.5, -0.09]).addTo(earth);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();

        marker2: WE.marker([30.058056, 31.228889]).addTo(earth);
        marker2.bindPopup("<b>Cairo</b><br>Yay, you found me!", {maxWidth: 120, closeButton: false});

        markerCustom: WE.marker([50, -9], '/img/logo-webglearth-white-100.png', 100, 24).addTo(earth);

        earth.setView([51.505, 0], 6);
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
