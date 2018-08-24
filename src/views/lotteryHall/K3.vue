<template>
  <div class="k3 clearfix">
    <HeaderReg bgcolor="#000">
      <router-link slot="headleft" to="/lotteryHall">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">
        <span class="">
          <span class="playMeth">玩法</span>
          <span @click="betTopDetailShow = !betTopDetailShow" class="click-wrapper">点击 <i class="iconfont icon-sort-down"></i></span>
        </span>
        <div class="betTopDetail" v-show="betTopDetailShow">
          <div @click="selectedDetTopDetail(item)" class="betTopDetailItem"
               :class="{'betTopDetailSelected': item.titleName == betTopDetailSelected}"
               v-for="item in betTopDetailList">
            <div class="betTopDetailItemName">{{item.titleName}}</div>
            <div class="betTopDetailItemOdds">{{item.ratio}}倍</div>
            <!--<div class="betTopDetailItemNumber">{{item.number}}</div>-->
            <span></span><i></i><span></span><i></i><span></span>
          </div>
        </div>
      </span>
      <span slot="headright">
        <span @click="areaShow = !areaShow">{{araeSelected.label}}</span>
        <div class="area-list" v-show="areaShow">
          <span v-for="item in arae" @click="selectArea(item)">{{item.label}}快3</span>
        </div>
      </span>
    </HeaderReg>
    <div class="state">
      <div>
        <span>0730080期开奖号码</span>
        <div>1 2 3</div>
      </div>
      <div>
        <span>0730081期投注截止</span>
        <div><countDown></countDown></div>
      </div>
    </div>
    <div class="content">
      <div class="chose-wrap">
        <playBoardK3 ref="playBoardK3" :tagToPlayMapK3="tagToPlayMapK3" :betTopDetailSelected="betTopDetailSelected"
                     @change="choseItem"></playBoardK3>
      </div>
    </div>

    <div class="chose-info" v-show="checkedList.selectedData && checkedList.selectedData.length > 0">
      <div>
        <span>当前选号</span>
        <div>
          <span v-for="item in checkedList.selectedData"
                style="color:#f4c829;font-size: 0.5rem;margin-left: 0.2rem">{{item.label}}</span>
        </div>
      </div>
      <div>
        <span>每注金额</span>
        <div>
          <input type="text" v-model="mutiNumberValue">
          <span v-if="!mutiNumberValue">请输入要投注的金额</span>
          <span v-else>最高可中<span
            style="color: rgb(244, 200, 41)">{{checkedList.maxRatio * mutiNumberValue}}</span>元</span>
        </div>
      </div>
    </div>
    <div class="footerbar">
      <span class="fl">清空</span>
      <span class="fm">共{{checkedList.bittingNumber || 0}}注</span>
      <span class="fr">马上投注</span>
    </div>
  </div>
</template>

