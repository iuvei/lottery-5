<template>
  <div class="wechat">
		<div class="wechat-top">
			<HeaderReg>
      <router-link slot="headleft" to="/activity">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">微信解除限额</span>
      <span slot="headright"></span>
    </HeaderReg>

		</div>
		<div class="wechat-top">
			<img src="./images/wechat1.png" alt="">
		</div>	
		<div class="wrapExplain">
			<img src="./images/wechat2.png" alt="">
		</div>
	</div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue';
export default {
	name:"wechat3",
	components: {
      HeaderReg
	}
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "./styles/wechat.scss";
</style>
