<template>
  <div
    class="modal fade"
    id="costomtakemodal"
    tabindex="-1"
    :key="shopcartshow"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">123</div>
        <div class="modal-footer">
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