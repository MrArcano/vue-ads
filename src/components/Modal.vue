<script>
export default {
  name: "Modal",
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <div class="bg-modal-shadow d-flex justify-content-center align-items-center ">
    <div class="modal-csm">
      <div class="content">

        <div class="top">
          <div class="logo">
            <img class="img-fluid" src="/logo.png" alt="">
          </div>
        </div>
        
        <div class="bottom">
          <div class="text-center">
            <h1 class="fw-bold">&dollar;7.90</h1>
            <p>per month</p>
          </div>

          <h6 class="fw-bold">Includes</h6>
          <ul>
            <li>
              <p>A spotify Premium subscription</p>
              <p>(Ad free, listen offline)</p>
            </li>
            <li>
              <p>No data charges for music listening on Spotify Premium</p>
            </li>
            <li>
              <p>12-month contract applies</p>
            </li>
          </ul>
          <div class="subs-container text-center">
            <a class="btn btn-danger" href="#">Subscribe</a>
            <p>Or &dollar;9.90 per month without contract</p>
          </div>

        </div>

      </div>

      <button class="btn-close">
        
      </button>
    </div>
  </div>


</template>

<style lang="scss" scoped>
  .bg-modal-shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    .modal-csm{
      padding: 8px;
      background-color: black;
      position: relative;
      .content{
        width: 400px;
        background-color: white;
        color: #35363b;
        .top{
          width: 100%;
          background-color: #47d26e;
          padding: 14px 0;
          .logo{
            width: 140px;
            margin: 0 auto;
          }
        }

        .bottom{
          padding: 32px;
          p{
            font-size: 14px;
          }
          .subs-container{
            font-weight: bold;
            a{
              padding: 8px 32px;
              border-radius: 32px;
              font-weight: bold;
            }
            p{
              color: #a2bfc2;
            }
          }
        }
      }

      .btn-close{
        width: 32px;
        height: 32px;
        background-color: white;
        opacity: 1;
        border-radius: 50%;
        position: absolute;
        bottom: 100%;
        left: 100%;
        transform: translate(-60%,60%);

      }

    }
  }
</style>