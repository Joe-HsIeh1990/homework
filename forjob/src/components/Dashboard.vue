<template>
  <div>
    <NavBar />
    <div class="container-fluid">
      <div class="row">
        <main
          role="main"
          class="row col-12 m-auto justify-content-center align-items-center"
          id="mind"
        >
          <router-view></router-view>
        </main>
        <!-- icon -->
        <div class="d-flex justify-content-center align-items-center" id="shoppagge" @click.prevent="ShowShop">
          <i class="fas fa-cart-arrow-down fa-2x text-light mr-1"></i>
        </div>
        <!-- login modal -->
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
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">55667</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <!-- costomshop modal -->
        <div
          class="modal fade"
          id="costomtakemodal"
          tabindex="-1"
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
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import NavBar from "./NavBar";


export default {
  components: {
    NavBar,

  },
  data() {
    return {};
  },
  methods: {
    //open costomshop modal
    ShowShop() {
      $("#costomtakemodal").modal("show");
    }
  },
  computed: {
    // open login modal
    logshowit() {
      let vm = this;
      let status = this.$store.state.logShow;
      if(status === true){
        $('#makemodal').modal('show');
        vm.$store.commit('LOGSHOWED' , false)  
      };
      
      return status
    },
  },
  mounted(){
  }
};
</script>

<style scoped lang="scss">
// background
#mind {
  background: url("../assets/images/827102967_preview_Wiki-background.jpg")
    no-repeat center center fixed;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
// icon css
#shoppagge {
  position: fixed;
  right: 10px;
  bottom: 50px;
  border: 1px solid white;
  box-shadow: 1px 1px 3px #eee;
  border-radius: 50%;
  background-color: #000;
  width: 75px;
  height: 75px;
}
#shoppagge:hover {
  box-shadow: unset #eee;
  transform: translate(5px, 10px);
  transition: 0.5s;
}
@media (min-width: 768px) {
  #shoppagge {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }
}
</style>
