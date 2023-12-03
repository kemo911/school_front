import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/store'
import VueMaterial from "vue-material";
Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
