import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    logShow: false,
    ShopShow: false,
  },
  mutations: {
    LOGSHOWED(state, payload){
      state.logShow = payload;
    },
    SHOPSHOW(state, payload){
      state.ShopShow = payload;
    }

  },
  actions: {
    updatelog(context , payload){
      context.commit('LOGSHOWED', payload)
    },
    ClickShop(context , payload){
      context.commit('SHOPSHOW', payload);
    }

  },
  getters:{

  },
  modules: {
    
  }
})
