<!--
  name: subOpenAccount
  desc: 个人中心 -> 代理中心 -> 下级开户
-->
<template>
  <div class="subOpenAccount">
    <Navbar>
      <router-link slot="headleft" to="/agentCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">
        <button :class="{'subOpenAccount': openAccountMeth==='subOpenAccount'}" @click="openAccountMeth='subOpenAccount'">下级开户</button><button :class="{'subOpenAccount': openAccountMeth==='invitationCode'}" @click="openAccountMeth='invitationCode'">邀请码</button>
      </span>
    </Navbar>

    <div class="content">
      <div class="subOpenAccount" v-if="openAccountMeth=='subOpenAccount'">
        <ul class="creatAccountTitle">
          <li>
            <label>开户类型</label>
            <input type="radio" name="accountType" checked> 代理类型
            <input type="radio" name="accountType"> 玩家类型
          </li>
          <li>
            请先为下级设置返点，<span @click="toPage('/rebateDes')">点击查看返点赔率表</span>
          </li>
        </ul>

        <ul class="list">
          <li>
            <label>时时彩</label>
            <input type="number" placeholder="自身返点8.0, 可设置返点0.0-8.0">
          </li>
          <li>
            <label>快3</label>
            <input type="number" placeholder="自身返点7.5, 可设置0.0-7.5">
          </li>
          <li>
            <label>11选5</label>
            <input type="number" placeholder="自身返点7.5, 可设置0.0-7.5">
          </li>
          <li>
            <label>福彩3D</label>
            <input type="text" placeholder="自身返点7.5, 可设置0.0-7.5">
          </li>
          <li>
            <label>排列3</label>
            <input type="number" placeholder="自身返点7.5, 可设置0.0-7.5">
          </li>
          <li>
            <label>北京快乐8</label>
            <input type="text" placeholder="自身返点7.5, 可设置0.0-7.5">
          </li>
          <li>
            <label>PK10</label>
            <input type="number" placeholder="自身返点8.0, 可设置0.0-8.0">
          </li>
          <li>
            <label>六合彩</label>
            <input type="number" placeholder="自身返点10.0, 可设置0.0-10.0">
          </li>
          <li>
            <button>生成邀请码</button>
          </li>
        </ul>
      </div>

      <div class="invitationCode" v-if="openAccountMeth=='invitationCode'">
        <ul class="creatAccountTitle">
          <li>
            <label>开户类型</label>
            <input type="radio" name="accountType" checked> 代理类型
            <input type="radio" name="accountType"> 玩家类型
          </li>
        </ul>

        <table>
          <tr>
            <th>邀请码</th>
            <th>生成时间</th>
            <th>状态</th>
          </tr>
          <tr v-for="(item, index) in invitationCode" :key="index">
            <td>{{item.code}}</td>
            <td>{{item.createTime}}</td>
            <td>{{item.state}}</td>
          </tr>
          <tr v-show="invitationCode.length!=0">
            <td colspan="4">已显示全部内容</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'subOpenAccount',
    data () {
      return {
        // 开户方式
        openAccountMeth: 'subOpenAccount',

        invitationCode: [
          {
            code: '23432343',
            createTime: '2018-07-08 15:39:34',
            state: '注册(0)'
          }
        ]
      }
    },
    components: {
      Navbar
    },
    methods: {
      async getMyAgent() {
        let res = await this.axios.get('/v1/Agent/GetMy')
        console.log(res.data.data)
      },
      toPage (src) {
        this.$router.push(src);
      }
    },
    mounted() {
      this.getMyAgent()
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

  // 头部的按钮
  .btn-group button {
    padding: 0;
    width: px2rem(208px);
    height: px2rem(64px);
    background: #dc3b40;
    border: 1px solid #ffffff;
    font-size: px2rem(28px);
    color: #ffffff;
    &:nth-child(1) {
      border-radius: 3px 0 0 3px;
    }
    &:nth-child(2) {
      border-radius: 0 3px 3px 0;
    }
    &.subOpenAccount {
      background: #ffffff;
      color: #dc3b40;
    }
  }
  // 头部的按钮 end

  @include onetoppx('tr')
  .content {
    margin-top: px2rem(100px);
    overflow: hidden;
    background: #efeef4;
    font-size: px2rem(30px);

    .subOpenAccount {
      ul {
        background: #ffffff;
        li {
          padding: 0 px2rem(24px);
          height: px2rem(84px);
          line-height: px2rem(84px);
          label {
            display: inline-block;
            width: px2rem(152px);
          }
          input {
            width: 76%;
            border: none;
            background: transparent;
            outline: none;
            &::-webkit-input-placeholder{
              color:#cccccc;
            }
          }
          span {
            color: rgb(220, 59, 64);
          }
        }

        &:nth-child(1) {
          margin: px2rem(30px) 0;
          input {
            width: auto;
          }
        }
        &:nth-child(2) li {
          &:last-child {
            padding: px2rem(30px) 0;
            text-align: center;
            height: auto;
            button {
              width: 90%;
              height: px2rem(88px);
              border-radius: 3px;
              border: none;
              background: #dc3b40;
              color: #ffffff;
              font-size: px2rem(36px);
            }
          }
        }
      }
    }

    .invitationCode {
      ul {
        margin: px2rem(30px) 0;
        background: #ffffff;
        li {
          padding: 0 px2rem(24px);
          height: px2rem(84px);
          line-height: px2rem(84px);
          label {
            display: inline-block;
            width: px2rem(152px);
          }
        }
      }

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
  }

</style>
