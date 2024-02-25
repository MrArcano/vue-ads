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
      viewFlag: true,
    }
  },
}
</script>

<template>
  <div>
    <h1>Cookie</h1>
    <Main />
    <Modal v-if="viewFlag" />
  </div>
</template>

<style>

</style>