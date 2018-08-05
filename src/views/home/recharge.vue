<template>
  <div class="recharge">
    <HeaderRecharge>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">选择充值方式</span>
    </HeaderRecharge>

    <div class="content">
      <ul class="recharge-methods">
        <li v-for="(item, index) in rechageMethods" :key="index">
          <img :src="item.imgSrc">
          <p>
            <span>{{item.meth}}</span>
            <span>{{item.desc}}</span>
          </p>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HeaderRecharge from '@/components/Navbar.vue'

  export default {
    name: 'register',
    components: {
      HeaderRecharge
    },
    data () {
      return {
        rechageMethods: [
          {
            imgSrc: './../../../static/images/card.png',
            meth: '银行转帐',
            desc: '银行转帐维护中...'
          },
          {
            imgSrc: './../../../static/images/weixin.png',
            meth: '微信支付',
            desc: '单笔最低10元, 最高50000元'
          },
          {
            imgSrc: './../../../static/images/alipay.png',
            meth: '支付宝',
            desc: '单笔最低10元, 最高50000元'
          },
          {
            imgSrc: './../../../static/images/qqpay.png',
            meth: 'qq钱包',
            desc: '单笔最低10元, 最高50000元'
          },
          {
            imgSrc: './../../../static/images/fourthpay.png',
            meth: '自动到帐',
            desc: '内含支付宝微信QQ银行等渠道'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";


@include onebottompx('.recharge-methods li');
@include onetoppx('.recharge-methods li');

.content {
  margin-top: px2rem(100px);
  margin-bottom: px2rem(100px);
  overflow: hidden;
  background: #efeef4;
  .recharge-methods {
    li {
      position: relative;
      margin-top: px2rem(30px);
      padding: px2rem(30px);
      background: #ffffff;
      img {
        display: inline-block;
        width: px2rem(108px);
      }
      p {
        display: inline-block;
        margin: 0;
        padding: 0;
        span {
          display: block;
          margin: 5px 0;
          font-size: px2rem(32px);
          &:nth-child(2) {
            font-size: px2rem(28px);
            color: #686868
          }
        }
      }
      i {
        position: absolute;
        right: px2rem(30px);;
        margin-top: px2rem(36px);
        font-size: px2rem(28px);
      }
    }
  }
}
  
</style>
