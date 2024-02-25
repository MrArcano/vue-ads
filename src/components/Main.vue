<script>
import axios from 'axios';
import Modal from './Modal.vue';

export default {
  name: "Main",
  components:{
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
  <div class="bg-main">
    <div class="container-custom">
      <div class="top-menu d-flex justify-content-between align-items-center ">
        
        <div class="logo">
          <img class="img-fluid " src="/logo.png" alt="">
        </div>

        <ul class="menu list-unstyled d-flex align-items-center m-0">
          <li><a class="text-white d-inline-block" href="#">Cookie</a></li>
          <li><a class="text-white d-inline-block" href="#">Session</a></li>
        </ul>
        

      </div>

      <div class="main-wrapper">
        <h1>Passa a Premium gratis per 1 mese</h1>
        <h4>Al termine dell'offera, solo &euro; 9,99 al mese. Annulla in qualsiasi momento</h4>
        <a class="btn btn-custom" href="#">VEDI I PIANI</a>
        <p>Si applicano Termini e condizioni. L'offerta di 1 mese gratis non è disponibile per gli utenti che hanno già provato Spotify Premium.</p>
      </div>
    </div>
  </div>
  <Modal v-if="viewFlag" />
</template>

<style lang="scss" scoped>
  .bg-main{
    .container-custom{
      max-width: 1000px;
      margin: 0 auto;
      width: 80%;
    }
    background-color: #4383e2;
    color: white;
    font-weight: bold;
    .top-menu{
      padding-top: 32px;
      .logo{
        width: 175px ;
      }
      ul{
        li{
          &:first-child{
            border-right: 2px solid white;
          }
          a{
            padding: 2px 16px;
            font-size: 18px;
            text-decoration: none;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }

    

    .main-wrapper{
      padding: 80px 0;

      h1{
        font-size: 75px;
        font-weight: bold;
      }
      h4{
        padding: 40px 0;
      }
      p{
        padding-top: 42px;
        font-size: 14px;
      }
      .btn-custom{
        background-color: black;
        color: white;
        padding: 16px 32px;
        border-radius: 32px;
      }
    }


  }
</style>