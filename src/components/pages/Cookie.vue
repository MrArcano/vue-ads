<script>
import Main from '../partials/Main.vue';
import Modal from '../partials/Modal.vue';

export default {
  name: "Cookie",
  components:{
    Main,
    Modal
  },
  data() {
    return {
      viewFlagCookei: true,
    }
  },
  methods: {
    setCookie(){
      const min = 1;
      const d = new Date();
      d.setTime(d.getTime() + (min*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = "cookie-ads=" + false + ";" + expires + ";path=/";
      this.existCookie();
    },

    existCookie(){
      const allCookie = document.cookie;
      const arrayCookie = allCookie.split(';');
      arrayCookie.forEach(itemCookie => {
        const itemArray = itemCookie.split('=');
        console.log(itemArray[0]);
        if(itemArray[0].trim() == 'cookie-ads'){
          this.viewFlagCookei = itemArray[1] === 'true';
          console.log(itemArray[1]);
          console.log(this.viewFlagCookei);
        }
      });
    }
  },
  mounted() {
    this.existCookie();
  },
}
</script>

<template>
  <div>
    <Main />
    <Modal v-if="viewFlagCookei" @closeModal="setCookie" />
  </div>
</template>

<style>

</style>