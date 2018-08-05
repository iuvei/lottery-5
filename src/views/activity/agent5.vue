<template>
<div class="agent">
	<HeaderReg>
      <router-link slot="headleft" to="/activity">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">广招代理，月赚百万</span>
      <span slot="headright"></span>
    </HeaderReg>

	<div class="banner">
		<img src="./images/agent0.png" alt="">
	</div>
	<div class="text">
		<p>成为专职代理日盈万金</p>
		<p>自行开下级代理和用户图文教程</p>
		<p>步骤一：</p>
		<p>进入您的账号点击“我的”--->“代理中心”</p>
		<img src="./images/agent1.png" alt="">
		<p><br></p>
		<p>步骤二：</p>
		<p>点击“下级开户”</p>
		<img src="./images/agent2.png" alt="">
		<p><br></p>
		<p>步骤三：</p>
		<p>图标④位置选择开户类型为“代理类型”如您选择代理类型为“玩家类型”则该用户无法自行发展下级，只可以进行游戏，这里我们为了能达到层层代理的无限效果，让每个用户都有发展下线的潜力我们选择开户类型为“代理类型”</p>
		<p>图标⑤位置为各种游戏类型可设置的返点范围，自身返点表示您现在的返点基数。</p>
		<img src="./images/agent3.png" alt="">
		<p><br></p>
		<p>步骤四：</p>
		<p>例图以快3游戏类型为例子，您的自身可设置最高返点为0.075（7.5%）如下图设置给您下级代理的返点是0.073（7.3%）则您有0.002的返点利润【以1000元下注额度为例子有7.5元的系统返点，您的下级得7.3元系统返点权限，您自己得0.2元利润现金，<span>如您设置下级为0返点权限，则您得到全部7.5元返点现金，所有返点金额系统自动存入您的账户，请自行查看交易记录</span>】此处为了让您下级有更多的发展下线潜力，带来更多用户群体，一般我们会把返点基数尽量调高的给下级代理。</p>
		<img src="./images/agent4.png" alt="">
		<p><br></p>
		<p>步骤五：</p>
		<p>生成的邀请码会在下图红框处显示，把这个邀请码给要注册朋友。</p>
		<img src="./images/agent5.png" alt="">
		<p><br></p>
		<p>步骤六：</p>
		<p>为了广大代理和会员的利益，所有用户都必须有邀请码才能进行注册，官网不发放任何邀请码请悉知</p>
		<img src="./images/agent6.png" alt="">
		<p><br></p>
		<p>步骤七：</p>
		<p>当您有朋友进行注册时，您可以通过代理中心的“会员管理”查看您名下的会员数量。</p>
		<img src="./images/agent7.png" alt="">
		<p><br></p>
		<p>步骤八：</p>
		<img src="./images/agent8.png" alt="">
		<p><br></p>
		<p>简要：代理类型为层层代理是一种分裂与裂变金子塔式的营销方法，朋友\同学\同事\亲戚等关系要好的用户一个月发展上千个下线非常容易。单单通过代理返点抽成很容易达到月赚百万的目标。欢迎用户充分使用平台功能达成您的梦想。</p>
		<p class="last">更多代理相关问题，请您登录后查看【代理中心】-【代理说明】，代理返点不允许超过1%，否则平台将禁止返点，如有其他任何问题，可联系代理活动咨询QQ：3330658。</p>
		<p><br></p>
	</div>
</div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue';
export default {
	name:"agent5",
	components: {
      HeaderReg
	}
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "./styles/agent.scss";

</style>
