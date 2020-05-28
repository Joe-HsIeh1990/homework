<template>
  <div class="container-fluid px-0 mx-0">
    <div class="home-bg d-flex flex-column justify-content-end">
      <Navbar class="bar container-fluid" />
      <div class="word text-light text-center">
        <h1 data-aos="zoom-out" class="h2">無物為真，諸行皆可</h1>
        <small data-aos="zoom-out" class="h4">nothing is true everything is permitted</small>
      </div>
      <div class="icon text-center" @click.prevent="scroll()">
        <img
          src="../assets/images/assassin_s_creed_icon_grey_by_danishman_d35u30h.png"
          class="img-fluid"
          alt
        />
      </div>
    </div>
    <div class="home-story container-md mt-3 mx-auto px-0">
      <ul
        class="d-flex flex-sm-row flex-column justify-content-center align-items-center flex-md-nowrap mx-0 px-0"
      >
        <li class="text-center">
          <img src="../assets/images/AC_LEGACY_JOURNEY_1A.jpg" class="img-fluid" alt />
        </li>
        <li class="col-9">
          <h3>Assassin`s Creed</h3>
          <p>
            是由育碧軟體發行的歷史隱蔽類遊戲系列（潛伏遊戲），包括有許多續作和其他作品。
            主要的單人遊戲由育碧蒙特婁進行開發，並且由育碧安納西進行多人遊戲的開發。
            該系列產品受到了大部分評論家的好評。2016年9月，
            系列售出超過一億份，並成為育碧軟體最暢銷的遊戲。
            系列靈感來自弗拉基米爾·巴托爾的小說，被認為是《波斯王子系列》的精神續作。
            截至2018年已有十一款主要遊戲和額外續作及周邊作品。
          </p>
        </li>
      </ul>
    </div>
    <div class="home-Style px-0">
      <ul class="px-0 my-0">
        <li class="txt text-center py-5">
          <h2>Game&nbsp;Style</h2>
        </li>
        <li class="style-place d-flex flex-md-row flex-column flex-nowrap align-items-center mx-0">
          <div class="img-left" data-aos="zoom-in">
            <img src="../assets/images/search.png" alt />
          </div>
          <div class="col-7 mx-auto" data-aos="fade-left">
            <h3>探索世界</h3>
            <p>
              不受遊戲劇情束縛的情況下漫遊豐富的開放世界。
              上至白雪覆蓋的高聳山峰、下至深不見底的海洋，玩家可在探索當下時代探索充滿荒野環境和繁忙城市的整個國度。
              從古老儀式到著名雕像，玩家將與傳奇人物面對面，並發掘神話與傳說故事的真相。
            </p>
          </div>
        </li>
        <li
          class="style-place bg-style d-flex flex-md-row-reverse flex-column align-items-center mx-0"
        >
          <div class="img-right " data-aos="zoom-in">
            <img src="../assets/images/ass.png" alt />
          </div>
          <div class="col-7 mx-auto text-light" data-aos="fade-right">
            <h3>潛行暗殺</h3>
            <p>
              玩家在遊戲中自行安排戰術，可以偷偷摸摸地進行暗殺，也可以正大光明的正面進攻。
              或是遠成攻擊進行狙擊。
              玩家可以經由酷跑系統，進行翻牆、爬高等等的動作，來增加玩家的戰術抉擇。
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="home-history px-0">
      <ul class="px-0">
        <li class="text-center mb-5 py-5 bg-light">
          <h2>Travel&nbsp;World</h2>
        </li>
        <li class="mx-auto text-center mb-5">
          <img src="../assets/images/5d6e8ba05cdf9a3ab80a059d-1.png" class="img-fluid" alt />
        </li>
        <li class="center container-md mx-auto text-center mb-5">
          <div>
            <img src="../assets/images/china1.png" class="img-fluid" alt />
          </div>
          <div>
            <img src="../assets/images/odyssey.png" class="img-fluid" alt />
          </div>
          <div>
            <img src="../assets/images/origins.png" class="img-fluid" alt />
          </div>
          <div>
            <img src="../assets/images/syndicate.png" class="img-fluid" alt />
          </div>
          <div>
            <img src="../assets/images/unity.png" class="img-fluid" alt />
          </div>
        </li>
        <li class="container-md text-light mb-5">
          <h3 class="text-center mb-3">探索過去歷史</h3>
          <p>
            遊戲團隊，為了讓玩家在遊戲內體驗到主角生活的時代背景，而不惜花費時間、精力，實際的去做當地考察，盡可能地還原當時的地理、人文等等的背景。
            在玩家進入遊戲時，就像是回到了過去。
            <br />2019年4月15日18時50分時，位於法國巴黎的聖母院發生大火，造成毀損，此時ubisoft提供援助協助重建巴黎聖母院，主要原因是，在製作刺客教條大革命時候，
            當時考察過聖母院，並完美的在遊戲世界裡還原，這也體現了ubisoft曾經說過的一句話，他們是在做歷史，並且在後續也推出了兩款教育性質的遊戲。
          </p>
        </li>
      </ul>
    </div>
    <div class="home-hotgame">
      <h2 class="text-center mt-5">Hot&nbsp;Game</h2>
      <div class="HotShop container-md my-5">
        <div class="card text-dark">
          <img src="../assets/images/ass3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <a href>
              <h3 class="card-text text-center">刺客教條3</h3>
            </a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/images/ass2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <a href>
              <h3 class="card-text text-center">刺客教條2</h3>
            </a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/images/assr.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <a href>
              <h3 class="card-text text-center">刺客教條啟示錄</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="home-newgame  px-0">
      <ul class="bg-style d-flex flex-md-row flex-column align-items-center my-0 px-0" >
        <li class="col-md-6 col-12">
          <img
            src="../assets/images/Assassins-Creed-Valhalla-release-date-october.png"
            class="img-fluid"
            alt data-aos="fade-up"
          />
        </li>
        <li class="col-md-6 col-12 text-light d-flex flex-column align-items-center justify-content-center pt-2 " >
            <h2 class="text-primary font-weight-bold" data-aos="fade-down">即將上市</h2>
            <h3 class="font-weight-bold" data-aos="fade-down">刺客教條：維京紀元</h3>
            <p class="col-8 text-pr" data-aos="fade-down">化身一名被培育成無畏戰士的維京劫掠者「埃沃爾」，帶領你的氏族從挪威冰冷荒野前往九世紀英格蘭茂密農田交織的新家園。
            <br>
               建立你的聚落，不擇手段征服這片敵人的土地，在英靈殿爭取一席之地。
               <br>
            在維京時代，英格蘭是由低階貴族和相互敵對之王國組成的分裂國家。
            <br>
            混亂的局勢下隱藏著一片未開發的沃土，等待著新的征服者入主。你會成為它的主人嗎？</p>
        </li>
      </ul>
    </div>
    <div class="costomhelp">
      <ul
        class="d-flex flex-md-row flex-column align-items-center align-items-md-start justify-content-md-around my-0 px-0 py-3"
      >
        <li class="helplist">
          <h4 class="mb-md-4 row" @click="helpdrop" :dropkey="drop" data-help="help1">
            <p class="plus" v-if="mathplus">+</p>
            <p class="minus" v-if="mathminus">-</p>關於我們
          </h4>
          <div class="help1 text-center">
            <a href="#">
              <p>關於AsStore</p>
            </a>
            <a href="#">
              <p>徵才情報</p>
            </a>
          </div>
        </li>
        <li class="helplist">
          <h4 class="mb-md-4 row" @click="helpdrop" :dropkey="drop2" data-help="help2">
            <p class="plus" v-if="mathplus2">+</p>
            <p class="minus" v-if="mathminus2">-</p>發現更多
          </h4>
          <div class="help2 text-center">
            <a href="#">
              <p>其他內容</p>
            </a>
            <a href="#">
              <p>遊戲</p>
            </a>
            <a href="#">
              <p>特惠</p>
            </a>
          </div>
        </li>
        <li class="helplist">
          <h4 class="mb-md-4 row" @click="helpdrop" :dropkey="drop3" data-help="help3">
            <p class="plus" v-if="mathplus3">+</p>
            <p class="minus" v-if="mathminus3">-</p>讓我們協助您
          </h4>
          <div class="help3 text-center">
            <a href="#">
              <p>隱私政策</p>
            </a>
            <a href="#">
              <p>條款與銷售細則</p>
            </a>
            <a href="#">
              <p>法律聲明</p>
            </a>
            <a href="#">
              <p>退貨與換貨</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
    <HomeFot />
  </div>
</template>

<script>
import $ from "jquery";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import "slick-carousel/slick/slick.css";
import HomeFot from "../components/HomeFoot";
import Navbar from "../components/Navbar";
export default {
  components: {
    HomeFot,
    Navbar
  },
  data() {
    return {
      drop: false,
      drop2: false,
      drop3: false,
      mathplus: false,
      mathminus: false,
      mathplus2: false,
      mathminus2: false,
      mathplus3: false,
      mathminus3: false
    };
  },
  methods: {
    scroll() {
      let style = $(".home-Style").offset().top;
      $("html,body").animate({
        scrollTop: style
      });
    },
    helpdrop(event) {
      let vm = this;
      let w = innerWidth;
      let e = event.target.dataset.help;
      let helper1 = document.querySelector(".help1");
      let helper2 = document.querySelector(".help2");
      let helper3 = document.querySelector(".help3");
      if (w < 768) {
        if (e === "help1") {
          if (vm.drop == false) {
            $(helper1).slideDown();
            vm.mathplus = false;
            vm.mathminus = true;
            vm.drop = true;
          } else {
            $(helper1).slideUp();
            vm.mathplus = true;
            vm.mathminus = false;
            vm.drop = false;
          }
        }
        if (e === "help2") {
          if (vm.drop2 == false) {
            $(helper2).slideDown();
            vm.mathplus2 = false;
            vm.mathminus2 = true;
            vm.drop2 = true;
          } else {
            $(helper2).slideUp();
            vm.mathplus2 = true;
            vm.mathminus2 = false;
            vm.drop2 = false;
          }
        }
        if (e === "help3") {
          if (vm.drop3 == false) {
            $(helper3).slideDown();
            vm.mathplus3 = false;
            vm.mathminus3 = true;
            vm.drop3 = true;
          } else {
            $(helper3).slideUp();
            vm.mathplus3 = true;
            vm.mathminus3 = false;
            vm.drop3 = false;
          }
        }
      }
    }
  },
  computed: {},
  mounted() {
    let w = innerWidth;
    if (w < 768) {
      $(".center").hide();
      $(".help1").hide();
      $(".help2").hide();
      $(".help3").hide();
      this.mathplus = true;
      this.mathplus2 = true;
      this.mathplus3 = true;
    }
    $(".center").slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: "none",
      prevArrow: "none"
    });
    $(".HotShop").slick({
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      nextArrow: "none",
      prevArrow: "none"
    });
  }
};
</script>

<style lang="scss">
.bg-style {
  background-color: #111111;
}
.icon {
  position: relative;
  width: 15%;
  height: 10%;
  margin: 0 auto;
  cursor: pointer;
  img {
    position: absolute;
    width: 15%;
    top: 0;
    left: 40%;
    transform: rotate(180deg);
    animation: icon infinite 1.5s;
  }
}
@keyframes icon {
  from {
    top: 15%;
  }
  to {
    top: 40%;
  }
}
//
.home-bg {
  background: url("../assets/images/assassin_s_creed_wallpaper_by_retrieved_fiend_d3j7kwh.jpg")
    center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  .word {
    width: 100%;
    height: auto;
    margin: auto 0;
  }
}
.home-Style {
  width: 100%;
  .txt {
    background-color: #111111;
    color: white;
  }
  .style-place {
    overflow: hidden;
    width: 100%;
    .img-left {
      width: 23%;
      height: 30%;
      background-color: #111111;
      transform: skewX(30deg);
      overflow: hidden;
      img {
        width: 150%;
        transform: skewX(-30deg)  translateX(-15%);
      }
    }
    .img-right {
      width: 23%;
      height: 30%;
      background-color: #111111;
      transform: skewX(-30deg);
      overflow: hidden;
      img {
        width: 150%;
        transform: skewX(30deg) translateX(-15%);
      }
    }
  }
}
.home-story {
  height: 100%;
  li {
    img {
      width: 50%;
    }
  }
}
.home-history {
  overflow: hidden;
  background-color: #111111;
  height: auto;
  ul {
    height: 100%;
  }
}
.HotShop {
  .card {
    .card-body {
      background-color: #111111;
      h3 {
        white-space: nowrap;
      }
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
.home-newgame{
  img{
    width: 100%;
  }
}
.costomhelp{
  background-color: #88fae1;
  a{
    text-decoration: none;
    color: rgb(110, 104, 104);
  }
}
@media (max-width: 768px) {
  .icon {
    width: 25%;
    img {
      width: 25%;
    }
  }
}
</style>
