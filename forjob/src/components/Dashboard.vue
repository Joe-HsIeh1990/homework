<template>
  <div>
    <NavBar />
    <Alert />
    <div class="container-fluid">
      <div class="row">
        <main
          role="main"
          class="row col-12 m-auto justify-content-center align-items-center mind"
        >
          <router-view></router-view>
        </main>
        <!-- icon -->
        <div
          class="d-flex justify-content-center align-items-center shoppagge"
          @click.prevent="ShowShop"
        >
          <div class="circle_num text-center" v-if="cart.carts.length" >
            <span class="text-white">{{cart.carts.length}}</span>
          </div>
          <i class="fas fa-cart-arrow-down fa-2x text-light mr-1"></i>
        </div>
        <Login />
        <ShoppingCart />
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import NavBar from "./NavBar";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import Alert from "./Alert";
export default {
  components: {
    NavBar,
    Login,
    ShoppingCart,
    Alert
  },
  data() {
    return {};
  },
  methods: {
    getCarts() {
      const vm = this;
      vm.$store.dispatch("getCart");
    },
    //open costomshop modal
    ShowShop() {
      this.$store.dispatch("showshop", true);
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  mounted() {

  },
  created(){
    this.getCarts()
  }
};
</script>

<style scoped lang="scss">
.circle_num {
  position: absolute;
  background: red;
  right: 0;
  top: 0;
  width: 35%;
  height: 35%;
  border: 1px solid red;
  border-radius: 50%;
}
// background
.mind {
  background: url("../assets/images/827102967_preview_Wiki-background.jpg")
    no-repeat center center fixed;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
// icon css
.shoppagge {
  position: fixed;
  right: 10px;
  bottom: 50px;
  border: 1px solid white;
  box-shadow: 1px 1px 3px #eee;
  border-radius: 50%;
  background-color: #000;
  width: 75px;
  height: 75px;
}
.shoppagge:hover {
  box-shadow: unset #eee;
  transform: translate(5px, 10px);
  transition: 0.5s;
}
.shoppagge i {
  position: relative;
}
@media (min-width: 768px) {
  .shoppagge {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }
}
</style>
