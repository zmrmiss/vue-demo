import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store.js'
// import axios  from './axios.js'
Vue.use(ElementUI)
// Vue.prototype.axios=axios;

Vue.config.productionTip = false
Vue.directive('document-click', {
  bind(el, binding, vnode) {
    document.addEventListener('click', binding.value, false);
  }
})
// Vue.prototype.api = api
// console.log('====',Vue.prototype.api)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})