<template>
  <div class="container-fluid">
    <div class="row">
      <main class="col-12 px-0">
        <Navbar class="bg-dark" />
        <router-view></router-view>
        <HomeFot />
      </main>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import HomeFot from "../components/HomeFoot";
export default {
  components: {
    HomeFot,
    Navbar
  }
};
</script>

