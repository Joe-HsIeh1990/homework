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
                  v-model="order.checked"
                  :data-index="order.zoe"
                  @click="GetProducts(order)"
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
                <input type="checkbox" />
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
                <input type="checkbox" />
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
            <div class="row flex-wrap my-4 justify-content-center justify-content-md-start col-12">
              <div
                class="card my-2 col-3"
                v-for="items in products"
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
            <!-- <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item" :class="{'disabled': !pagination.has_pre}">
                  <a
                    class="page-link"
                    href="#"
                    aria-label="Previous"
                    @click.prevent="GetProducts(pagination.current_page - 1)"
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">上一頁</span>
                  </a>
                </li>
                <li
                  class="page-item"
                  v-for="page in pagination.total_pages"
                  :key="page"
                  :class="{'active' : pagination.current_page === page}"
                >
                  <a class="page-link" href="#" @click.prevent="GetProducts(page)">{{page}}</a>
                </li>
                <li class="page-item" :class="{'disabled': !pagination.has_next}">
                  <a
                    class="page-link bg-dark text-white"
                    href="#"
                    aria-label="Next"
                    @click.prevent="GetProducts(pagination.current_page + 1)"
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">下一頁</span>
                  </a>
                </li>
              </ul>
            </nav>-->
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
        { name: "食屍鬼", zoe: "Flesh-Eater", checked: false },
        { name: "納加什軍團", zoe: "LegionsOfNagash", checked: false },
        { name: "靈魂守衛者", zoe: "NightAunt", checked: false }
      ],
      chaoseside: [
        { name: "納垢蛆魔", zoe: "MaggotkinOfNurgle", checked: false },
        { name: "恐虐之刃", zoe: "BladesOfKhorne", checked: false },
        { name: "混沌野獸人", zoe: "BeastsOfChaos", checked: false }
      ],
      products: [],
      // pagination: {},
      filterArray: []
    };
  },
  methods: {
    GetProducts(item) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_COSTOM}/products/all`;
      vm.$http.get(api).then(response => {
        vm.filterArray = response.data.products;
        if (item.checked === true) {
          vm.orderside.forEach(el => {
            if (el.title == item.title) {
              vm.filterArray.forEach(e => {
                if (el.zoe == e.category) {
                  vm.products.push(e);
                }
              });
            }
          });
        } else {
          let ru

          
        }
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
  watch: {},
  mounted() {
    $("#OrderSide").hide();
    $("#DeathSide").hide();
    $("#ChaosSide").hide();
  },
  created() {
    // this.GetProducts();
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