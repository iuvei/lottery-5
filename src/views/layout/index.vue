<template>
  <div class="app-wrapper">
    <!--<Navbar></Navbar>-->
    <AppMain></AppMain>
    <Footerbar></Footerbar>
  </div>
</template>

<script>
  import { Headbar, AppMain, Footerbar } from "./components";
  import Navbar from '@/components/Navbar'

  module.export = {
    Navbar
  }

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

</style>
