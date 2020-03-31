<template>
  <div>
    <div class="container-fluid">
      <div class="row">
          <AdminStore class="col-md-2"/>
        <main class="col-md-10">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import AdminStore from './AdminStore'
export default {
    components:{
        AdminStore,
    },
    data(){
      return{

      }
    },
};
</script>

<style>
</style>