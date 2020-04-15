<!--<template>
<!--   <div -->
<!--      class="modal fade" -->
<!--      id="costomtakemodal" -->
<!--      tabindex="-1" -->
<!--      :key="shopcartshow" -->
<!--      role="dialog" -->
<!--      aria-labelledby="exampleModalCenterTitle" -->
<!--      aria-hidden="true" -->
<!--    > -->
<!--      <div class="modal-dialog modal-dialog-centered" role="document"> -->
<!--        <div class="modal-content"> -->
<!--          <div class="modal-header bg-dark text-white"> -->
<!--            <h5 class="modal-title" id="exampleModalCenterTitle">購物車</h5> -->
<!--            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> -->
<!--              <span aria-hidden="true">&times;</span> -->
<!--            </button> -->
<!--          </div> -->
<!--          <div class="modal-body"> --> -->
          <!-- <div class="d-flex">
            <table class="table">
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
                      class="btn btn-outline-danger btn-sm"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <td class="align-middle">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                  </td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-right">總計</td>
                  <td class="text-right">{{ cart.total }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td colspan="3" class="text-right text-success">折扣價</td>
                  <td class="text-right text-success">{{ cart.final_total }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div> -->
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {

    };
  },
  methods: {
    Cart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/cart`;
      console.log(api);
      vm.status.loadingItem = id;
      vm.$store.commit('')
      this.$http.post(api, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
      });
    },
    getCart() {
      const vm = this;
      const api = `${process.env.APIPATH}api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        vm.cart = response.data.data;
        vm.isLoading = false;
        console.log(response);
      });
    }
  },
  computed: {
    shopcartshow() {
      let vm = this;
      let status = this.$store.state.shopshow;
      if (status === true) {
        $("#costomtakemodal").modal("show");
        vm.$store.commit("SHOPSHOW", false);
      }
      return status;
    }
  }
};
</script>

<style>
</style>