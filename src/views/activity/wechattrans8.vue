<template>
<div class="wechat">
	<div class="wechat-top">
			<HeaderReg>
      <router-link slot="headleft" to="/activity">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">微信转账银行卡</span>
      <span slot="headright"></span>
    </HeaderReg>
		</div>
		<div class="wechat-top">
			<img src="./images/wechattrans1.png" alt="">
		</div>	
		<div class="wrapExplain">
			<img src="./images/wechattrans2.png" alt="">
		</div>
</div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue';
export default {
	name:"wechattrans8",
	components: {
      HeaderReg
	}
}

</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/activity/wechat.scss";

</style>
