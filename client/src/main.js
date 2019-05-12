import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
import Vue from 'vue'
import App from './App.vue'
import {router} from './router.js'

Vue.config.productionTip = false

import VModal from 'vue-js-modal'

Vue.use(VModal, {componentName: "modal"})

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
