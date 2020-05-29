import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    // pagination: {},

  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
      state.products.forEach(e=>{
       e.is_enabled = false;
      })
    },
    // PAGINATION(state, payload){
    //    state.pagination = payload 
    // }
  },
  actions: {
    GetProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/products/all`;
      axios.get(api).then(response => {
        context.commit('PRODUCTS', response.data.products);
        // context.commit('PAGINATION', response.data.pagination);
    
      });
    },
  },
  modules: {
  }
})
