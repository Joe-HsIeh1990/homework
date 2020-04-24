<template>
  <div>
    <div class="container-md" id="timestory">
      <div class="row justify-content-center align-items-center my-4">
        <div class="col-md-9">
          <a href>
            <img src="../assets/images/logo-new.png" class="img-fluid" alt />
          </a>
        </div>
      </div>
      <div class="my-3 d-flex justify-content-center container-md px-0" id="btn-flxed">
        <select
          name="mod"
          class="d-flex d-md-none col-12"
          v-model="change"
          id="mod"
          @click.prevent="optionChange()"
        >
          <option value="a">神話時代</option>
          <option value="b">混沌時代</option>
          <option value="c">西格瑪時代</option>
        </select>
        <ul class="d-none d-md-flex flex-column flex-md-row text-center px-0 col-md-12" id="cop">
          <li class="col-md-4 py-3 h4 rounded-left btn-css" @click.prevent="optionChange('a')">神話時代</li>
          <li class="col-md-4 py-3 h4 btn-css" @click.prevent="optionChange('b')">混沌時代</li>
          <li
            class="col-md-4 py-3 h4 rounded-right btn-css"
            @click.prevent="optionChange('c')"
          >西格瑪時代</li>
        </ul>
      </div>
      <div class="container-md pt-2 pb-3" id="godtime" v-if="change === 'a'">
        <div class="text-center my-5" id="god">
          <h2 class="text-warning">神話時代</h2>
        </div>
        <div class="container-md">
          <div
            class="d-flex justify-content-md-between flex-md-row flex-column-reverse align-items-center justify-content-center"
          >
            <div class="d-flex d-md-row flex-column col-md-6 col-12">
              <div class="my-4" data-aos="fade-right">
                <h4>故事的開始</h4>
                <p>它始於無盡的黑色虛空中的一條連線。緊貼破碎世界的熔岩核心，西格瑪在黑暗的以太中呼嘯而過。天龍- 德雷克-留意到這個疾速掠過的光圈，發現了西格瑪殘損的軀體，並感受到了與他志趣相投的精神，溫暖的吐息喚醒了這位神袛，天龍與西格瑪結交了朋友，並向他展示了通向八域的秘密之路。</p>
              </div>
              <div class="time-line" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-right">
                <h4>偉大的萬神殿</h4>
                <p>在旅途中，西格瑪遇到並喚醒了許多其他的神靈，與他們建立了聯盟。神話時代充滿了這樣的故事。在阿奎夏，矮人神靈格里姆尼爾遇到了注定的敵人火蜥蜴之母。</p>
              </div>
            </div>
            <div class="d-flex align-items-md-center col-md-6 col-12">
              <div class="col-md-12" data-aos="zoom-in">
                <img src="../assets/images/Comet.png" class="img-fluid" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="container-md">
          <div
            class="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center"
          >
            <div class="d-flex align-items-center col-md-6 col-12">
              <div class="col-md-12" data-aos="zoom-in">
                <img src="../assets/images/1.1-timeline-resized.png" class="img-fluid" alt />
              </div>
            </div>
            <div class="d-flex row flex-column col-md-6 col-12">
              <div class="d-none d-md-flex time-line" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-left">
                <h4>短暫的烏托邦</h4>
                <p>眾神感激被喚醒，誓言要援助西格瑪和新生的文明。 黃金時代就此來臨，眾神合作。 埃爾德里奇暴風雨帶來了一絲污穢的混沌，但這些早期的攻擊是被許多強大的人民和他們的神聯盟擊退。 只有當聯盟動搖了新時代才開始。</p>
              </div>
              <div class="time-line" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-left">
                <h4>格林姆尼的最後一戰</h4>
                <p>當格林姆尼和火蜥蜴之母作戰時，阿奎夏地震了起來。他們腳下的地面被浸在熔化的血液中時燃燒著，突然一聲轟響，格林姆尼和他的敵人摔倒了。那一刻，烈火屠夫誕生了。</p>
              </div>
              <div class="time-line" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-left">
                <h4>燃燒的天空</h4>
                <p>西格瑪在燃燒的天空中面臨著艾查恩的軍隊。當他揮舞著戰鎚蓋爾.瑪拉茲時，當他在戰鬥中大步前進時，幾乎沒有人能夠阻擋，在戰鬥中依次擊倒每一個渾沌大魔。當西格瑪到達永恆之森時，艾查恩運用詭計奪走了他的錘子，扭轉了爭奪混沌的戰爭潮流，迫使西格瑪和他的軍隊撤退。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-md pt-2 pb-3" id="chosetime" v-if="change === 'b'">
        <div class="text-center my-5" id="chose">
          <h2 class="text-danger">混沌時代</h2>
        </div>
        <div class="container-md">
          <div
            class="d-flex justify-content-md-between flex-md-row flex-column-reverse align-items-center justify-content-center"
          >
            <div class="d-flex d-md-row flex-column col-md-6 col-12">
              <div class="my-4" data-aos="fade-right">
                <h4>血腥時代</h4>
                <p>混沌時代開始於血與背叛。第一波入侵是毀滅性的以至於所以人們稱為為紅色世紀。軍隊們集結起來阻止他們，但是舊聯盟破碎了，每個派別都擔心進一步的背叛，沒有一個權力可以在黑暗神的勢力面前勝利。過。天龍- 德雷克-留意到這個疾速掠過的光圈，發現了西格瑪殘損的軀體，並感受到了與他志趣相投的精神，溫暖的吐息喚醒了這位神袛，天龍與西格瑪結交了朋友，並向他展示了通向八域的秘密之路。</p>
              </div>
              <div class="time-line-red" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-right">
                <h4>艾茲爾界門關閉</h4>
                <p>末世君王艾查恩的軍隊橫越以疾速掃蕩諸域，西格瑪被迫封鎖艾茲爾的界門，因為他們擔心他們會到天域。就在艾查恩的旗幟掠過地平線時，帝王下了命令關閉界門。即使已經征服了各域，艾查恩依舊對剩餘的領土誓不罷休，將魔爪伸向那些被神王遺漏的人們</p>
              </div>
            </div>
            <div class="d-flex align-items-md-center justify-content-center col-md-6 col-12">
              <div class="col-md-12 text-center" data-aos="zoom-in">
                <img src="../assets/images/1-timeline-resized.png" class="img-fluid" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="container-md">
          <div
            class="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center"
          >
            <div class="d-flex align-items-center col-md-6 col-12">
              <div class="col-md-12 text-center" data-aos="zoom-in">
                <img src="../assets/images/2-timeline-resized.png" class="img-fluid" alt />
              </div>
            </div>
            <div class="d-flex row flex-column col-md-6 col-12">
              <div class="d-none d-md-flex time-line-red" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-left">
                <h4>王都的詛咒</h4>
                <p>自從爭鬥的種子被散播在王都，無數的戰爭發芽，成長，結出血腥的果實。儘管恐虐八次派出八個軍團渡過喬科爾之門，姦奇也利用魔法將他的爪牙滲透入了王國的權貴當中，但翡翠王國仍然效忠納垢，以此用來征服生命之域。</p>
              </div>
              <div class="time-line-red" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-left">
                <h4>大整頓</h4>
                <p>在艾茲爾的界門關閉後，發生了無數戰爭只為了消除天堂的邪惡。混沌的獸人和生物首先被阿茲海姆的軍隊和新組建的風暴之主追殺。到目前為止，神話中的野獸仍然留在艾茲爾，但沒有任何腐敗痕跡。</p>
              </div>
            </div>
          </div>
          <div
            class="d-flex justify-content-md-between flex-md-row flex-column-reverse align-items-center justify-content-center"
          >
            <div class="d-flex d-md-row flex-column col-md-6 col-12">
              <div class="time-line-red mt-4" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-right">
                <h4>藏身之處</h4>
                <p>長時間的死亡和災難讓艾麗瑞拉精疲力竭。她竭盡全力治愈這片土地的努力失敗了。無數背叛甚至削弱了她對自己心愛的孩子的信心，並且在瘋狂的狀態下，她放棄了她剩下的杜爾特之子。她不再堅信擊敗納垢的可能性，樹妖女王撤退到埃瑟沃德隱藏的山谷並離開最後的樹海靈木獨自戰鬥。</p>
              </div>
              <div class="time-line-red" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-right">
                <h4>鬥劍場</h4>
                <p>並不是所有雷鑄神兵的訓練都是在狩獵怪物。這個來自暗影之域馬勒里昂的禮物，格拉多利亞的鬥劍場就使雷鑄神兵能夠相互對抗，但在戰鬥結束後卻不會受到傷害。在一些最偉大的演習中，整個暴風城在雷鳴般的戰爭演習中互相對抗。</p>
              </div>
            </div>
            <div class="d-flex align-items-md-center col-md-6 col-12">
              <div class="col-md-12 text-center" data-aos="zoom-in">
                <img src="../assets/images/7-timeline-resized.png" class="img-fluid" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-md pt-2 pb-3" id="sigmartime" v-if="change === 'c'">
        <div class="text-center my-5" id="sigmar">
          <h2>西格瑪時代</h2>
        </div>
        <div class="container-md">
          <div
            class="d-flex justify-content-md-between flex-md-row flex-column-reverse align-items-center justify-content-center"
          >
            <div class="d-flex d-md-row flex-column col-md-6 col-12">
              <div class="my-4" data-aos="fade-right">
                <h4>第一擊</h4>
                <p>西格瑪的第一拳揮向了硫磺半島，在那裡掌錘者梵督斯率領雷霆之擊兄弟會猛攻艾茲爾的第一座界門，現在戰火蔓延到數個界域，但神王的暴風驟雨仍然沒有停歇。</p>
              </div>
              <div class="time-line-blue" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-right">
                <h4>界門之戰</h4>
                <p>西格瑪的暴風雨橫掃夏蒙的天空，在它之前驅趕著強烈的以太金礦脈。在暴風雨徹底打亂了他們的計劃之前，鐵矮人爭先恐後地開採這筆賞金。</p>
              </div>
              <div class="time-line-blue" data-aos="fade-down">
                <span></span>
              </div>
              <div class="my-4" data-aos="fade-right">
                <h4>黎明之門</h4>
                <p>聖徒騎士是第一個進入加蘭的雷鑄神兵，在黎明之門崩潰之前摧毀了魔法師克拉德布洛的主人和由腐爛的怪物博拉斯克拉斯領導的七個巨獸。鋼鐵靈魂的加爾杜斯強行進入納垢的後花園，寶瑟拉科斯緊跟著他的腳後跟這個大門在大不潔者的重壓下崩潰，阻止了更多的混沌增援的機會。最終，正是加爾杜斯奇蹟般的再現，為聖徒騎士們帶來了轉機。</p>
              </div>
            </div>
            <div class="d-flex align-items-md-center col-md-6 col-12">
              <div class="col-md-12" data-aos="zoom-in">
                <img src="../assets/images/maxresdefault.jpg" class="img-fluid" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="container-md">
          <div
            class="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center"
          >
            <div class="d-flex align-items-center col-md-6 col-12">
              <div class="col-md-12">
                <img src="../assets/images/05TrulyExcel1.png" class="img-fluid" alt />
              </div>
            </div>
            <div class="d-flex row flex-column col-md-6 col-12">
              <div class="d-none d-md-flex time-line-blue">
                <span></span>
              </div>
              <div class="my-4">
                <h4>污濁之潮</h4>
                <p>布萊姆達爾綠色峽谷的據點被納垢的瘟疫軍團入侵，他們尋找艾麗瑞拉隱藏的避難所。由一個三巨獸的劈路下，不潔者的大軍威脅要污染整個水下堡壘。由海精靈之王浮特諾斯領導的大軍提供了及時的援軍，他們自己追捕並殺死了三巨獸。由於潮汐技術的魔力，污物很快就被沖走了。戰鬥結束後，浮特諾斯尋找樹妖女王，希望彌補她與海精靈之間的裂痕。然而艾麗瑞拉擔心混亂大軍的陷阱，仍然處於隱居狀態。</p>
              </div>
              <div class="time-line-blue">
                <span></span>
              </div>
              <div class="my-4">
                <h4>綠巨獸的聚集</h4>
                <p>橫跨浩瀚的獸界，據說，鐵下巴綠巨人-戈德拉克，老大中的老大，正像食人魔堆砌殘骨般地一樣堆起勝利，戈德拉克一路凱旋！粉碎混沌領主的瘟疫大軍。他聽到了傳說中的偉大的法納特拉克的謠言，野獸之域的界門將領他向所有八大節點，鐵下巴綠巨人戈德拉克即刻啟程。</p>
              </div>
              <div class="time-line-blue">
                <span></span>
              </div>
              <div class="my-4">
                <h4>只留塵埃</h4>
                <p>西格瑪的使節橫跨螺旋關節尋找矮人， 希望能夠重建古老的聯盟他們可能會贏得一個重要的在內部最大的灘頭島嶼。 雖然他們與他們一路戰鬥中經過許多古老的矮人山峰，但是屍體和長期被遺棄帝國的迴聲。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-md">
          <div
            class="d-flex justify-content-md-between flex-md-row flex-column-reverse align-items-center justify-content-center"
          >
            <div class="d-flex d-md-row flex-column col-md-6 col-12">
              <div class="my-4">
                <h4>堅守艾茲爾之門</h4>
                <p>界門之戰已經開始。通過堅守住眾多進入艾茲爾的大門，雷鑄神兵的先鋒已經打開了西格瑪復仇的閘門，為西格瑪的更大的戰役鋪平了道路。在這樣做的同時，他們嚴厲打擊了混沌的統治，粉碎了扼殺了凡人自由和希望的束縛。</p>
              </div>
              <div class="time-line-blue">
                <span></span>
              </div>

              <div class="my-4">
                <h4>希望</h4>
                <p>隨著西格瑪風暴的來臨，樹海靈木找到了新的盟友。從荊棘棲地到木瘤尖塔，樹海靈木與雷鑄神兵攜手作戰。與此同時，在紀倫，藤蔓女士幫助雷鑄天軍從她的心材當中，找到了伴隨著希望的埃瑟沃德，然而他們對即將到來的事情知之甚少。</p>
              </div>
              <div class="time-line-blue">
                <span></span>
              </div>
              <div class="my-4">
                <h4>重奪聖錘</h4>
                <p>在金屬之域，沉睡著一個巨大的秘密-聖錘：蓋爾馬拉茲。在愛爾德里奇要塞神王集結了大量的軍團突襲了姦奇的奴僕以重奪他的戰鎚。最終掌錘者梵督斯，西格瑪之鎚天界領主將傳奇的碎顱者帶回了艾茲爾。</p>
              </div>
            </div>
            <div class="d-flex align-items-md-center col-md-6 col-12">
              <div class="col-md-12">
                <img src="../assets/images/3.1-timeline-resized-1.png" class="img-fluid" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="container-md">
          <div
            class="d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-center"
          >
            <div class="d-flex align-items-center col-md-6 col-12 mb-4">
              <div class="col-md-12">
                <img
                  src="../assets/images/realm_of_life_by_akimblya-da9rcvk-e1528910942222.jpg"
                  class="img-fluid"
                  alt
                />
              </div>
            </div>
            <div class="d-flex row flex-column col-md-6 col-12">
              <div class="d-none d-md-flex time-line-blue">
                <span></span>
              </div>
              <div class="my-4">
                <h4>埃瑟沃德的腐敗</h4>
                <p>在王都，整個王國的靈魂爭奪戰激烈。從他神聖疾病的大鍋中，祖爾努爾格曾經沒有數字地掠奪了不善的禮物，玷污了除了最神聖的格瑞蘭的空間之外的所有東西，直到幾乎每一英畝的土地都生活在一片荒蕪中。在尋找永恆女王艾麗瑞拉時，聖殿騎士無意中將納垢的冠軍帶到了艾瑟沃德。生命之域最後的天堂在混沌籠罩的中落下了，閃耀林女王望隨之落幕。</p>
              </div>
              <div class="time-line-blue">
                <span></span>
              </div>
              <div class="my-4">
                <h4>求援失敗</h4>
                <p>雷鑄神兵使者們去到了海精靈的首府普淋姆，請求了的海精靈的援助。海精靈舉行了一場大會，儘管國王慷慨激昂，但許多海精靈棄權或投票反對任何此類聯盟。所以西格瑪雷鑄神兵在沒有提供的幫助的情況下開始了界門之戰。</p>
              </div>
              <div class="time-line-blue">
                <span></span>
              </div>
              <div class="my-4">
                <h4>艾茲爾的複仇天使</h4>
                <p>聖天尊收復戰鎚蓋爾.瑪拉茲之後，親臨戰場加入了西格瑪大軍與混沌戰爭的最前線。隨著一陣電閃雷鳴，聖天尊抵達了界門的戰場，對黑暗神的僕人們帶去了恐懼。西格瑪化身閃電般在那裡戰鬥，勝利不遠了。</p>
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
export default {
  data() {
    return {
      change: "a",
      navchange: true,
      takeWidth: 0
    };
  },
  methods: {
    optionChange(item) {
      let select = document.getElementById("mod").value;
      let vm = this;
      if (item === "a") {
        vm.change = "a";
        $("html,body").animate({ scrollTop: 440 }, 1500);
      } else if (item === "b") {
        vm.change = "b";
        $("html,body").animate({ scrollTop: 440 }, 1500);
      } else if (item === "c") {
        vm.change = "c";
        $("html,body").animate({ scrollTop: 440 }, 1500);
      }
      if (select == vm.change) {
        $("html,body").animate({ scrollTop: 300 }, 1500);
      }
    }
  },
  mounted() {
    this.optionChange();
  }
};
</script>

<style>
</style>