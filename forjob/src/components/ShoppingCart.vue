<template>
  <div
    class="modal fade"
    id="cardmodal"
    :cartshow="shopmodal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalCenterTitle">購物車</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body pt-0">
          <table class="table table-borderless">
            <thead>
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click.prevent="removeCart(item.id)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }} {{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total | currency}}元</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cart.total | currency }}元</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-dark">下單去</button>
        </div>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
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
            v-validate="'required|email'"
            :class="{'is-invalid': errors.has('email')}"
          />
          <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
        </div>
        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="username"
            :class="{'is-invalid': errors.has('name')}"
            v-model="form.user.name"
            placeholder="輸入姓名"
            v-validate="'required'"
          />
          <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
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
            v-validate="'required'"
            :class="{'is-invalid': errors.has('tel')}"
          />
          <span class="text-danger" v-if="errors.has('tel')">請填寫手機資料</span>
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
            :class="{'is-invalid': errors.has('address')}"
            v-validate="'required'"
          />
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>
        <div class="form-group">
          <label for="comment">留言</label>
          <textarea id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Alert from "./Alert";
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    removeCart(id) {
      this.$store.dispatch("removeCart", id);
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$http.post(api, { data: order }).then(response => {
            console.log("訂單已建立", response);
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
          });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    shopmodal() {
      let vm = this;
      let shopmodal = this.$store.state.shopshow;
      if (shopmodal === true) {
        $("#cardmodal").modal("show");
        vm.$store.dispatch("showshop", false);
      }
    }
  },
  created() {
    this.getCart();
  }
};
</script>

<style>
</style>