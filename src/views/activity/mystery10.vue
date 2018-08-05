<template>
<div class="mystery">
    <HeaderReg>
      <router-link slot="headleft" to="/activity">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">神秘彩金，不期而遇</span>
      <span slot="headright"></span>
    </HeaderReg>
    <div class="banner">
		<img src="./images/mystery.png" alt="">
	</div>
	<div class="text">
		<p class="title1">活动详情</p>
		<p><br></p>
		<p>1：90彩票平台将不定期派送神秘彩金给予在90彩票平台会员们,彩金没有门槛限制,不设金额,只要您在90彩票平台注册过账号,只要您曾登录过90彩票平台,就算您不曾在90彩票平台存款娱乐过,都有可能收到我们为您派送的神秘彩金！ </p>
		<p>2：凡是获得神秘彩金的会员,我们将存入会员账号后或所绑定的银行卡后,通过平台的“站内信”通知,彩金发放纯属随机,还望会员多多关注支持90彩票平台,祝您成为下一个幸运儿！</p>
		<p><br></p>
		<p><br></p>
		<p class="title1">活动细则</p>
		<p><br></p>
		<p>1：90彩票平台所有彩金均以人民币（CNY）为结算金额；</p>
		<p>2：90彩票平台所有优惠为玩家而设，如果发现任何会员，以不诚实的方式套取红利，我平台有权取消会员账户结余的权利；</p>
		<p>3：90彩票平台保留活动最终解释权，以及在无通知的情况下修改，终止活动的权利，适用于所有优惠。</p>
		<p><br></p>
	</div>
</div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue';
export default {
	name:"mystery10",
	components: {
      HeaderReg
	}
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "./styles/mystery.scss";

</style>
