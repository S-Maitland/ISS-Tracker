<template lang="html">
  <div class="map">
    <l-map
    :zoom="zoom"
    :center="center"
    :markers="marker"
    style="height:96.5vh">
    <l-tile-layer
    :url="url"
    :attribution="attribution">
  </l-tile-layer>
</l-map>
</div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import {icon} from 'leaflet';

export default {
  name: 'issMap',
  props: ['location'],
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 3,
      center: L.latLng(this.location.iss_position.latitude,this.location.iss_position.longitude),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      marker:[ L.latLng(this.location.iss_position.latitude,this.location.iss_position.longitude)
      ]
    }
    }
  }
</script>

<style lang="css" scoped>
.map {
  height: 100%;
  width: 100%;
}
</style>
