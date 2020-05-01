import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  state: {
    logShow: false,
    isLoading: false,
    shopshow: false,
    cart: {
      carts: []
    },
    products: [],
    productone: {},
    status: {
      loadingItem: ""
    },
    productshow: false,
    // order: {
    //   user: {},
    // },
    // orderId: '',
  },
  mutations: {
    // ORDERID(state, payload) {
    //   state.orderId = payload;
    // },
    // ORDER(state, payload) {
    //   state.order = payload;
    // },
    PROUCTSSHOW(state, payload) {
      state.productshow = payload;
    },
    LOGSHOWED(state, payload) {
      state.logShow = payload;
    },
    SHOPSHOW(state, payload) {
      state.shopshow = payload;
    },
    ISLOADING(state, payload) {
      state.isLoading = payload;
    },
    CARTS(state, payload) {
      state.cart = payload;
    },
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    PRODUCTSONE(state, payload) {
      state.productone = payload;
    },
    STATUS(state, payload) {
      state.status.loadingItem = payload
    }

  },
  actions: {
    productshowit(context, payload) {
      context.commit('PROUCTSSHOW', payload)
    },

    updatelog(context, payload) {
      context.commit('LOGSHOWED', payload)
    },
    isLoad(context, payload) {
      context.commit('ISLOADING', payload)
    },
    showshop(context, payload) {
      context.commit('SHOPSHOW', payload)
    },
    GetProducts(context) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/products/all`;
      context.commit('ISLOADING', true)
      axios.get(api).then(response => {
        context.commit('PRODUCTS', response.data.products)
        context.commit('ISLOADING', false)
      });
    },
    GetProductOne(context, item) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/product/${item}`;
      context.commit('ISLOADING', true);
      context.commit('STATUS', item);
      axios.get(api).then(response => {
        if (response.data.success) {
          context.commit('PROUCTSSHOW', true);
        }
        context.commit('PRODUCTSONE', response.data.product);
        context.commit('STATUS', "");
        context.commit('ISLOADING', false)
      });
    },
    getCart(context) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/cart`;
      context.commit('ISLOADING', true)
      axios.get(api).then(response => {
        if (response.data.data.carts) {
          context.commit('CARTS', response.data.data);
        }
        context.commit('ISLOADING', false)
      });
    },
    addtoCart(context, { id, qty }) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/cart`;
      context.commit('STATUS', id);
      let cart = {
        product_id: id,
        qty
      };
      axios.post(api, { data: cart }).then(response => {
        if (response.data.sucess) {
          context.commit('PROUCTSSHOW', false);
        }
        context.commit('STATUS', "");
        context.dispatch('getCart')
      });
    },
    removeCart(context, id) {
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/cart/${id}`;
      context.commit('ISLOADING', true)
      axios.delete(api).then(response => {
        context.dispatch('getCart');
        context.commit('ISLOADING', false);
      });
    },
    // getOrder() {
    //   const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/order/${state.orderId}`;
    //   axios.get(url).then((response) => {
    //     context.commit('ORDER', response.data.order)
    //   });
    // },
    // payOrder() {
    //   const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/pay/${state.orderId}`;
    //   axios.post(url).then((response) => {
    //     if (response.data.success) {
    //       context.dispatch('getOrder');
    //     }
    //   });
    // },
  },
  getters: {
    products(state) {
      return state.products;
    },
    isLoading(state) {
      return state.isLoading;
    },
    productone(state) {
      return state.productone;
    },
    status(state) {
      return state.status.loadingItem;
    },

  },
  modules: {

  }
})
