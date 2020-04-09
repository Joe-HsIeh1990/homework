<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App",
  computed:{
    isLoading(){
      vm.$store.state.isLoading;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/all";
*{
  font-family: "Noto Serif TC";
  list-style: none;
}
</style>
