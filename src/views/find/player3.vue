<template>
  <div class="player">
    <!-- 头部开始 -->
    <HeaderReg>
      <router-link slot="headleft" to="/find">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">玩家信息</span>
      <span slot="headright"></span>
    </HeaderReg>  
    <!-- 头部end -->
    <!-- banner开始 -->
		<div class="banner">
			<div class="playerHeadImg">
				<img src="./images/player1.jpg" alt="">
			</div>
		</div>
    <!-- banner end -->
    <!-- 用户信息开始 -->
    <div class="playerInfo">
      <h1>昵称未设置</h1>
      <!-- 账号需要从数据库中取数据 -->
      <h2>账号：</h2>
      <span>性别:保密</span>
      <p>
        <!-- 头衔需要从数据库中取数据 -->
        头衔：<em data-v-29ad46b8="">通判</em>
        <!-- 累计中奖需要从数据库中取数据 -->
        累计中奖：<em>46928</em>
      </p>
      <!-- 等级需要从数据库中取数据 -->
      <strong>VIP4</strong>
    </div>
    <!-- 用户信息end -->
    <!-- 喜欢的彩票开始 -->
    <div class="like-lottery">
      <p>Ta喜欢的彩票</p>
      <div class="wrap">
      <div>
        <a href="#"><i class="iconfont icon-pk"></i></a>
        <a href="#"><i class="iconfont icon-shishicai"></i></a>
        <a href="#"><i class="iconfont icon-kuai3"></i></a>
        <a href="#"><i class="iconfont icon-pk"></i></a>
      </div>
      <div>
        <a href="#"><i class="iconfont icon-pk"></i></a>
        <a href="#"><i class="iconfont icon-shishicai"></i></a>
        <a href="#"><i class="iconfont icon-kuai3"></i></a>
        <a href="#"><i class="iconfont icon-pk"></i></a>
      </div>
      </div>
    </div>
    <!-- 喜欢的彩票end -->
  </div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue'
export default {
	name:"player3",
	components: {
      HeaderReg
	},
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/index";
@import "./styles/player";

</style>
