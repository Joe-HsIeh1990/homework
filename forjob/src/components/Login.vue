<template>
  <form
    action="form-login"
    class="d-flex flex-column align-items-center"
    :signin="logshowit"
    @submit.prevent="signin"
  >
    <loading :active.sync="isloading"></loading>
    <div
      class="modal fade"
      id="makemodal"
      :key="logshowit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark mb-2">
            <h5 class="modal-title text-white" id="exampleModalCenterTitle">請登入</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex flex-column align-items-center">
            <h2 class="mb-2">管理者系統</h2>
            <div class="mb-2">
              <label for="inputEmail" class="text-dark mb-0">帳號</label>
              <br />
              <input
                type="email"
                id="inputEmail"
                style="width:100%;height:75%;"
                v-model="user.username"
                placeholder="請輸入Email"
              />
            </div>
            <div class="mb-2">
              <label for="inputPassword" class="text-dark mb-0">密碼</label>
              <br />
              <input
                type="password"
                id="inputPassword"
                style="width:100%;height:75%;"
                v-model="user.password"
                placeholder="請輸入密碼"
              />
            </div>
            <div class="d-flex ">
                <span class="text-danger mt-4  text-center" v-if="errorAdd">請輸入正確帳號密碼</span>
              <div class="mt-4 d-flex justify-content-end" style="width:236px;">
                <button type="button" class="btn btn-danger mr-2" data-dismiss="modal">取消</button>
                <button class="btn btn-dark" type="submit">確認</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template> 
<script>
import $ from "jquery";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      errorAdd: false
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}admin/signin`;
      const vm = this;
      vm.$store.dispatch("isLoad", true);
      this.$http.post(api, vm.user).then(response => {
        if (response.data.success) {
          if (vm.$store.state.logShow == false) {
            $("#makemodal").modal("hide");
          }
          vm.errorAdd = false;
          vm.$store.dispatch("isLoad", false);
          vm.$router.push("/administrator");
        } else {
          vm.errorAdd = true;
          vm.$store.dispatch("isLoad", false);
        }
      });
    }
  },
  computed: {
    logshowit() {
      let vm = this;
      let status = this.$store.state.logShow;
      if (status === true) {
        $("#makemodal").modal("show");
        vm.$store.dispatch("updatelog", false);
      }
    },
    isloading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style>
</style>