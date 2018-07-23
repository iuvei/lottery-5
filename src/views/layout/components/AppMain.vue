<template>
  <section class="app-main" style="min-height: 100%">
    <transition name="fade" mode="out-in">
      <!--<keep-alive :include="cachedViews">-->
      <!--<keep-alive include="" :exclude="['DeepInsight', 'SMBIntelligence', 'Comparison']">-->
      <!--<router-view></router-view>-->
      <!--</keep-alive>-->
      <!--<router-view></router-view>-->
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </section>
</template>

<script>

  export default {
    name: 'AppMain',
  }
</script>

<style lang="scss" scoped>
</style>
