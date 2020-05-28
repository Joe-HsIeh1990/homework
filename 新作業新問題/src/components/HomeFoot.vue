<template>
  <footer class="footerClass bg-dark row justify-content-center py-4 mx-0">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="text-center mb-3">
        <p class="text-white my-0">&copy;僅個人練習使用，不做任何商業用途</p>
      </div>
      <div class="text-center mx-2">
        <a href="#" @click.prevent="havntdone()">
          <img src="../assets/images/inst.png" alt />
        </a>
        <a href="#" @click.prevent="havntdone()">
          <img src="../assets/images/github.png" class="mx-2" alt />
        </a>
        <a href="#" @click.prevent="havntdone()">
          <img src="../assets/images/fb.png" alt />
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    havntdone() {
      this.$bus.$emit("message:push", "示意圖", "danger");
    }
  }
};
</script>
<style>
.footerClass {
  width: 100%;
}
.footerClass img {
  max-width: 3%;
}
.footerClass p {
  white-space: nowrap;
}
@media (max-width: 768px) {
  .footerClass img {
    max-width: 5%;
  }
}
</style>