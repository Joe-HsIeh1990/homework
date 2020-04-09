import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    logShow: false,
    isLoading:false,
    shopshow: false
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
    }
  },
  getters:{

  },
  modules: {
    
  }
})
