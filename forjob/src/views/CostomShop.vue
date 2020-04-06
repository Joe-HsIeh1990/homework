<template>
  <div class="container-fluid my-5" id="costomshop">
    <div class="row m-4">
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
              <!-- <loading :active.sync="isLoading"></loading> -->
              <div class="d-flex flex-wrap justify-content-center">
                <div
                  class="card my-2 mx-1"
                  style="width:251px;"
                  v-for="items in filterData"
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
                        <span>原價 $NT {{items.origin_price | currency}}元</span>
                        <br />
                        <span>現在只要$NT {{items.price | currency}}元</span>
                      </div>
                      <div class="align-self-end mt-3">
                        <button class="text-end">加入購物車</button>
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
                  :class="{active:currentPage === page - 1}"
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
        { name: "食屍鬼", zoe: "Flesh-Eater", title: "e", checked: false },
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
      products: [],
      // pagination: {},
      filterArray: [],
      currentPage: 0,
      checkedNames: []
    };
  },
  methods: {
    GetProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/products/all`;
      // vm.$store.state.isLoading = true;
      vm.$http.get(api).then(response => {
        // vm.$store.state.isLoading = false;
        vm.products = response.data.products;
      });
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
    updateFilter() {
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
      array.forEach(e => {
        e.king.forEach(g => {
          function cardContainsFilter(i) {
            return g.title.indexOf(i) != -1;
          }
          if (filters.some(cardContainsFilter)) {
            vm.products.forEach((el,i) => {
              if (el.category === g.zoe) {
                activeCard.push(el)
              }
            });
          }
        });
      });
      return activeCard;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    filterData() {
      let vm = this;
      const newProducts = [];
      console.log(vm.updateFilter)
      vm.updateFilter.forEach((item, i) => {
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
  },
  created() {
    this.GetProducts();
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