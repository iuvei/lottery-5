<template>
  <div class="wechat">
		<div class="wechat-top">
			<Navbar>
    		<span slot="headtitle">{{test}}</span>
  		</Navbar>
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
import Navbar from '@/components/Navbar.vue';
export default {
	name:"wechat3",
	components: {
      Navbar
	}
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.wechat{
	padding:px2rem(100px) 0 px2rem(138px) 0;
	img{
		max-width:100%;
	}
}
</style>
