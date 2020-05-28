<template>
  <nav class="navbar navbar-expand-md navbar-dark">
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul class="navbar-nav justify-content-center">
        <router-link to="/">
          <li class="nav-item active my-2 my-md-0 mx-md-3">
            <a class="nav-link h5" href="#">首頁</a>
          </li>
        </router-link>
        <li
          class="nav-item active nav-icon d-flex align-items-center stext-light my-2 my-md-0 mx-md-5"
        >
          <img
            src="../assets/images/assassin_s_creed_icon_grey_by_danishman_d35u30h.png"
            class="img-fluid"
            alt
          />
        </li>
        <router-link to="/costom/costomshop">
          <li class="nav-item active my-2 my-md-0 mx-md-4">
            <a class="nav-link h5" href="#">產品列表</a>
          </li>
        </router-link>
      </ul>
      <div class="nav-item row my-2 my-md-0">
        <a href="#" class="nav-link">
          <i class="fas fa-cart-arrow-down fa-2x text-light"></i>
        </a>
        <router-link to="/costom/login">
          <a href="#" class="nav-link">
            <i class="fas fa-user-circle fa-2x text-light"></i>
          </a>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      navbar: true
    };
  },
  mounted() {
    let navbar = document.getElementById("navbarNav");
    let list = document.querySelectorAll(".navbar-nav li");
    let btn = document.querySelector(".navbar-toggler");
    $(btn).click(() => {
      $(navbar).slideToggle();
      list.forEach(() => {
        $(list).click(() => {
          $(navbar).slideUp();
        });
      });
    });
  }
};
</script>
<style>
.navbar {
  overflow-x: hidden;
}
.navbar-nav a {
  text-decoration: none;
}
.nav-icon {
  max-width: 40px;
}
.nav-icon::before {
  content: "As";
  display: inline;
  color: #fff;
}
.nav-icon::after {
  content: "Store";
  display: inline;
  color: #fff;
}
@media (max-width: 768px) {
  .nav-icon {
    order: 2;
  }
}
</style>
