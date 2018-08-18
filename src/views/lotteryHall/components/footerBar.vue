<template>
  <div class="footerBar">
    <div class="multipleCon">
      <div class="multipleConLine">
        <div class="multiple">
          <span @click="minus">-</span>
          <input type="tel" v-model="betMul" @blur="changeInput">
          <span @click="add">+</span>
        </div>
        <div class="moneyUnit">
          <span v-for="item in YJF" :class="{'active': item.checked}" @click="changeYJF(item)">{{item.label}}</span>
        </div>
      </div>
    </div>
    <div class="betInfo">
      <div class="betContent" :class="{'betActive': finalData.bittingNumber != 0}">
        <span>+</span>
        <div>
          <div>共{{finalData.bittingNumber}}注，{{(finalData.price/YJFmul).toFixed(2)}}元</div>
          <!--<span>234234</span>-->
        </div>
      </div>
      <div class="betCard">
        号码篮
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        YJF: [
          {value: 1, label:'元',checked: true},
          {value: 10, label:'角',checked: false},
          {value: 100, label:'分',checked: false}
        ],
        betMul: 1,
        YJFmul: 1
      }
    },
    props: ['selectedInfo'],
    computed: {
      finalData() {
        return {
          bittingNumber:this.selectedInfo.bittingNumber || 0,
          price:this.selectedInfo.price || 0,
        }
      }
    },
    methods: {
      add() {
        if (this.betMul > 9999) {
          return
        }
        this.betMul++
      },
      minus() {
        if (this.betMul <= 1) {
          return
        }
        this.betMul--
      },
      changeInput() {
        alert(1)
      },
      changeYJF(item) {
        this.YJF.forEach(v => {
          v.checked = false
        })
        item.checked = true
        this.YJFmul = item.value
      }
    },
    mounted() {
      console.log('selectedInfo')
      console.log(this.selectedInfo)
    }
  }
</script>

<style scoped lang="scss">
  @import "@/styles/index.scss";

  .footerBar {
    position: fixed;
    z-index: 999999;
    bottom: 0;
    width: 100%;
  }

  .multipleCon {
    height: px2rem(105px);
    width: 100%;
    background: #fff;
    .multipleConLine {
      width: 100%;
      height: 100%;
      padding: px2rem(20px);
      .multiple {
        border: 1px solid #d2d2d2;
        height: px2rem(70px);
        display: inline-block;
        vertical-align: middle;
        border-radius: 3px;
        background: #fff;
        span {
          width: px2rem(70px);
          height: 100%;
          font-size: px2rem(50px);
          line-height: px2rem(60px);
          text-align: center;
          color: #d1d1d1;
          display: block;
          float: left;
          vertical-align: top;
          &:first-child {
            border-right: 1px solid #d2d2d2;
          }
          &:last-child {
            border-left: 1px solid #d2d2d2;
          }
        }
        input {
          border: none;
          font-size: px2rem(30px);
          color: #666;
          line-height: px2rem(70px);
          width: px2rem(140px);
          height: 100%;
          text-align: center;
          display: block;
          float: left;
          vertical-align: top;
        }
      }
      .moneyUnit {
        display: inline-block;
        vertical-align: top;
        text-align: right;
        float: right;
        border: 1px solid #d2d2d2;
        border-radius: .15em;
        height: px2rem(70px);
        background: #fff;
        overflow: hidden;
        span {
          display: inline-block;
          vertical-align: top;
          font-size: px2rem(30px);
          height: 100%;
          width: px2rem(70px);
          line-height: px2rem(70px);
          text-align: center;
          border-left: 1px solid #d2d2d2;
          &:first-child {
            border-left: none;
          }
        }
      }
    }
  }
  .active {
    background: #dc3b40;
    color: #fff;
  }

  .betInfo {
    height: px2rem(105px);
    width: 100%;
    display: flex;
    .betContent {
      background: #252625;
      flex: 2;
      & > span {
        display: inline-block;
        float: left;
        line-height: px2rem(105px);
        font-size: px2rem(40px);
        margin-left: px2rem(20px);
        color: #fff;
      }
      & > div {
        display: inline-block;
        padding: px2rem(10px) px2rem(20px);
        color: #fff;
        & > div {
          font-size: px2rem(36px);
        }
        & > span {
          display: inline-block;
          margin-top: px2rem(10px);
        }
      }
      
    }
    .betActive {
      background: #dc3b40;
    }
    .betCard {
      text-align: center;
      background: #575858;
      flex: 1;
      color: #fff;
      font-size: px2rem(30px);
      line-height: px2rem(105px);
    }
  }
</style>
