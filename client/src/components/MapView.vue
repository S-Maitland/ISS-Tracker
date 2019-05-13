<template lang="html">
  <div class="map">
    <l-map
    :zoom="zoom"
    :center="center"
    :markers="marker"
    style="height:45%">
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
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 16,
      center: L.latLng(55.8653028,-4.2600128),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      marker: L.latLng(55.8653028,-4.2600128)
    };
    }
  }
</script>

<style lang="css" scoped>
.map {
  height: 95vh;
  width: 100%;
}
</style>
