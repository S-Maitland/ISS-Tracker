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
      marker: null
    }
  },
  methods: {
    initialize() {
      this.earth = new WebGLEarth('earth_div', {
        center:(this.location.iss_position.latitude, this.location.iss_position.longitude),
        zooming: true,
        sky: true
      });

      WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.earth);

      this.marker = WE.marker([this.location.iss_position.latitude, this.location.iss_position.longitude]).addTo(this.earth).bindPopup("<b>ISS</b>", {maxWidth: 120, closeButton: true}).openPopup();
    }
  },
  mounted(){
    this.initialize();
  }
}
</script>

<style lang="css" scoped>
</style>
