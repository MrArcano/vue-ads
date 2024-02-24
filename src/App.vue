<script>
import axios from 'axios';

export default {
  data() {
    return {
    }
  },
  methods: {
    setSession(){
      axios.get('http://127.0.0.1:8000/api/set-session', { withCredentials: true })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
  },
  mounted() {
  },
}
</script>
  
<template>
  <div>
    PRRRRRRRRRR
  </div>
  <div class="border">
      questo è il div che nn devo vedere
      <button @click="setSession()">cliccami</button>
  </div>
</template>

<style>
  .border{
    border: 1px solid white;
    min-height: 200px;
    padding: 20px;
  }
</style>
