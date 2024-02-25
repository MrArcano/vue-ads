<script>
import Header from './components/Header.vue';
import Main from './components/partials/Main.vue';

export default {
  name: "App",
  components:{
    Main,
    Header,
  }
}
</script>
  
<template>
  <div class="div-wrapper">
    <div class="bg-main">
      <div class="container-custom">
        <header>
          <Header />
        </header>
        <main>
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>


.div-wrapper{
  height: 100vh;
  overflow: auto;
  .bg-main{
    background-color: #4383e2;
    color: white;
  }

  .container-custom{
      max-width: 1000px;
      margin: 0 auto;
      width: 80%;
    }
}
</style>
