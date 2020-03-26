import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios/dist/vue-axios.min';
import axios from 'axios/dist/axios.min';
import store from './store'


Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
