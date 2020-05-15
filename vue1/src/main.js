import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios/dist/vue-axios.min';
import axios from 'axios';
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
axios.defaults.baseURL = 'http://localhost:3000/'

Vue.use(VueAxios, axios);
Vue.use(ViewUI)
Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
