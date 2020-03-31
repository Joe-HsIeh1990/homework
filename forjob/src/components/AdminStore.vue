<template>
  <div>
    <nav class="col-md-2 d-md-flex justify-content-center bg-dark sidebar" v-if="RWDside">
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
        <ul class="nav flex-md-column mb-5">
          <li class="nav-item text-center">
            <i class="fas fa-box-open"></i>
            優惠卷
          </li>
        </ul>
        <div class="d-flex justify-content-center">
          <div>
            <button @click="signout" class="m-auto">登出</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AdminStore",
  data() {
    return {
      wid: 0,
      bo: true
    };
  },
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}logout`;
      const vm = this;
      console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_COSTOM);
      this.$http.post(api).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/aboutus");
        }
      });
    },
  },
  computed: {
    RWDside() {
      let w = window.innerWidth;
      let vm = this;
      console.log(w);
      vm.wid = w;
      if (vm.wid < 768) {
        return (vm.bo = false);
        console.log(vm.bo);
      } else {
        return (vm.bo = true);
        console.log(vm.bo);
      }


    }
  },
  mounted() {
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
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
  /* overflow-x: hidden;
  overflow-y: auto; Scrollable contents if viewport is shorter than content. */
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