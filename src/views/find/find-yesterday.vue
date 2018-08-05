<template>
    <div class="find-content">
      <!-- 导航栏开始 -->
      
      <!-- 导航栏结束 -->

      <div class="act-item" v-for="(item,index) in finds" @click="toPage(`/player/${index}`)" v-bind:key="item.id">
        <a href="#">
          //左侧头像
          <div class="num">
            <!-- 此处img遍历失败，不知道为什么 -->
			      <!-- <img v-bind:src="item.src"> -->
            <img src="./images/player1.jpg" alt="">
		      </div>
          //中间介绍
          <div class="text">
            <strong>{{item.top1}}</strong>
            <span>{{item.top2}}<br>{{item.bottom1}}</span><em>{{item.bottom2}}</em>
          </div>
          //右箭头
          <div class="act-icon">
            
          </div>
        </a>
      </div>
    </div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue';

export default {
	name:"find-yesterday",
  components:{
    HeaderReg
  },
  data(){
    return{
		finds:[
			    {id:1,src:"./images/player1.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:2,src:"./images/player2.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:3,src:"./images/player3.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:4,src:"./images/player4.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:5,src:"./images/player5.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:6,src:"./images/player6.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:7,src:"./images/player7.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:8,src:"./images/player8.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:9,src:"./images/player9.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"},
        	{id:10,src:"./images/player10.jpg",top1:"151***g",top2:"在上海",bottom1:"喜中",bottom2:"￥2.3"}
		]
	}
  },
  methods:{
    toPage(link) {
        this.$router.push(link)
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/index";
@import "./styles/main";
</style>
