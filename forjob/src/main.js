import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router'
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import currencyFilter from './filters/currency';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ValidationProvider, extend } from 'vee-validate';
import { localize } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import './bus';

localize('zh_TW', TW)
Vue.component('ValidationProvider', ValidationProvider);
axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.use(Vuex);
Vue.filter('currency', currencyFilter);
//vee-validate
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

// Register
new Vue({
  created() {
    AOS.init(
      {
        duration: 3000,
      }
    );
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
