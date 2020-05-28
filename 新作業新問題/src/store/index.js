import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],

  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
      state.products.forEach(e=>{
       e.is_enabled = false;
      })
    }
  },
  actions: {
    GetProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/products/all`;
      // context.commit('ISLOADING', true)
      axios.get(api).then(response => {
        context.commit('PRODUCTS', response.data.products)
        // console.log(response.data.products)
        // context.commit('ISLOADING', false)
      });
    },
  },
  modules: {
  }
})
