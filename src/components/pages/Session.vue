<script>
import Main from '../partials/Main.vue';
import Modal from '../partials/Modal.vue';
import axios from 'axios';

export default {
  name: "Session",
  components:{
    Main,
    Modal
  },
  data() {
    return {
      viewFlag: false,
    }
  },
  methods: {
    setSession(){
      // Effettua la chiamata API utilizzando Axios
      axios.get('http://127.0.0.1:8000/api/set-session')
          .then(response => {
              // Gestisci la risposta qui
              console.log(response.data);
              this.viewFlag=response.data.createSession;
          })
          .catch(error => {
              // Gestisci gli errori qui
              console.error(error);
          });
        }
  },
  mounted() {
    this.setSession();
  },
}
</script>

<template>
  <div>
    <Main />
    <Modal v-if="viewFlag" @closeModal="setSession" />
  </div>
</template>

<style>

</style>