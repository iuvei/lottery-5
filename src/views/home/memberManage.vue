<!--
  name: memberManage
  desc: 个人中心 -> 代理中心 -> 会员管理
-->
<template>
  <div class="memberManage">
    <Navbar>
      <router-link slot="headleft" to="/agentCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">会员管理</span>
    </Navbar>

    <div class="content">
      <table>
        <tr>
          <th>帐号</th>
          <th>类型</th>
          <th>登录时间</th>
          <th>下级人数</th>
        </tr>
        <tr v-for="(item, index) in member" :key="index" @click="showActionsheet(item)">
          <td>{{item.username}}</td>
          <td>{{item.type}}级代理</td>
          <td>{{item.last_time}}</td>
          <td>{{item.count}}</td>
        </tr>
        <tr v-show="member.length!=0">
          <td colspan="4">已显示全部内容</td>
        </tr>
      </table>
    </div>

    <van-actionsheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="onCancel"
    />

    <van-actionsheet v-model="showCatFD" title="返点详情">
      <div class="item-content" v-for="(item, index) in catFDArr">
        <span class="title">{{item.title}}</span>
        <span class="num">{{item.num}}</span>
      </div>
    </van-actionsheet>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'memberManage',
    data () {
      return {
        member: [],
        show: false,
        showCatFD: false,
        type: 1,
        actions: [
          {
            name: '',
            disabled: true,
          },
          {
            name: '查看返点'
          },
          {
            name: '查看下级',
          },
        ],
        currentTitleName: '',
        catFDArr: [
          {
            title: '六合彩',
            num: '9.0'
          },
          {
            title: '快3',
            num: '7.5'
          },
          {
            title: '时时彩',
            num: '5.0'
          }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ]),
    },
    components: {
      Navbar
    },
    methods: {
      async agentMember() {
        let res = await this.axios.post('/v1/Agent/agentMember', {uid: this.userInfo.id, type: this.type})
        this.member = res.data.data
      },
      toPage (src) {
        this.$router.push(src);
      },

      async onSelect(item) {
        // 点击选项时默认不会关闭菜单，可以手动关闭
        this.show = false;
        console.log(item,'好')
        if (item.name === '查看下级') {
          this.type ++
          this.agentMember()
        }
        if (item.name === '查看上级') {
          this.type --
          this.agentMember()
        }
        if (item.name === '查看返点') {
          this.showCatFD = true
        }
      },
      onCancel() {},
      showActionsheet(params) {
        this.currentTitleName = params.username
        this.actions[0].name = this.currentTitleName
        if (params.count == 0) {
          this.actions[2].name = '查看上级'
        }
        this.show = true
        console.log(params,'当前点击的')
      }
    },
    mounted() {
      this.agentMember()
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

  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
    background: #efeef4;

    table, tr, th, td {
      border-top: 1px solid #cccccc;
      border-collapse: collapse;
    }
    table {
      border-top: none;
      width: 100%;
      background: #ffffff;
      border-spacing: 0;
      text-align: center;
      color: #666666;
      font-size: px2rem(34px);
      tr {
        height: px2rem(88px);
        &:nth-child(1) {
          border-top: none;
          background: #f3f3f3;
          th {
            border-top: none;
            padding: 0;
            font-weight: 400;
          }
        }
        td {
          font-size: px2rem(28px);
          color: #000;
          &:nth-child(1) {
            color: rgb(51, 136, 255);
          }
          &:last-child {
            color: #000;
          }
        }
      }
    }
  }
  // 这里写返点的样式就可以
  .item-content {
    height: px2rem(100px);
    line-height: px2rem(100px);
    font-size: px2rem(30px);
    padding-left: px2rem(40px);
    border-bottom: px2rem(2px) solid #eee;
    span {
      display: inline-block;
    }
    .title {
      width: px2rem(400px);
    }
  }

</style>
