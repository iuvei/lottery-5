<template>
  <div class="app-wrapper">
    <Navbar></Navbar>
    <AppMain class="app-main"></AppMain>
    <Footerbar></Footerbar>
  </div>
</template>

<script>
  import {Headbar, Navbar, AppMain, Footerbar} from "./components";
  // import Navbar from '@/components/Navbar'

  export default {
    name: 'layout',
    components: {
      Headbar,
      AppMain,
      Footerbar,
      Navbar
    }

  }
</script>

<style lang="scss" scoped>
  @import "../../styles/index";

  .app-main {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    min-height: calc(100vh - 2.6667rem);
    background: #efeef4;
  }
</style>
