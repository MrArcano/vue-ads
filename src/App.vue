<script>
import Main from './components/Main.vue';

export default {
  name: "App",
  components:{
    Main,
  }
}
</script>
  
<template>
  <div class="div-wrapper">
    <Main />
  </div>
  
</template>

<style>
.div-wrapper{
  height: 100vh;
  overflow: auto;
}
</style>
