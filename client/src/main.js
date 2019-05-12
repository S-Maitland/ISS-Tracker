import { L } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import Vue from 'vue';
import App from './App.vue';
import {router} from './router.js';

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false

import VModal from 'vue-js-modal'

Vue.use(VModal, {componentName: "modal"})

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
