<template>
  <div class="userInfo">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">
        <button :class="{'infoStyle': infoStyle==='personalData'}" @click="infoStyle='personalData'">个人资料</button><button :class="{'infoStyle': infoStyle==='rankTitle'}" @click="infoStyle='rankTitle'">等级头衔</button>
      </span>
    </Navbar>

    <div class="content">
      <!-- 个人资料 -->
      <div class="personalData" v-if="infoStyle==='personalData'">
        <ul>
          <li class="headPortrait">
            <span>头像</span>
            <img src="./../../../static/images/cc75798d0ec20b32.jpg" alt="">
            <van-icon name="arrow" />
          </li>
          <li>
            <span>昵称</span>
            <input type="text" placeholder="请设置昵称">
            <van-icon name="arrow" />
          </li>
          <li>
            <span>帐号</span>
            <span>cds0715</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>手机</span>
            <span>未绑定</span>
            <van-icon name="arrow" />
          </li>
          <li>
            <span>邮箱</span>
            <span>未绑定</span>
            <van-icon name="arrow" />
          </li>
          <li>
            <span>性别</span>
            <span>保密</span>
            <van-icon name="arrow" />
          </li>
          <li>
            <span>生日</span>
            <span>1995/10/15</span>
            <van-icon name="arrow" />
          </li>
        </ul>
      </div>
      <!-- 个人资料 end -->
      
      <!-- 等级头衔 -->
      <div class="rankTitle" v-if="infoStyle==='rankTitle'">
        <div class="rankTitleHeader">
          <li>
            <img src="./../../../static/images/cc75798d0ec20b32.jpg">
            <p>
              <span>cds0715<van-icon name="points" /> <i>测试组</i></span>
              <span>头衔: 测试组 <i>成长值分</i></span>
            </p>
          </li>
          <li>
            距离下一级需要0分 每充值1元加1分
          </li>
          <li>
            测试<span class="bar">0%</span>测试
          </li>
        </div>
        <table>
          <caption>
            <van-icon name="question" />等级机制
          </caption>
          <tr>
            <th>等级</th>
            <th>头衔</th>
            <th>成长积分</th>
          </tr>
          <tr v-for="(item, index) in levels" :key="index">
            <td>{{item.level}}</td>
            <td>{{item.rank}}</td>
            <td>{{item.integral}}</td>
          </tr>
        </table>
      </div>
      <!-- 等级头衔 end -->
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'userInfo',
  components: {
    Navbar
  },
  data () {
    return {
      infoStyle: 'personalData',
      levels: [
        {
          level: 'VIP1',
          rank: '农民',
          integral: 0
        },
        {
          level: 'VIP2',
          rank: '地主',
          integral: 10
        },
        {
          level: 'VIP3',
          rank: '知县',
          integral: 200
        },
        {
          level: 'VIP4',
          rank: '通判',
          integral: 1000
        },
        {
          level: 'VIP5',
          rank: '知府',
          integral: 10000
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

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
  &.infoStyle {
    background: #ffffff;
    color: #dc3b40;
  }
}
// 头部的按钮 end

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

@include onebottompx('.personalData ul li');
.content {
  margin-top: px2rem(100px);
  margin-bottom: px2rem(100px);
  overflow: hidden;
  background: #efeef4;
    
  // 个人资料
  .personalData,  {
    ul {
      background: #ffffff;
      margin-bottom: px2rem(34px);
      overflow: hidden;
      font-size: px2rem(36px);
      
      li:last-child::after {
        content: none
      }

      &:nth-child(1), &:nth-child(2) {
        li {
          position: relative;
          margin: px2rem(26px) px2rem(42px);
          padding: px2rem(26px) 0;

          // 头像
          &.headPortrait {
            padding-top: 0;
            overflow: hidden;
            span {
              float: left;
              line-height: px2rem(100px);
            }
            img {
              float: right;
              margin-right: px2rem(40px);
              width: px2rem(100px);
              border-radius: 5px;
            }
            i {
              margin-top: px2rem(36px);
            }
          }
          // 头像 end

          span {
            &:nth-child(2) {
              float: right;
              margin-right: px2rem(40px);
            }
          }

          input {
            float: right;
            margin-top: -5px;
            margin-right: px2rem(40px);
            border: none;
            text-align: right
          }
          
          i {
            position: absolute;
            right: 0;
            font-size: px2rem(28px);
            color: #cccccc;
            font-weight: bold;
          }
        }
      }
    }
  }
  // 个人资料 end

  // 等级头衔
  .rankTitle {
    &>div, &>table {
      margin-bottom: px2rem(40px);
      background: #ffffff;
    }

    .rankTitleHeader {
      padding: px2rem(22px);
      background: linear-gradient(0deg,#3b052c,#6a202d);
      color: #ffffff;
      font-size: px2rem(28px);

      li:nth-child(1) {
        overflow: hidden;
        padding: px2rem(30px) 0;
        img {
          float: left;
          width: px2rem(130px);
          border-radius: px2rem(65px);
          border: 3px solid #753e51;
        }
        p {
          display: inline-block;
          padding-left: px2rem(26px);
          height: 50px;
          span {
            display: block;
            line-height: px2rem(48px);
          }
        }
        i {
          margin-left: 10px;
          font-style: normal;
          color: #ecd70c;
        }
      }
      li:nth-child(3) {
        margin-bottom: 10px;
        padding: 10px 0;
        font-size: px2rem(26px);
        span {
          margin: 0 10px;
          display: inline-block;
          width: 78%;
          background: #746582;
          border-radius: 40px;
          text-align: center;
        }
      }
    }

    table, tr, th, td {
      border: 1px solid #f3eded;
      border-collapse: collapse;
      text-align: center
    }
    table {
      width: 100%;
      caption {
        padding: px2rem(26px);
        line-height: px2rem(54px);
        background: #ffffff;
        text-align: left;
        font-size: px2rem(32px);
        color: #999999;
        i {
          margin: 5px;
        }
      }
      tr {
        color: #666666;
        line-height: px2rem(76px);
        font-size: px2rem(32px);
        th {
          width: 33%;
          background: #f2f4f7;
          font-weight: normal;
        }
      }
    }
  }
  // 等级头衔 end
}
</style>

