import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/day'

import COMMON from '@/../colony-vue/src/js/common'

Vue.config.productionTip = false
Vue.prototype.COMMON = COMMON
Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
