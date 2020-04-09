<template>
  <div>
    <NavBar />
    <div class="container-fluid">
      <div class="row">
        <main
          role="main"
          class="row col-12 m-auto justify-content-center align-items-center"
          id="mind"
        >
          <router-view></router-view>
        </main>
        <div class="row justify-content-center align-items-center" v-if="logshowit" id="Dasg-log">
          <div class="col-md-5">
            <Login />
          </div>
        </div>
        <div class="row justify-content-center align-items-center" v-if="shopshowit" id="Dasg-log2">
          <div class="col-md-5">
            <CostomPagge />
          </div>
        </div>
        <div id="shoppagge" class="d-flex justify-content-center align-items-center" @click.prevent="ShowShop">
          <i class="fas fa-cart-arrow-down fa-2x text-light mr-1"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import NavBar from "./NavBar";
import Login from "./Login";
import CostomPagge from "./CostomPagge"

export default {
  components: {
    NavBar,
    Login,
    CostomPagge
  },
  data() {
    return {};
  },
  methods: {
    // ShowShop(){
    //   let vm = this;
    //   vm.$store.dispatch('showshop', true);
    // }
  },
  computed: {
    logshowit() {
      return this.$store.state.logShow;
      
    },
    shopshowit() {
      return this.$store.state.shopshow;
    }
  }
};
</script>

<style scoped lang="scss">
#mind {
  background: url("../assets/images/827102967_preview_Wiki-background.jpg")
    no-repeat center center fixed;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
#Dasg-log {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}
#Dasg-log2 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}
#shoppagge {
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
#shoppagge:hover {
  box-shadow: unset #eee;
  transform: translate(5px, 10px);
  transition: 0.5s;
}
@media (min-width: 768px) {
  #shoppagge {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }
}
</style>
