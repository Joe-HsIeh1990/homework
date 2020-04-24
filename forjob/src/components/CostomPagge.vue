<template>
  <header class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="createOrder">
      <div class="form-group">
        <label for="useremail">Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="useremail"
          v-model="form.user.email"
          placeholder="請輸入 Email"
        />
        <span class="text-danger"></span>
      </div>
      <div class="form-group">
        <label for="username">收件人姓名</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="username"
          v-model="form.user.name"
          placeholder="輸入姓名"
        />
        <span class="text-danger">請輸入姓名</span>
      </div>

      <div class="form-group">
        <label for="usertel">收件人電話</label>
        <input
          type="tel"
          class="form-control"
          id="usertel"
          name="tel"
          v-model="form.user.tel"
          placeholder="請輸入電話"
        />
        <span class="text-danger">請填寫手機資料</span>
      </div>
      <div class="form-group">
        <label for="useraddress">收件人地址</label>
        <input
          type="text"
          class="form-control"
          name="address"
          id="useraddress"
          v-model="form.user.address"
          placeholder="請輸入地址"
        />
        <span class="text-danger">地址欄位不得留空</span>
      </div>
      <div class="form-group">
        <label for="comment">留言</label>
        <textarea id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
      </div>
      <div class="text-right">
        <button class="btn btn-danger">送出訂單</button>
      </div>
    </form>
  </header>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      this.$http.post(api, { data: order }).then(response => {
        console.log("訂單已建立", response);
        if (response.data.success) {
          vm.$router.push(`/customer_checkout/${response.data.orderId}`);
        }
      });
    }
  },
  computed: {}
};
</script>
<style>
</style>