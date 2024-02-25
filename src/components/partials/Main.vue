<script>
export default {
  name: "Main",
}
</script>

<template>
    <div class="main-wrapper">
      <h1>Passa a Premium gratis per 1 mese</h1>
      <h4>Al termine dell'offera, solo &euro; 9,99 al mese. Annulla in qualsiasi momento</h4>
      <a class="btn btn-custom" href="#">VEDI I PIANI</a>
      <p>Si applicano Termini e condizioni. L'offerta di 1 mese gratis non è disponibile per gli utenti che hanno già provato Spotify Premium.</p>
    </div>
</template>

<style lang="scss" scoped>
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
</style>