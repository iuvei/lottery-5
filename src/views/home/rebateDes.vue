<!--
  name: agentReportForm
  desc: 个人中心 -> 代理中心 -> 代理报表
-->
<template>
  <div class="agentReportForm">
    <Navbar>
      <router-link slot="headleft" to="/subOpenAccount">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">返点赔率表</span>
      <span slot="headright" @click="show=true">
        <span class="whichDay">{{actionsValue.name}}</span>
      </span>
    </Navbar>

    <div class="content">
      <!-- options -->
      <v-table
        :width="1000"
        :columns="columns"
        :table-data="tableData"
        :show-vertical-border="false"
      ></v-table>
    </div>

    <!-- 弹出层 -->
    <div class="popup">
      <van-actionsheet
        v-model="show"
        :actions="actions"
        @select="onSelect"
      />
    </div>
    <!-- 弹出层 end -->
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'agentReportForm',
    data () {
      return {
        show: false,
        actions: [
          {
            name: '快3',
            label: 'k3'
          },
          {
            name: '时时彩',
            label: 'ssc'
          },
          {
            name: '11选5',
            label: 'syxw'
          },
          {
            name: 'PK10',
            label: 'pk10'
          },
        ],
        actionsValue: {
          name: '快3',
          value: 'k3'
        },
        tableData: [
          {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
          {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
          {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
          {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
          {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
        ],
        columns: [
          {field: 'name', title:'姓名', width: 100, titleAlign: 'center',columnAlign:'center'},
          {field: 'tel', title: '手机号码', width: 260, titleAlign: 'center',columnAlign:'center'},
          {field: 'hobby', title: '爱好', width: 330, titleAlign: 'center',columnAlign:'center'},
          {field: 'address', title: '地址', titleAlign: 'center',columnAlign:'left'}
        ]
      }
    },
    components: {
      Navbar
    },
    methods: {
      onSelect(item) {
        this.show = false
        console.log(item)
        this.actionsValue = item
      },
      toPage (src) {
        this.$router.push(src);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* 哪天 */
  .whichDay {
    font-size: px2rem(30px);
    /*width: px2rem(300px);*/
    /*display: inline-block;*/
  }
  /* 哪天 end */

  // @include onetoppx('.agentHeader', 'top', 'before', #ffffff)
  .content {
    margin-top: px2rem(100px);
    overflow: scroll;
    background: #efeef4;

    div.search {
      p {
        position: relative;
        margin: px2rem(24px);
        padding: px2rem(14px);
        border-radius: 5px;
        background: #ffffff;
        font-size: px2rem(30px);
        input {
          border: none;
          background: transparent;
          &::-webkit-input-placeholder{
            color:#cccccc;
          }
        }
        button {
          position: absolute;
          top: px2rem(6px);
          right: px2rem(14px);
          padding: px2rem(2px);
          width: px2rem(50px);
          height: px2rem(50px);
          border: none;
          border-radius: px2rem(5px);
          background: #dc3b40;
          color: #ffffff;
          i {
            font-weight: 700;
            font-size: px2rem(24px);
          }
        }
      }
    }

    ul.options {
      padding: px2rem(36px);
      overflow: hidden;
      background: #ffffff;
      text-align: center;


      li {
        float: left;
        padding: px2rem(70px) 0;
        width: 33%;
        border: 1px solid #e2e1e1;
        border-bottom: none;
        border-right: 0;
        font-size: px2rem(32px);

        &:nth-child(1), &:nth-child(2), &:nth-child(3) {
          border-top: none;
        }
        &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13)  {
          border-left: none;
        }

        span {
          display: block;
          &:nth-child(1) {
            color: #ff6818;
            font-weight: 500;
            font-size: px2rem(36px);
            line-height: px2rem(50px);
          }
        }
      }
    }
  }

  // 弹出层
  @include onebottompx('.popup li', 'bottom', 'after', #ededed);
  .popup{
    li {
      margin: 0;
      padding: px2rem(30px);
      list-style: none;
      font-size: px2rem(40px);
      text-align: center;
      &:last-child {
        border-top: px2rem(30px) solid #efeef4;
      }
    }
  }
  // 弹出层

</style>
