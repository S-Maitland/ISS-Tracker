<template lang="html">
  <div class="map">
    <p>map view</p>
    <div id="mapid">
      <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint  </p>
    </div>
  </div>
</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'issMap',
  data() {
    return {
      zoom:13,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  }
}
</script>

<style lang="css" scoped>
#map {
  height: 180px;
}
</style>
