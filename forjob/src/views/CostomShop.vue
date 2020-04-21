<template>
  <div class="container-fluid my-5" id="costomshop">
    <div class="row m-4 justify-content-center">
      <div class="row col-md-3 justify-content-start align-items-center" id="select-items">
        <div
          class="d-flex flex-column justify-content-center align-items-center col-md-9 my-3 text-light"
          id="bod"
        >
          <div id="TheOrderSide" @click.prevent="DwrapDown">
            <h3>
              <a href="#" data-rol="order" class="text-decoration-none text-light">+ 秩序陣營</a>
            </h3>
          </div>
          <form action method id="OrderSide">
            <ul class="d-flex flex-column justify-content-center align-items-center p-0">
              <li v-for="order in orderside" :key="order.zoe" class="my-2">
                <input
                  type="checkbox"
                  class="changeOrder"
                  v-model="checkedNames"
                  :value="order.title"
                />
                <label :for="order.zoe">{{order.name}}</label>
              </li>
            </ul>
          </form>
          <div id="TheDeathSide" @click.prevent="DwrapDown">
            <h3>
              <a href="#" data-rol="death" class="text-decoration-none text-light">+ 死亡陣營</a>
            </h3>
          </div>
          <form action method id="DeathSide">
            <ul class="d-flex flex-column justify-content-center align-items-center p-0">
              <li v-for="death in deathside" :key="death.zoe" class="my-2">
                <input type="checkbox" v-model="checkedNames" :value="death.title" />
                <label :for="death.zoe">{{death.name}}</label>
              </li>
            </ul>
          </form>
          <div id="TheChaosSide" @click.prevent="DwrapDown">
            <h3>
              <a href="#" data-rol="chaos" class="text-decoration-none text-light">+ 混沌陣營</a>
            </h3>
          </div>
          <form action method id="ChaosSide">
            <ul class="d-flex flex-column justify-content-center align-items-center p-0">
              <li v-for="chaos in chaoseside" :key="chaos.zoe" class="my-2">
                <input type="checkbox" v-model="checkedNames" :value="chaos.title" />
                <label :for="chaos.zoe">{{chaos.name}}</label>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div class="row col-md-9 justify-content-start align-items-center" id="shop-item">
        <div
          class="d-flex flex-column justify-content-center align-items-center col-md-12 my-3 text-light"
          id="bod-item"
        >
          <div
            class="d-flex flex-column justify-content-center align-items-center my-5"
            id="items-here"
          >
            <div class="my-4">
              <h2 class="text-dark text-center font-weight-bold">商品列表</h2>
            </div>
            <div class="line-of-item"></div>
            <div class="d-flex my-4 justify-content-center col-12">
              <loading :active.sync="isLoading"></loading>
              <div class="d-flex flex-wrap justify-content-center">
                <div
                  class="card my-2 mx-1"
                  style="width:251px;"
                  v-for="items in filterData[currentPage]"
                  :data-rou="items.category"
                  :key="items.id"
                >
                  <img :src="items.imageUrl" class="card-img-top img-fluid" alt="..." />
                  <div class="card-body border-top border-dark bg-dark">
                    <div>
                      <p class="card-text">{{items.title}}</p>
                    </div>
                    <div class="d-flex flex-column">
                      <div class="mt-3">
                        <span
                          style="text-decoration-line: line-through;"
                        >原價 $NT {{items.origin_price | currency}}元</span>
                        <br />
                        <span>現在只要$NT {{items.price | currency}}元</span>
                      </div>
                      <div class="align-self-end mt-3">
                        <button class="text-end" @click.prevent="GetProductOnce(items.id)">詳細內容</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav class="my-5" aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li
                  class="page-item"
                  :class="{active: currentPage === page - 1}"
                  v-for="page in filterData.length"
                  :key="page"
                >
                  <a href="#" class="page-link" @click.prevent="currentPage = page -1 ">{{page}}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="ProductModel"
      :showmodal="modalshowit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg madal-md-sm" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title text-white" id="exampleModalCenterTitle">商品內容</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div
            class="modal-body d-flex flex-md-row flex-column justify-content-center justify-content-md-between text-dark"
          >
            <div class="col-md-7 col-12" style="height:100%">
              <img :src="productone.imageUrl" class="img-fluid" alt />
            </div>
            <div
              class="col-md-5 col-10 h4 mt-3 d-flex flex-column align-self-center justify-content-md-start"
            >
              <div>品名:</div>
              <div class="mb-2">{{productone.title}}</div>
              <div>類型:</div>
              <div class="mb-2">{{productone.description}}</div>
              <div>種族:</div>
              <div class="mb-2">{{productone.category}}</div>
              <div>售價:</div>
              <div class="mb-3">{{productone.price | currency}}元</div>
              <select name="numberitem" id="selectnum" v-model="productone.is_enabled" c>
                <option :value="num" v-for="num in  10" :key="num">選購: {{num}} {{productone.unit}}</option>
              </select>
              <div class="mt-3">小計總額:</div>
              <div>{{productone.is_enabled * productone.price | currency }}元</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger btn-lg" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark btn-lg" @click.prevent="addtoCart()">確認加入購物車</button>
          </div>
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
      orderside: [
        {
          name: "凱恩之女",
          zoe: "DaughterOfKhaine",
          title: "a",
          checked: false
        },
        {
          name: "火焰屠夫",
          zoe: "FyreSlayers",
          title: "b",
          checked: false
        },
        {
          name: "雷鑄神兵",
          zoe: "StormCast",
          title: "c",
          checked: false
        },
        {
          name: "天空矮人",
          zoe: "KharadRonOverLords",
          title: "d",
          checked: false
        }
      ],
      deathside: [
        { name: "食屍鬼貴族", zoe: "Flesh-Eater", title: "e", checked: false },
        {
          name: "納加什軍團",
          zoe: "LegionsOfNagash",
          title: "f",
          checked: false
        },
        { name: "靈魂守衛者", zoe: "NightAunt", title: "g", checked: false }
      ],
      chaoseside: [
        {
          name: "納垢蛆魔",
          zoe: "MaggotkinOfNurgle",
          title: "h",
          checked: false
        },
        { name: "恐虐之刃", zoe: "BladesOfKhorne", title: "i", checked: false },
        { name: "混沌野獸人", zoe: "BeastsOfChaos", title: "j", checked: false }
      ],
      // products: [],
      // productone: {},
      currentPage: 0,
      checkedNames: []
      // status: {
      //   loadingItem: ""
      // }
    };
  },
  methods: {
    addtoCart(id, qty = 1) {
     this.$store.dispatch('addtoCart' , {id , qty})
    },
    GetProductsAJAX() {
      this.$store.dispatch("GetProducts");
    },
    GetProductOnce(item) {
      this.$store.dispatch("GetProductOne", item);
    },
    DwrapDown(event) {
      let e = event.target.dataset.rol;
      let o = document.getElementById("OrderSide");
      let d = document.getElementById("DeathSide");
      let c = document.getElementById("ChaosSide");
      switch (e) {
        case (e = "order"):
          $(o).slideToggle();
          break;
        case (e = "death"):
          $(d).slideToggle();
          break;
        case (e = "chaos"):
          $(c).slideToggle();
      }
    }
  },
  computed: {
    modalshowit() {
      let vm = this;
      let show = vm.$store.state.productshow;
      if (show === true) {
        $("#ProductModel").modal("show");
        vm.$store.dispatch("productshowit", false);
      }
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    productone() {
      return this.$store.state.productone;
    },
    status() {
      return this.$store.state.status.loadingItem;
    },
    filterData() {
      let array = [
        {
          king: this.orderside
        },
        {
          king: this.deathside
        },
        {
          king: this.chaoseside
        }
      ];
      let activeCard = [];
      let vm = this;
      let filters = vm.checkedNames;
      const newProducts = [];
      if (filters != 0) {
        vm.currentPage = 0;
        array.forEach(e => {
          e.king.forEach(g => {
            function cardContainsFilter(i) {
              return g.title.indexOf(i) != -1;
            }
            console.log(cardContainsFilter);
            if (filters.some(cardContainsFilter)) {
              vm.$store.state.products.forEach(item => {
                if (item.category === g.zoe) {
                  activeCard.push(item);
                }
              });
            }
          });
        });
      } else {
        activeCard = vm.$store.state.products;
      }
      activeCard.forEach((item, i) => {
        if (i % 8 === 0) {
          newProducts.push([]);
        }
        const page = parseInt(i / 8);
        newProducts[page].push(item);
      });
      return newProducts;
    }
  },
  mounted() {
    $("#OrderSide").hide();
    $("#DeathSide").hide();
    $("#ChaosSide").hide();
    console.log(this.productone.num);
  },
  created() {
    this.GetProductsAJAX();
  }
};
</script>

<style>
a {
  text-decoration-line: none;
  color: #eee;
}
h3 {
  margin-bottom: 20px;
  margin-top: 20px;
}
label {
  font-size: 20px;
}
input {
  width: 20px;
  height: 20px;
}
#costomshop {
  height: 100%;
  position: relative;
}
#shop-item,
#select-items {
  height: 100%;
}
#bod {
  height: 100%;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.8);
}
#bod-item {
  height: 100%;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.8);
}
.line-of-item {
  width: 96.5%;
  height: 2px;
  background: #363636;
  border: 1px outset #000;
}
#items-here {
  background: #eee;
  width: 95%;
}
</style>