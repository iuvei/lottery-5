<template>
<div class="credit">
	<HeaderReg>
      <router-link slot="headleft" to="/activity">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">银行卡入款彩金</span>
      <span slot="headright"></span>
    </HeaderReg>

	<div class="text">
		<p>尊敬的各位会员：您好！针对近期使用微信、支付宝充值时部分会员出现限额、异常等情况。</p>
		<p><br></p>
		<p><span>90彩票平台现推出通过“手机银行/网银/支付宝/转账到银行卡”进行充值的客户将获得以下优惠：</span></p>
		<p><br></p>
		<p class="str">单笔充值<strong>1000</strong>以上，还能赠送<strong>1%</strong>存款红利<strong>10元。</strong></p>
		<p class="str"><br></p>
		<p class="str">单笔充值<strong>10000</strong>以上，还能赠送<strong>2%</strong>存款红利<strong>200元。</strong></p>
		<p class="str"><br></p>
		<p class="str">单笔充值<strong>100000</strong>以上，还能赠送<strong>3%</strong>存款红利<strong>3000元。</strong></p>
		<p class="str"><br></p>
		<p><span style="color:rgb(0, 112, 192);">转帐成功后请联系客服申请彩金。</span><span style="color:rgb(79, 97, 40);font-weight: bold">注意：彩金按单笔申请，金额不可累加。下注后无法进行申请。</span></p>
		<p><br></p>
		<p>直接转账到银行卡充值：即时到账，简单、快捷。</p>
		<p><br></p>
		<p>充值步骤如下：</p>
		<p><br></p>
		<p><span>1、登录会员账号后，点击充值-银行卡转账，获取到专属的收款卡号。</span></p>
		<p><br></p>
		<p><span>2、打开手机中的支付宝或手机银行客户端，点击首页中的“转账”，输入姓名、卡号、选择银行、输入您的转账金额，点击下一步确定转账信息，并且成功转账。</span></p>
		<p><br></p>
		<p>为了您的款项能即时到账，转账时记得备注您的会员账号。您若不懂操作转账，请及时联系我们24小时在线客服进行操作咨询。感谢您长久以来对“90彩票”的支持与信赖，90彩票平台也将会尽力改善充值问题，祝您游戏愉快、盈利多多！</p>
		<p>网银转账到银行卡提交订单教程</p>
		<p><br></p>
		<p>步骤1：</p>
		<img src="./images/credit1.png" alt="">
		<p><br></p>
		<p>步骤2：</p>
		<img src="./images/credit2.png" alt="">
		<p><br></p>
		<p>步骤3：</p>
		<img src="./images/credit3.png" alt="">
		<p><br></p>
	</div>
</div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue';
export default {
	name:"credit4",
	components: {
      HeaderReg
	}
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "./styles/credit.scss";
</style>
