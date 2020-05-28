<template>
  <div>
    <div class="log container-fluid d-flex justify-content-center align-items-center">
      <div class="container d-flex justify-content-center align-items-center">
        <form class="signin col-md-6 col-8 p-3" @submit.prevent="signin">
          <h1 class="text-center">請登入</h1>
          <div class="form-group">
            <label for="Email1">Email</label>
            <input
              v-model="user.username"
              type="email"
              class="form-control"
              id="Email1"
              aria-describedby="emailHelp"
              placeholder="請輸入 Email"
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="Password"
              placeholder="請輸入 Password"
            />
          </div>
          <button type="submit" class="btn btn-dark">確認</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}admin/signin`;
      const vm = this;
      // console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_COSTOM);
      this.$http.post(api, vm.user).then(response => {
        if (response.data.success) {
          vm.$router.push('/administrator')
        }
      });
    }
  }
};
</script>
<style>
.log {
  height: 75vh;
  background: url("../assets/images/loginbg.jpg") center center no-repeat fixed;
  background-size: cover;
}
.signin {
  border-radius: 5px;
  background-color: #fff;
}
</style>