<template>
  <div>
    <nav class="col-md-2 d-md-flex justify-content-center bg-dark sidebar">
      <div class="sidebar-sticky justify-content-center">
        <h6
          class="sidebar-heading d-flex justify-content-md-between align-items-md-center px-3 mt-4 mb-4 text-center"
        >
          <div class="m-auto">
            <p>管理員</p>
          </div>
        </h6>
        <ul class="nav flex-md-column mb-5">
          <router-link to="/administrator/adminshop">
            <li class="nav-item text-center">
              <i class="fas fa-box-open"></i>
              產品列表
            </li>
          </router-link>
        </ul>
        <ul class="nav flex-md-column mb-5">
          <li class="nav-item text-center">
            <i class="fas fa-box-open"></i>
            訂單列表
          </li>
        </ul>
        <div class="d-flex justify-content-center">
          <div>
            <button class="m-auto" @click="signout()">登出</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}logout`;
      const vm = this;
      this.$http.post(api).then(response => {
        if (response.data.success) {
          vm.$router.push("/");
        }
      });
    }
  },
  mounted() {}
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}
.sidebar h6,
li,
i {
  color: white;
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: 100vh;
  padding-top: 0.5rem;
  overflow-x: hidden;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}
</style>