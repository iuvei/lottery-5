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
        <button :class="{'subOpenAccount': openAccountMeth==='subOpenAccount'}"
                @click="openAccountMeth='subOpenAccount'">下级开户</button><button
        :class="{'subOpenAccount': openAccountMeth==='invitationCode'}"
        @click="openAccountMeth='invitationCode'">邀请码</button>
      </span>
    </Navbar>

    <div class="content">
      <div class="subOpenAccount" v-if="openAccountMeth=='subOpenAccount'">
        <ul class="creatAccountTitle">
          <li>
            <label>开户类型</label>
            <input type="radio" name="accountType" value="1" v-model="type"> 代理类型
            <input type="radio" name="accountType" value="2" v-model="type"> 玩家类型
          </li>
          <li>
            请先为下级设置返点，<span @click="toPage('/rebateDes')">点击查看返点赔率表</span>
          </li>
        </ul>

        <ul class="list">
          <li>
            <label>时时彩</label>
            <input type="number" v-model="AgentValue.ssc.value" :placeholder="`自身返点${myAgent.ssc}, 可设置返点0.0-8.0`">
          </li>
          <li>
            <label>快3</label>
            <input type="number" v-model="AgentValue.k3.value" :placeholder="`自身返点${myAgent.k3}, 可设置0.0-7.5`">
          </li>
          <li>
            <label>11选5</label>
            <input type="number" v-model="AgentValue.syxw.value" :placeholder="`自身返点${myAgent.syx5}, 可设置0.0-7.5`">
          </li>
          <li>
            <label>PK10</label>
            <input type="number" v-model="AgentValue.pk10.value" :placeholder="`自身返点${myAgent.pk10}, 可设置0.0-8.0`">
          </li>
          <li>
            <button @click="ManageInvite">生成邀请码</button>
          </li>
        </ul>
      </div>

      <div class="invitationCode" v-if="openAccountMeth=='invitationCode'">
        <ul class="creatAccountTitle">
          <li>
            <label>开户类型</label>
            <input type="radio" name="accountType" value="1" v-model="type"> 代理类型
            <input type="radio" name="accountType" value="2" v-model="type"> 玩家类型
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
            <td>{{item.createtime}}</td>
            <td>注册({{item.count}})</td>
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
    data() {
      return {
        // 开户方式
        openAccountMeth: 'subOpenAccount',
        type: '1',
        AgentValue: {
          ssc: {label: '时时彩', value: ''},
          k3: {label: '快3', value: ''},
          syxw: {label: '11选5', value: ''},
          pk10: {label: 'PK10', value: ''},
        },
        myAgent: '',
        invitationCode: [
          {
            code: '23432343',
            createtime: '2018-07-08 15:39:34',
            count: '0'
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
        this.myAgent = res.data.data
      },
      async ManageInvite() {
        for (let i in this.AgentValue) {
          if (this.AgentValue[i].value == '') {
            this.$dialog.alert({
              title: '提示',
              message: `${this.AgentValue[i].label}不能为空`
            })
            return
          }
        }
        let params= {
          type: this.type,
          ssc: this.AgentValue['ssc'].value,
          k3: this.AgentValue['k3'].value,
          syx5: this.AgentValue['syxw'].value,
          pk10: this.AgentValue['pk10'].value,
        }
        let res = await this.axios.post('/v1/Agent/ManageInvite', params)
        this.$dialog.alert({
          title: '提示',
          message: res.data.message
        })
        this.getManagelCode()
      },
      async getManagelCode() {
        let res = await this.axios.get('/v1/Agent/ManagelCode')
        this.invitationCode = res.data.data
      },
      toPage(src) {
        this.$router.push(src);
      }
    },
    mounted() {
      this.getMyAgent()
      this.getManagelCode()
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
  .btn-group {
    display: inline-block;
    height: px2rem(100px);
    line-height: px2rem(100px);
  }
  .btn-group button {
    padding: 0;
    width: px2rem(208px);
    height: px2rem(64px);
    line-height: px2rem(64px);
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
            &::-webkit-input-placeholder {
              color: #cccccc;
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
