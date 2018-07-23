<template>
  <div class="login">
    <HeaderLogin>
      <router-link slot="headleft" to="lotteryHall"><van-icon name="arrow-left" /></router-link>
      <span slot="headtitle">用户登陆</span>
    </HeaderLogin>
  </div>
</template>

<script>
  import HeaderLogin from '@/components/Navbar.vue'

  export default {
    name: 'Login',
    components: {
      HeaderLogin
    }
  }
</script>

<style lang="scss" scoped>

</style>
