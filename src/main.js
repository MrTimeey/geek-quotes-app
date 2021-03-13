import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from "axios"

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
