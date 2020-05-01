<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/White-Warhammerlogo.png" class="logo" alt />
      </a>
      <button class="navbar-toggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="/aboutus">
            <li class="nav-item active mx-2">
              <a class="nav-link h5" href="#">關於我們</a>
            </li>
          </router-link>
          <router-link to="/index">
            <li class="nav-item active mx-2">
              <a class="nav-link h5" href="#">西格瑪時代紀事</a>
            </li>
          </router-link>
          <router-link to="/costomshop">
            <li class="nav-item active mx-2">
              <a class="nav-link h5" href="#">商品列表</a>
            </li>
          </router-link>
        </ul>
        <div class="nav-item" @click="LoginCreate">
          <a href="#" class="nav-link">
            <i class="fas fa-user-circle fa-3x text-light"></i>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "NavBar",
  data() {
    return {
      getback: true
    };
  },
  methods: {
    LoginCreate() {
      this.$store.dispatch('updatelog' , true); 
    }
  },
  computed: {},
  mounted() {
    let n = document.getElementById("navbarNav");
    let list = document.querySelectorAll(".navbar-nav li");
    let btn = document.querySelector(".navbar-toggler");
    $(btn).click(() => {
      $(n).slideToggle();
      list.forEach(() => {
        $(list).click(() => {
          $(n).slideUp();
        });
      });
    });
  }
};
</script>

