<template>
  <div>
    <form class="form-signin border rounded" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal text-light mb-4">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        v-model="user.username"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <div class="row justify-content-between mx-3">
        <button class="btn btn-lg btn-primary col-5 btn-block my-5" type="submit">Sign in</button>
        <button class="btn btn-lg btn-primary col-5 btn-block my-5" type="submit" @click="cancelit">Cancel</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}admin/signin`;
      const vm = this;
      console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_COSTOM);
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/administrator/adminshop");
          vm.$store.dispatch('updatelog',false)
        }
      });
    },
    cancelit(){
      let vm = this;
      vm.$store.dispatch('updatelog', false)
    }
  }
};
</script>
<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  background: #000;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
