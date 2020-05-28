<template>
  <div class="container-fluid px-0">
    <div class="bgcolor">
      <div class="costombg d-flex align-items-center justify-content-center">
        <h2 class="font-weight-bold text-light">PRODUCTS LIST</h2>
      </div>
      <div class="coupon">
        <h4 class="text-center bg-dark mb-0">
          <a href="#">現享8折優惠</a>
        </h4>
      </div>
      <div class="costomshop">
        <ul class="mx-auto row justify-content-md-around mb-0 px-0">
          <li class="select-place col-md-3 col-12 d-flex flex-column mx-auto">
            <div v-if="rwdselect">
              <div
                class="btn-drop d-flex align-items-center justify-content-center py-2"
                :class="{ 'active' : Btn_active }"
                @click.prevent="dropdown()"
              >
                <h5 class="mb-0">
                  <span class="plus" :class="{'active': plus_icon}"></span> 類型產品
                </h5>
              </div>
              <ul class="drop-menu px-0" v-show="drop">
                <li
                  class="d-flex align-items-center py-2 px-5"
                  v-for="clickbox in  listclick"
                  :key="clickbox.zoe"
                  :data-ck="clickbox.zoe"
                  @click="targeit"
                >
                  <a href="#">{{ clickbox.name }}&nbsp;</a>
                </li>
              </ul>
            </div>
            <div class>
              <img src="../assets/storeimages/ACU_Wallpaper_Portrait.jpg" alt />
            </div>
          </li>
          <li class="item-place col-md-9 col-12 px-0 justify-content-center align-items-center">
            <form class="item-kind d-flex justify-content-center align-items-center mb-2">
              <div class="d-flex jutify-content-around">
                <div
                  class="item-check d-flex align-items-center"
                  v-for="itembox in checkbox"
                  :key="itembox.title"
                >
                  <label :for="itembox.zoe" class="h5 mb-0">{{ itembox.name }}</label>
                  <input
                    type="checkbox"
                    class="check"
                    name
                    :id="itembox.zoe"
                    v-model="checkedNames"
                    :value="itembox.zoe"
                  />
                </div>
              </div>
            </form>
            <div class="col-12 d-flex flex-column jusitfy-content-center mx-0">
              <div class="col-12 row jusitfy-content-center mx-0">
                <div
                  class="item-card d-flex flex-md-column flex-row mx-md-2 mb-2"
                  v-for="itemall in flitersData[currentPage]"
                  :key="itemall.id"
                >
                  <div class="img-position" @mousemove.stop="HoverShow">
                    <img
                      :src="itemall.imageUrl"
                      class="item-card-img img-fluid"
                      :data-num="itemall.id"
                      alt
                    />
                    <div
                      class="item-bt d-flex justify-content-around align-items-center"
                      v-if="itemall.is_enabled"
                      :data-num="itemall.id"
                    >
                      <a href="#" class="btn btn-outline-light" :data-num="itemall.id">More</a>
                      <a href="#" class="btn btn-outline-light" :data-num="itemall.id">加入購物車</a>
                    </div>
                  </div>
                  <div class="item-card-text d-flex flex-column justify-content-center text-dark">
                    <p class="h5">
                      {{ itemall.title }}
                      <br />
                      <small class="h6">{{ itemall.description }}</small>
                    </p>
                    <h6 class="item-txt-num text-right h4" v-if="!item_btn">NT${{ itemall.price }}</h6>
                    <div class="d-flex justify-content-end mt-5" v-if="item_btn">
                      <a href="#" class="btn btn-dark">More</a>
                      <h6 class="text-right h4 ml-3">NT${{ itemall.price }}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <nav class="my-5" aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li
                    class="page-item"
                    :class="{active: currentPage === page - 1}"
                    v-for="page in flitersData.length"
                    :key="page"
                  >
                    <a href="#" class="page-link" @click.prevent="currentPage = page -1 ">{{page}}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      plus: true,
      minus: false,
      drop: false,
      Btn_active: false,
      plus_icon: false,
      rwdselect: false,
      hover_btn: false,
      item_btn: false,
      currentPage: 0,
      checkedNames: [],
      shopitems: [],
      listclick: [
        {
          name: "ALL",
          zoe: "all"
        },
        {
          name: "Game",
          zoe: "game",
          title: "gameshow"
        },
        {
          name: "DLC",
          zoe: "DLC",
          title: "DLCshow"
        }
      ],
      checkbox: [
        // {
        //   name: "ALL",
        //   zoe: "all",
        //   title: "all",
        //   checkboolen: false
        // },
        {
          name: "Game",
          zoe: "game",
          title: "game",
          checkboolen: false
        },
        {
          name: "DLC",
          zoe: "DLC",
          title: "DLC",
          checkboolen: false
        }
      ]
    };
  },
  methods: {
    GetProducts() {
      let vm = this;
      vm.$store.dispatch("GetProducts");
    },
    dropdown() {
      let vm = this;
      let dropmenu = document.querySelector(".drop-menu");
      if (vm.drop === true) {
        vm.drop = false;
        vm.plus = true;
        vm.minus = false;
        vm.Btn_active = false;
        vm.plus_icon = false;
        $(dropmenu).slideUp();
      } else {
        vm.drop = true;
        vm.plus = false;
        vm.minus = true;
        vm.Btn_active = true;
        vm.plus_icon = true;
        $(dropmenu).slideDown();
      }
    },
    HoverShow(e) {
      let vm = this;
      let take = e.target.dataset.num;
      vm.$store.state.products.forEach(item => {
        if (take == item.id) {
          item.is_enabled = true;
        } else {
          item.is_enabled = false;
        }
      });
    },
    targeit(e){
      let vm = this;
      let target = e.target.dataset.ck;
      console.log(target)
      console.log(vm.flitersData)
    }
  },
  computed: {
    flitersData() {
      let vm = this;
      let newArray = [];
      let newproducts = [];
      let fliters = vm.checkedNames;
      if (fliters != 0) {
        vm.checkbox.forEach(list => {
          function cardFliter(i) {
            return list.zoe.indexOf(i) != -1;
          }
          if (fliters.some(cardFliter)) {
            vm.$store.state.products.forEach(items => {
              if (items.category === list.zoe) {
                newArray.push(items);
              }
            });
          }
        });
      } else {
        newArray = vm.$store.state.products;
      }
      newArray.forEach((item, index) => {
        if (index % 8 === 0) {
          newproducts.push([]);
        }
        const page = parseInt(index / 8);
        newproducts[page].push(item);
      });
      return newproducts;
    },
    fliterGame() {
      let vm = this;
      let gamer = vm.$store.state.products.filter(function(item) {
        if (item.category == "game") {
          return item;
        }
      });
      return gamer;
    }
  },
  mounted() {
    let vm = this;
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      $(".item-txt-num").hide();
      vm.rwdselect = false;
      vm.item_btn = true;
    } else {
      $(".item-txt-num").show();
      $(".item-bt").hide();
      vm.rwdselect = true;
      vm.item_btn = false;
    }
  },
  created() {
    this.GetProducts();
  }
};
</script>
<style lang="scss">
.bgcolor {
  background-color: #e5e8f0;
}
input {
  width: 44px;
  height: 20px;
}
.costombg {
  height: 40vh;
  background: url("../assets/images/d4ynrpi-79f1d2ed-c0b5-4d47-ab85-829bf7a1806f.png")
    center center no-repeat;
  background-size: cover;
  overflow: hidden;
}
.coupon h4 {
  padding: 5px 0;
}
.coupon h4 a {
  text-decoration: none;
  color: #fff;
}
.select-place {
  cursor: pointer;
}
.drop-menu {
  background-color: #edeff5;
}
.drop-menu li a {
  color: #a8a3a3;
  text-decoration: none;
}
.drop-menu li p {
  color: #a8a3a3;
}
.drop-menu li:hover {
  background-color: #cfcccc;
}
.drop-menu li:hover a {
  color: #35c1cf;
}
.drop-menu li:hover p {
  color: #35c1cf;
}
.plus {
  width: 5%;
  height: 2px;
  background: #a8a3a3;
  top: 45%;
  left: 5%;
  margin: auto;
  position: absolute;
  border-radius: 20px;
  transition: 0.5s;
}
.plus::before {
  content: "";
  width: 100%;
  height: 1.5px;
  margin: auto;
  position: absolute;
  background: #a8a3a3;
  bottom: 0;
  left: 0;
  transform: rotate(90deg);
  transition: 0.5s;
}
.plus.active {
  background-color: #fff;
  transition: 0.5s;
}
.plus.active::before {
  background-color: #fff;
  transform: rotate(0deg);
  transition: 0.5s;
}
.btn-drop {
  position: relative;
  text-align: center;
  background-color: #fff;
  color: #a8a3a3;
}
.btn-drop.active {
  color: #fff;
  background-color: #35c1cf;
}
.item-place {
  background-color: #edeff5;
}
.item-kind {
  height: 40px;
  width: 100%;
  background-color: #35c1cf;
  color: #fff;
}
.item-card {
  width: 23.5%;
}
.img-position {
  position: relative;
  width: 100%;
}
.item-bt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(59, 57, 57, 0.7);
  z-index: 2;
}
.item-card-img {
  width: 100%;
}
.item-card-text {
  padding: 10px 10px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  white-space: nowrap;
}
@media (max-width: 767px) {
  .select-place {
    padding: 0;
  }

  .item-card {
    width: 100%;
    background-color: #fff;
  }
  .img-position {
    width: auto;
  }
  .item-card-img {
    max-width: 100%;
  }
  .item-card-text {
    width: 100%;
    white-space: nowrap;
  }
}
</style>