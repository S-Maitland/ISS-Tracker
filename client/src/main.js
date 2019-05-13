import L from 'vue2-leaflet';
import {Map} from 'vue2-leaflet';
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import Vue from 'vue';
import App from './App.vue';
import {router} from './router.js';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconUrl: require('@/assets/issIcon.png')
});

Vue.config.productionTip = false

import VModal from 'vue-js-modal'

Vue.use(VModal, {componentName: "modal"})

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