<script>
  import HeaderReg from '@/components/Navbar.vue'
  import playBoardK3 from './components/playBoardK3.vue'
  import {tagToPlayMapK3} from './components/tagToPlayMapK3.js'

  export default {
    name: 'k3',
    components: {
      HeaderReg,
      playBoardK3
    },
    data() {
      return {
        mutiNumberValue: '',
        tagToPlayMapK3: tagToPlayMapK3, //映射关系
        choseType: 1,
        checkedList: [],
        betTopDetailList: [
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 1},
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 2},
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 3},
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 4},
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 5},
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 6},
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 7},
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 8},
          {name: '和值', odds: '赔率31.5倍', number: 123, value: 9},
        ],
        betTopDetailShow: false,
        betTopDetailSelected: '和值',
        arae: [
          {value: 1, label: '江苏'},
          {value: 2, label: '安徽'},
          {value: 3, label: '广西'},
          {value: 4, label: '湖北'},
          {value: 5, label: '北京'},
          {value: 6, label: '江苏'},
          {value: 7, label: '河北'},
          {value: 8, label: '甘肃'},
          {value: 9, label: '上海'},
          {value: 10, label: '贵州'},
          {value: 11, label: '吉林'},
          {value: 12, label: '大众'}
        ],
        areaShow: false,
        araeSelected: {value: 1, label: '江苏'},
      }
    },
    methods: {
      choseItem(data) {
        this.checkedList = data
      },
      selectArea(item) {
        this.araeSelected = item
        this.areaShow = false
      },
      selectedDetTopDetail(item) {
        this.$refs.playBoardK3.resetSelected()
        this.betTopDetailSelected = item.titleName
//				this.choseList = eval(`this.choseList${item.value}`)
        this.betTopDetailShow = false
      },
      loadBetTopDetailList() {
        this.betTopDetailList = JSON.parse(sessionStorage.getItem('tagToPlayMapK3'))
      }
    },
    mounted() {
      this.loadBetTopDetailList()
      sessionStorage.setItem('tagToPlayMapK3', JSON.stringify(tagToPlayMapK3))
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  /* 玩法 */
  .playMeth {
    display: inline-block;
    margin-top: px2rem(20px);
    width: px2rem(24px);
    line-height: 1em;
    font-size: px2rem(24px);
  }
  /* 点击 */
  .click-wrapper {
    position: absolute;
    top: px2rem(20px);
    display: inline-block;
    margin-left: px2rem(20px);
    padding: px2rem(8px);
    border-radius: 3px;
    border: 1px solid #ffffff;
    line-height: 1em;
    font-size: px2rem(32px);
    i {
      color: #f0c930;
      font-size: px2rem(24px);
    }
  }

  .k3 {
    position: relative;
    background: #317455;
    height: 100vh;
    width: 100%;
  }

  .betTopDetailItem:last-child {
    visibility: hidden;
  }

  .betTopDetail {
    position: absolute;
    top: px2rem(100px);
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: .5em;
    background: #317455;
    text-align: center;
    .betTopDetailItem {
      display: inline-block;
      width: px2rem(200px);
      height: px2rem(200px);
      margin: px2rem(10px);
      border: 1px solid hsla(0, 0%, 100%, .3);
      vertical-align: top;
      .betTopDetailItemName {
        font-size: px2rem(32px);
        line-height: px2rem(32px);
        margin: px2rem(20px) 0;
      }
      .betTopDetailItemOdds {
        margin-top: px2rem(30px);
        font-size: px2rem(25px);
        line-height: px2rem(25px);
        color: #caebda;
      }
      .betTopDetailItemNumber {
        font-size: px2rem(40px);
        line-height: px2rem(40px);
        margin: px2rem(35px) 0;
      }
      span {
        display: inline-block;
        margin: 0 px2rem(10px);
        width: px2rem(42px);
        height: px2rem(42px);
        background: url(http://images.app2jsknas.com/system/common/dice/diceK3.png) no-repeat;
        background-size: px2rem(100px);
      }
      &:nth-child(1) {
        span {
          margin: 0;
        }
        i {
          font-style: normal;
          &:nth-child(4)::after, &:nth-child(6)::after {
            content: '+';
            font-size: px2rem(18px);
          }
        }
      }
      &:nth-child(4) {
        span {
          &:nth-child(3) {
            background-position: 1px px2rem(-51px);
          }
          &:nth-child(5) {
            background-position: 1px px2rem(-101px);
          }
          &:nth-child(7) {
            background-position: 1px px2rem(-201px);
          }
        }
      }
      &:nth-child(5) {
        span {
          &:nth-child(3) {
            /*-2px -3px*/
            background-position: 0 0;
          }
          &:nth-child(5) {
            background-position: 0 px2rem(-50px);
          }
          &:nth-child(7) {
            background-position: 1px px2rem(-101px);
          }
        }
      }
      &:nth-child(6), &:nth-child(7) {
        span {
          &:nth-child(3) {
            background-position: 0 0;
          }
          &:nth-child(5) {
            background-position: 0 0;
          }
          &:nth-child(7) {
            background-position: 1px px2rem(-101px);
          }
        }
      }
      &:nth-child(8) {
        span {
          &:nth-child(3) {
            /*-2px -3px*/
            background-position: 0 0;
          }
          &:nth-child(5) {
            background-position: 0 px2rem(-50px);
          }
          &:nth-child(7) {
            background-position: 1px px2rem(-152px);
          }
        }
      }
    }
  }

  .betTopDetailSelected {
    border-color: #f4c829 !important;
  }

  .area-list {
    margin: 0;
    padding: 0;
    background: #fff;
    position: absolute;
    top: px2rem(100px);
    right: 0;
    width: px2rem(400px);
    z-index: 50;
    span {
      float: left;
      width: px2rem(200px);
      border: 0.5px solid rgba(108, 108, 108, 0.14);
      color: #333;
      font-size: px2rem(35px);
    }
  }

  .content {
    margin-top: px2rem(230px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
  }

  .state {
    position: fixed;
    top: px2rem(100px);
    color: #caebda;
    width: 100%;
    height: px2rem(130px);
    background-color: #22563f;
    border-top: 1px solid #426d5a;
    box-sizing: border-box;
    & > div {
      float: left;
      width: 50%;
      height: 100%;
      border-right: 1px solid #164630;
      text-align: center;
      overflow: hidden;
      padding: px2rem(10px) 0;
      & > span {
        font-size: px2rem(32px);
      }
      & > div {
        height: px2rem(68px);
        line-height: px2rem(68px);
        font-size: px2rem(50px);
      }
    }
  }

  .chose-wrap {
    margin-top: px2rem(30px);
    padding: px2rem(20px);
    .chose-msg {
      text-align: center;
      font-size: px2rem(25px);
      line-height: px2rem(30px);
      margin: px2rem(10px) auto;
      color: #caebda;
    }
    .chose-list {
      width: px2rem(700px);
      margin: 0 auto;
      text-align: center;

      .chose-list-item {
        padding: px2rem(16px);
        vertical-align: top;
        display: inline-block;
        text-align: center;
        border: 1px solid hsla(0, 0%, 100%, .3);
        width: px2rem(140px);
        height: px2rem(90px);
        padding-top: .1em;
        overflow: hidden;
        margin: .1rem;
        line-height: 1.22em;
        font-size: .9em;
        span {
          color: #fff;
          font-size: px2rem(8px);
        }
        span:nth-child(1) {
          display: block;
          margin: px2rem(12px) 0;
          font-size: px2rem(40px);
        }
      }
    }
  }

  .chose-info {
    position: fixed;
    bottom: px2rem(100px);
    width: 100%;
  }

  .chose-info > div {
    display: flex;
    height: px2rem(70px);
    line-height: px2rem(70px);
    border-bottom: 1px solid #456166;
    background: #22563f;
    & > span {
      flex: 2;
      text-align: center;
      color: #caebda;
      font-size: px2rem(30px);
    }
    & > div {
      flex: 8;
      & > input {
        height: px2rem(40px);
        line-height: px2rem(70px);
        width: 5em;
        background-color: #cbeedc;
        color: #19593c;
        border-radius: .2em;
        text-align: center;
        margin-left: 0.2rem;
        outline: none;
        margin: 0;
        padding: 0;
        vertical-align: middle;
        -webkit-transform: translateY(1px);
        transform: translateY(1px);
      }
      & > span {
        color: #caebda;
        display: inline-block;
        font-size: px2rem(25px);
      }
    }
  }

  .footerbar {
    position: fixed;
    z-index: 500;
    bottom: 0;
    height: px2rem(100px);
    width: 100%;
    line-height: px2rem(100px);
    background: #000;
    span {
      line-height: px2rem(100px);
    }
    .fl {
      float: left;
      font-size: px2rem(40px);
      margin: 0 px2rem(20px);
      color: #ffaf36;
    }
    .fm {
      float: left;
      color: #fff;
      padding: 0;
      font-size: px2rem(30px);
    }
    .fr {
      float: right;
      color: #4e0904;
      height: px2rem(70px);
      line-height: px2rem(70px);
      font-size: px2rem(50px);
      padding: 0 .3rem;
      margin: .2rem .3rem;
      border-radius: .2rem;
      background: #feab03;
      background: linear-gradient(180deg, #ffdb01 0, #e07a06);
      background: -webkit-linear-gradient(bottom, #ffdb01, #e07a06);
    }
  }
</style>
