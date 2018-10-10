<template>
  <div class="numberBox clearfix">
    <HeaderReg>
      <van-icon slot="headleft" name="arrow-left" @click="$router.back(-1);"/>
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
          {{lotteryList[0]}}
          <li v-for="(item, index) in lotteryList">
            <div>{{selectedDataToStr(item.playBoardTypeValue, item.selectedNum)}}</div>
            <span>{{`${item.type}${item.detial} ${item.bittingNumber}注 x ${2 / item.YJFmul}元 x ${item.betMul}倍 = ${item.price / item.YJFmul}元`}}</span>
            <a @click="deleteItem(index)"></a>
          </li>
        </ul>
        <div class="moreOption">
          <div class="clear" @click="clearNum">
            清空
          </div>
        </div>
      </div>
    </div>
    <div class="footerBar">
      <div class="left">
        <span>方案{{allNumAndPrice.num}}注，{{allNumAndPrice.price}}元</span>
      </div>
      <div class="right" @click="lotteryOrderAdd">立即投注</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import playMethods from '../../utils/playMethods'
  import {selectedDataToStr} from '../../utils/auth'
  import {addition} from '../../utils/computePriceAndNumber'
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
      allNumAndPrice() {
      	return {
      		num: addition(this.lotteryList.map(v => {return v.bittingNumber})),
      		price: addition(this.lotteryList.map(v => {return v.price}))
        }
      }
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
      async lotteryOrderAdd() {
        let BettingData = []
        for (let i in this.checkedList.selectedData) {
          BettingData.push({
            lottery_code: this.lotteryList.area.id,
            play_detail_code: "1-A1",
            betting_number: this.checkedList.selectedData[i].label,
            betting_count: this.checkedList.bittingNumber,
            betting_money: this.mutiNumberValue * this.checkedList.bittingNumber,
            betting_point: "18.90-7.50%",
            betting_model: 1,
            betting_issuseNo: this.lotteryList.period,
            graduation_count: 1
          })
        }
        let params = {
          data: {
            BettingData: BettingData
          },
          source: 2
        }
        // let content = this.checkedList.selectedData.map(v => {
        //   return v.label
        // })
        this.$dialog.confirm({
          title: '投注确认',
          message: '<div>' +
          '<div>' + this.lotteryList.area.title+ this.period + '期</div>' +
          '<div>投注金额：<span style="color: red">' + this.mutiNumberValue * this.checkedList.bittingNumber + '元</span></div>' +
          '<div>投注内容：' +  + '</div>' +
          '</div>'
        }).then(async () => {
          // let res = await this.axios.post('v1/Lottery/Order/Add', params)
          // if (res.data.code == 200) {
          //   this.$dialog.alert({
          //     message: res.data.message
          //   });
          //   this.resetSelectData()
          // }
        }).catch(() => {

        });

      },
      clearNum() {
        this.$store.commit('resetLotteryList')
      },
      selectedDataToStr(type, value) {
        return selectedDataToStr(type, value)
      },
      deleteItem(index) {
        this.$store.commit('deleteLotteryListItem')
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
    background: #f9f8f0;
    height: 100vh;
    width: 100%;
  }

  .content {
    margin-top: px2rem(230px);
    margin-bottom: px2rem(200px);
    .cardContent {
      box-shadow: 0 0 px2rem(20px) #ccc;
      margin: 0 px2rem(20px);
      background: #fff;
      padding: px2rem(10px) px2rem(30px);
      .numBox {
        margin: px2rem(20px) 0;
        li {
          position: relative;
          margin-top: px2rem(20px);
          border-bottom: 1px dashed #ccc;
          div {
            display: block;
            color: #dc3b40;
            font-size: px2rem(30px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 90%;
            height: 1.4em;
          }
          span {
            font-size: px2rem(30px);
            color: #666;
            line-height: 1.2em;
            width: 90%;
            display: block;
            margin-bottom: px2rem(20px);
          }
          a {
            font-size: .9em;
            display: block;
            position: absolute;
            right: 0;
            top: 1.1em;
            background: #dc3b40;
            width: 1.2em;
            height: 1.2em;
            border-radius: 50%;
            &:before {
              content: "";
              display: block;
              width: .75em;
              height: .1em;
              background: #fff;
              margin-top: .55em;
              margin-left: .225em;
              border-radius: .1em;
            }
          }
        }

      }
      .moreOption {
        .clear {
          width: 100%;
          padding: 0;
          text-align: center;
          font-size: px2rem(30px);
          margin: px2rem(10px) 0;
          color: #666;
        }
      }
    }
  }

  .checked {
    color: #f4c829;
    border-color: #f4c829 !important;
  }
  .footerBar {
    position: fixed;
    z-index: 999999;
    bottom: 0;
    height: px2rem(105px);
    width: 100%;
    .left {
      width: 70%;
      height: px2rem(105px);
      line-height: px2rem(105px);
      font-size:px2rem(30px);
      padding: 0 px2rem(40px);
      float: left;
      background: #212121;
      color: #fff;
    }
    .right {
      float: left;
      height: px2rem(105px);
      line-height: px2rem(105px);
      background: #dc3b40;
      width: 30%;
      color: #fff;
      font-size:px2rem(40px);
      text-align: center;
    }
  }
</style>

