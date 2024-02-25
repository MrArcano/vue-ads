<script>
export default {
  name: "Header",
}
</script>

<template>
  <div class="top-menu d-flex justify-content-between align-items-center ">
    <div class="logo">
      <img class="img-fluid " src="/logo.png" alt="">
    </div>

    <ul class="menu list-unstyled d-flex align-items-center m-0">
      <li>
        <router-link to="/" :class="{ 'active-link': $route.path === '/' }" >Cookie</router-link>
      </li>
      <li>
        <router-link to="/session" :class="{ 'active-link': $route.path === '/session' }">Session</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .top-menu{
      padding-top: 32px;
      font-weight: bold;
      .logo{
        width: 175px ;
      }
      ul{
        li{
          &:first-child{
            border-right: 2px solid white;
          }
          a{
            color: white;
            padding: 2px 16px;
            font-size: 18px;
            text-decoration: none;
            &:hover{
              text-decoration: underline;
            }
            &.active-link{
              color: #ddff00;
            }
          }
        }
      }
    }
</style>