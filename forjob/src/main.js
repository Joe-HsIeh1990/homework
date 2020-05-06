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
import { required, email } from 'vee-validate/dist/rules';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/zh_TW.json';
import { localize } from 'vee-validate';
import { configure } from 'vee-validate';
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
Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  });
});
extend('email', email)
extend('required', { 
  ...required,
  message: '請輸入{_field_}'
})
extend('phone', {
  validate (value, args) {
    return value.length >= args.length
  },
  params: ['length'],
  message: '請輸入正確手機號碼10位數'
})
extend('addres', {
  validate (value, addres) {
    return value.length >= addres.length
  },
  params: ['length'],
  message: '請輸入正確地址，如:台北市信義區'
})
configure({
  classes: {
    valid: 'valid',
    invalid: 'invalid',
  }
})
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
//router
router.beforeEach((to, from, next) => {
  // console.log('to',to,'from',from,'next',next);
  // ...
  if (to.meta.requiresAuth){
    console.log('這裡需要驗證');
    const api = `${process.env.VUE_APP_APIPATH}api/user/check`;
    axios.post(api).then(response => {
      if(response.data.success){
        next();
      }else{
        next({
          path:'/aboutus'
        })
      }
    });
  }else{
    next();

  }
})
