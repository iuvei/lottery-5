<template>
<div class="redpacket">
	<HeaderReg>
      <router-link slot="headleft" to="/activity">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">90彩票抢红包</span>
      <span slot="headright"></span>
    </HeaderReg>
  <div class="banner">
	  <img src="./images/redpacket.png" alt="">
	  <a href="http://www.90hongbao.com/wap/"><span>点击进入抢红包活动</span></a>
  </div>
</div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue';
export default {
	name:"redpacket7",
	components: {
      HeaderReg
	}
}

</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/activity/redpacket.scss";
</style>
