<template>
<div class="mystery">
    <HeaderReg>
      <router-link slot="headleft" to="/activity">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">推荐好友</span>
      <span slot="headright"></span>
    </HeaderReg>
    <div class="banner">
		<img src="./images/recommend.png" alt="">
	</div>
	<div class="text">
		<p class="title1">活动详情</p>
		<p><br></p>
		<p>1：90彩票平台老会员每推荐一位好友注册充值，您将获得￥28元彩金。以此类推，推荐会员赠送彩金无上限；</p>
		<p>2：推荐好友注册后，好友需要充值￥300元以上（充值不累计）方可领取彩金；</p>
		<p>3：申请彩金之前必须先绑定银行账号否则系统将判断不符合申请条件拒绝赠予彩金；</p>
		<p>4：老会员重新注册充值90彩票平台将不予发放彩金；</p>
		<p>5：90彩票平台代理会员不享有推荐彩金。</p>
		<p>6：会员邀请好友后请在24小时内联系在线客服进行申请，逾期视为放弃此项优惠。</p>
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
	name:"recommend6",
	components: {
      HeaderReg
	}
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/activity/mystery.scss";

</style>
