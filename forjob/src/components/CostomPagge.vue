<template>
  <div class="my-5 row justify-content-center bg-dark text-light">
    <div class="my-5 row justify-content-center">
      <table class="table">
        <thead>
          <th></th>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle">
              <!-- <button type="button" class="btn btn-outline-danger btn-sm">
                <i class="far fa-trash-alt"></i>
              </button>-->
            </td>
            <td class="align-middle">
              <div></div>
            </td>
            <td class="align-middle"></td>
            <td class="align-middle text-right"></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right">總計</td>
            <td class="text-right"></td>
          </tr>
          <tr>
            <td colspan="3" class="text-right text-success">折扣價</td>
            <td class="text-right text-success"></td>
          </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control" placeholder="請輸入優惠碼" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">套用優惠碼</button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <button>送出</button>
        </div>
        <div class="col-6" @click="clickCancl()">
          <button>取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickCancl() {
      this.$store.dispatch("ClickShop", false);
    }
  },
  computed: {}
};
</script>
<style>
tr,
th {
  color: #eee;
}
</style>