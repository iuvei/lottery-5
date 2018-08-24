<template>
  <div class="numberBox clearfix">
    <HeaderReg>
      <router-link slot="headleft" to="/lotteryHall">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">
        <span class="titleSelect">
          号码篮
        </span>
      </span>
      <span slot="headright">
      </span>
    </HeaderReg>
    <div class="content">
      <div class="cardContent">
        <ul class="numBox">
          <li v-for="item in lotteryList">
            <div>{{selectedDataToStr(item.playBoardTypeValue, item.selectedNum)}}</div>
            <span>{{`${item.type}${item.detial} ${item.bittingNumber}注 x ${2 / item.YJFmul}元 x ${item.betMul}倍 = ${item.price}元`}}</span>
          </li>
        </ul>
        <div class="moreOption">
          <div class="clear">
            清空
          </div>
        </div>
      </div>
    </div>
    <div class="footerBar">

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import playMethods from '../../utils/playMethods'
  import {selectedDataToStr} from '../../utils/auth'
  import HeaderReg from '@/components/Navbar.vue'
  import footerBar from './components/footerBar'
  import playSortMore from './components/playSortMore'
  import playBoard from './components/playBoard.vue'
  import {tagToPlayMap} from './components/tagToPlayMap'

  export default {
    name: 'ssc',
    components: {
      HeaderReg
    },
    data() {
      return {
        tagToPlayMap: tagToPlayMap, //映射关系
        playBoardData: [], //选中的面板数据
        tagSelectedData: [], //选中的标签
        selectedNumberData: [], //选中的号码
        selectedInfo: {},
        playBoardTypeValue: '',//页面是选择||输入
        choseType: 1,
        checkedList: [],
        betTopDetailShow: false,
        betTopDetailSelected: 1,
        arae: [
          {value: 1, label: '重庆'},
          {value: 2, label: '新疆'},
          {value: 3, label: '天津'},
          {value: 4, label: '大发'}
        ],
        areaShow: false,
        araeSelected: {value: 1, label: '重庆'},
      }
    },
    computed: {
      ...mapGetters([
        'BetFilterDataFlag',
        'PlaySortMore',
        'lotteryList'
      ]),
    },
    watch: {
      // 'playBoardData': function (n) {
      //   console.log(n)
      // },
      'BetFilterDataFlag': function () {
        this.tagToPlayMap = JSON.parse(sessionStorage.getItem('tagToPlayMap'))
      },
      'tagSelectedData': function (n) {
        this.selectedInfo = {}
        // console.log(n)
      },
      'selectedNumberData': {
        handler: function (n) {

        },
        deep: true
      }
    },
    methods: {
      selectedDataToStr(type, value) {
        return selectedDataToStr(type, value)
      },
      tagSelected(data) {
        this.tagSelectedData = data
      },
      choseItem(item, index) {
        item.checked = !item.checked
        this.checkedList = this.choseList.filter(item => {
          return item.checked == true
        })
      },
      selectArea(item) {
        this.araeSelected = item
        this.areaShow = false
        this.$router.push({params: {id: item.value}})
      },
      selectedDetTopDetail(item) {
        this.betTopDetailSelected = item.value
        this.choseList = eval(`this.choseList${item.value}`)
        this.betTopDetailShow = false
      },
      selectedNumberDataMethod(data) {
        let type = this.tagSelectedData[0]
        let details = this.tagSelectedData[2]
        this.selectedInfo = playMethods(type, details, data)
        // console.log(playMethods(type, details, data))
        selectedDataToStr(this.playBoardTypeValue, this.selectedInfo.selectedNum)
      },
      playBoardType(data) {
        this.playBoardTypeValue = data
      }
    },
    mounted() {
      sessionStorage.setItem('tagToPlayMap', JSON.stringify(tagToPlayMap))
      this.choseList = eval(`this.choseList1`)
      this.arae.forEach(i => {
        if (i.value == this.$route.params.id) {
          this.araeSelected = i
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .numberBox {
    position: relative;
    background: #f5f1e4;
    height: 100vh;
    width: 100%;
  }

  .content {
    margin-top: px2rem(230px);
    margin-bottom: px2rem(200px);
    overflow: hidden;
    .cardContent {
      box-shadow: 0 0 px2rem(20px) #ccc;
      margin: 0 px2rem(20px);
      background: #fff;
      padding: px2rem(10px) px2rem(30px);
      .numBox {
      }
      .moreOption {
        .clear {
          width: 100%;
          padding: 0;
          text-align: center;
          font-size: px2rem(30px);
          margin: px2rem(20px) 0;
          color: #666;
        }
      }
    }
  }

  .checked {
    color: #f4c829;
    border-color: #f4c829 !important;
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

