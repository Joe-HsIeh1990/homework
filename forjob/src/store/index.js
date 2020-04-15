import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    logShow: false,
    isLoading:false,
    shopshow: false,
    cart:{},
    products: [],
    productone: {},   
    status: {
      loadingItem: ""
    }
  },
  mutations: {
    LOGSHOWED(state, payload){
      state.logShow = payload;
    },
    SHOPSHOW(state, payload){
      state.shopshow = payload;
    },
    ISLOADING(state, payload){
      state.isLoading = payload;
    },
    CART(state, payload){
      state.cart = payload;
    },
    PRODUCTS(state, payload){
      state.products = payload;
    },
    PRODUCTSONE(state, payload){
      state.productone = payload;
    },
    STATUS(state, payload){
      state.status.loadingItem = payload
    }
 
  },
  actions: {
    updatelog(context , payload){
      context.commit('LOGSHOWED', payload)
    },
    isLoad(context , payload){
      context.commit('ISLOADING', payload)
    },
    showshop(context , payload){
      context.commit('SHOPSHOW', payload)
    },
    GetProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/products/all`;
      context.commit('ISLOADING',true)
      axios.get(api).then(response => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('ISLOADING',false)
      });
    },
    GetProductOne(context , item) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/product/${item}`;
      context.commit('ISLOADING',true)
      context.commit('STATUS', item)
      axios.get(api).then(response => {
        context.commit('PRODUCTSONE',response.data.product);   
        context.commit('STATUS', "")
        context.commit('ISLOADING',false)
      });
    },
    getCart(context) {
      const api = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/cart`;
      context.commit('ISLOADING',true)
      axios.get(api).then(response => {
        context.commit('CART', response.data.data)
        context.commit('ISLOADING',false)
      });
    }
  },
  getters:{

  },
  modules: {
    
  }
})
