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
          <button type="button" class="btn btn-danger" v-if="openitem" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-dark" v-if="openitem" @click="opencheck() ">下單去</button>
          <div class="col-12 checkbox" v-if="itemcheck">
            <ValidationObserver v-slot="{ invalid , reset }">
              <form @submit.prevent="createOrder" @reset.prevent="reset">
                <div class="form-group">
                  <label for="useremail">Email</label>
                  <ValidationProvider
                    name="Email"
                    rules="required|email"
                    v-slot="{ errors, classes }"
                  >
                    <div :class="classes">
                      <input
                        type="Email"
                        class="form-control"
                        name="Email"
                        id="useremail"
                        v-model="form.user.email"
                        placeholder="請輸入 Email"
                      />
                      <span class="text-danger">{{errors[0]}}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="username">收件人姓名</label>
                  <ValidationProvider
                    name="姓名"
                    rules="required|alpha"
                    v-slot="{ errors , classes }"
                  >
                    <div :class="classes">
                      <input
                        type="text"
                        class="form-control"
                        name="姓名"
                        id="username"
                        v-model="form.user.name"
                        placeholder="輸入姓名"
                      />
                      <span class="text-danger">{{errors[0]}}</span>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="form-group">
                  <label for="usertel">收件人電話</label>
                  <ValidationProvider
                    name="手機號碼"
                    rules="required|phone:10"
                    v-slot="{ errors , classes}"
                  >
                    <div :class=" classes">
                      <input
                        type="手機號碼"
                        class="form-control"
                        id="usertel"
                        name="tel"
                        v-model="form.user.tel"
                        placeholder="請輸入電話"
                      />
                      <span class="text-danger">{{errors[0]}}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="useraddress">收件人地址</label>
                  <ValidationProvider
                    name="地址"
                    rules="required|addres:7"
                    v-slot="{ errors , classes }"
                  >
                    <div :class="classes">
                      <input
                        type="text"
                        class="form-control"
                        name="地址"
                        id="useraddress"
                        v-model="form.user.address"
                        placeholder="請輸入地址"
                      />
                      <span class="text-danger">{{errors[0]}}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="comment">留言</label>
                  <textarea
                    id="comment"
                    class="form-control"
                    cols="30"
                    rows="10"
                    v-model="form.message"
                  ></textarea>
                </div>
                <div class="text-right">
                  <button type="reset" class="mr-2 btn btn-light">清除錯誤提示</button>
                  <button class="mr-2 btn btn-danger" @click.prevent="closecheck()">取消</button>
                  <button class="btn btn-dark" @click="close" :disabled="invalid">送出訂單</button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "./Alert";
import $ from "jquery";
import { ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationObserver
  },
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
      },
      openitem: true,
      itemcheck: false
    };
  },
  methods: {
    getCart() {
      const vm = this;
      vm.$store.dispatch("getCart");
    },
    removeCart(id) {
      this.$store.dispatch("removeCart", id);
    },
    opencheck() {
      const vm = this;
      if (vm.cart.carts.length) {
        vm.itemcheck = true;
        vm.openitem = false;
        $(".checkbox").slideDown();
      } else {
        vm.$bus.$emit("message:push", "請添加購物車內容", "danger");
      }
    },
    closecheck() {
      const vm = this;
      vm.itemcheck = false;
      vm.openitem = true;
      $(".checkbox").slideUp();
    },
    close(){
      $("#cardmodal").modal("hide");
    },
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/order`;
      const order = vm.form;
      vm.$store.dispatch("isLoad", true);
      vm.$http.post(api, { data: order }).then(response => {
        if (response.data.success) {
          vm.$router.push(`/checkorder/${response.data.orderId}`);
          vm.$store.dispatch("isLoad", false);
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
.invalid {
  color: #eb0600;
}
.invalid input {
  border: 1px #eb0600 solid;
}
.valid {
  color: blue;
}
.valid input {
  border: 1px solid blue;
}
</style>