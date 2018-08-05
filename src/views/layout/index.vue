<template>
  <div class="app-wrapper">
    <Navbar class="navbar">
      <span slot="headtitle">{{headerTitle}}</span>
    </Navbar>
    <AppMain class="app-main"></AppMain>
    <Footerbar></Footerbar>
  </div>
</template>

<script>
  import { Navbar, AppMain, Footerbar} from "./components";
  import {mapGetters} from "vuex";
  // import Navbar from '@/components/Navbar'

  export default {
    name: 'layout',
    components: {
      AppMain,
      Footerbar,
      Navbar
    },
    computed: {
    	...mapGetters([
		    'headerTitle'
      ])
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
    overflow: hidden;
  }
</style>
