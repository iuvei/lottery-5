<!--
  name: agentIntro
  desc: 个人中心 -> 代理中心 -> 代理说明
-->
<template>
  <div class="agentIntro">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">代理说明</span>
    </Navbar>

    <div class="content">
      <div class="agentHeader">
        <img src="./../../../static/images/agentIntro.jpg" width="100%">
      </div>


    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'agentIntro',
    components: {
      Navbar
    },
    methods: {
      toPage (src) {
        this.$router.push(src);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
    background: #efeef4;

  }

</style>
