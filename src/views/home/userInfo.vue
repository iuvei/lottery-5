<!--
  name: userInfo
  desc: 个人中心 -> 个人信息
-->
<template>
  <div class="userInfo">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">
        <button :class="{'infoStyle': infoStyle==='personalData'}" @click="infoStyle='personalData'">个人资料</button><button
        :class="{'infoStyle': infoStyle==='rankTitle'}" @click="infoStyle='rankTitle'">等级头衔</button>
      </span>
    </Navbar>
    <div class="content">
      <!-- 个人资料 -->
      <div class="personalData" v-if="infoStyle==='personalData'">
        <ul>
          <li class="headPortrait" @click="showAvatarSelect">
            <span>头像</span>
            <img :src="`http://${userInfo.avatar}`" alt="">
            <van-icon name="arrow"/>
          </li>
          <li>
            <span>昵称</span>
            <input type="text" placeholder="请设置昵称" v-model="nickname" @blur="setNickname">
            <van-icon name="arrow"/>
          </li>
          <li>
            <span>帐号</span>
            <span>{{userInfo.username}}</span>
          </li>
        </ul>
        <ul>
          <li @click="toPage('/bindPhone')">
            <span>手机</span>
            <span>未绑定</span>
            <van-icon name="arrow"/>
          </li>
          <li @click="toPage('/bindEmail')">
            <span>邮箱</span>
            <span>未绑定</span>
            <van-icon name="arrow"/>
          </li>
          <li>
            <span>性别</span>
            <!--<span>保密</span>-->
            <select name="" id="" style="float: right; margin-right: 20px; border: none; outline: none;">
              <option value="1">保密</option>
              <option value="2">男</option>
              <option value="3">女</option>
            </select>
            <van-icon name="arrow"/>
          </li>
          <!--<li>-->
            <!--<span>生日</span>-->
            <!--<input type="date">-->
            <!--<van-icon name="arrow"/>-->
          <!--</li>-->
        </ul>
      </div>
      <!-- 个人资料 end -->

      <!-- 等级头衔 -->

      <div class="rankTitle" v-if="infoStyle==='rankTitle'">
        <div class="rankTitleHeader">
          <li>
            <img :src="`http://${userInfo.avatar}`">
            <p>
              <span>{{userInfo.username}}<van-icon name="points"/> <i>测试组</i></span>
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
            <van-icon name="question"/>
            等级机制
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

      <!--头像选择-->
      <div class="_changeHeadImg" v-show="avatarSelectShow">
        <div class="backShaw"></div>
        <div class="changeContent">
          <h3 class="line">
            <span>修改头像</span>
            <span class="close" @click="avatarSelectShow = false">x</span>
          </h3>
          <div class="imgContent">
            <span>预览</span>
            <img id="changePhoto"
                 :src="`http://${avatarSelected.src}`"
                 alt="" title="84"><span>{{avatarSelected.title}}</span>
            <div class="headImgListCon fix">
              <!--<span class="nomore"><i class="iconfont"></i></span>-->
              <div class="headImgList">
                <div class="fixedHeadImgWidth fix" style="">
                  <img @click="selectAvatar(item)" v-for="item in avatarData" :src="`http://${item.src}`" alt="">
                </div>
              </div>
              <!--<span><i class="iconfont"></i></span>-->
            </div>
            <div class="changeBtn">
              <span @click="saveAvatar" class="subBtn">保存头像</span> <span @click="avatarSelectShow = false" class="subBtn cancel">取消</span>
            </div>
          </div>
        </div>
      </div>
      <!--头像选择-->
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'userInfo',
    components: {
      Navbar
    },
    data() {
      return {
        infoStyle: 'personalData',
        nickname: '',
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
        ],
        avatarData: [],
        avatarSelected: '',
        avatarSelectShow: false,
      }
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    methods: {
      async setNickname() {
        let res = await this.axios.post('/v1/User/SetNickname', {nickname: this.nickname})
        this.$dialog.alert({
          message: res.data.message
        });
      },
      async getUserAvatar() {
        let res = await this.axios.get('/v1/User/Avatar')
        this.avatarData = res.data.data
        document.getElementsByClassName('fixedHeadImgWidth')[0].style.width = `${3 * this.avatarData.length}rem`
      },
      selectAvatar(item) {
        this.avatarSelected = item
      },
      async saveAvatar() {
        let res = await this.axios.post('/v1/User/Avatar/Set', {id: this.avatarSelected.id})
        this.$dialog.alert({
          title: '提示',
          message: res.data.message
        })
        this.$store.commit('setUserAvatar', this.avatarSelected.src)
        this.avatarSelectShow = false
      },
      showAvatarSelect() {
        this.avatarSelectShow = true
      },
      toPage(src) {
        this.$router.push(src)
      }
    },
    mounted() {
      console.log(this.userInfo.nickname)
      this.getUserAvatar()
      this.nickname = this.userInfo.nickname
      this.avatarSelected = {src: this.userInfo.avatar}
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
  @include onebottompx('.personalData ul li');
  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
    background: #efeef4;

    // 个人资料
    .personalData, {
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
        &:nth-child(2) {
          li {
            i {
              top: px2rem(34px);
            }
          }
        }
      }
      ul:nth-child(2) {
        margin-bottom: 0;
      }
    }
    // 个人资料 end

    // 等级头衔
    .rankTitle {
      & > div, & > table {
        margin-bottom: px2rem(40px);
        background: #ffffff;
      }

      .rankTitleHeader {
        padding: px2rem(22px);
        background: linear-gradient(0deg, #3b052c, #6a202d);
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

  ._changeHeadImg {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .backShaw {
      background: rgba(0, 0, 0, .5);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
    }
    .changeContent {
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 999;
      background: #fff;
      width: 100%;
      color: #666;
      h3 {
        font-size: px2rem(40px);
        position: relative;
        line-height: px2rem(30px);
        padding: 0 px2rem(20px);
        color: #333;
        z-index: 2333333333;
        height: px2rem(30px);
        span.close {
          position: absolute;
          right: px2rem(20px);
          font-size: px2rem(40px);
          color: #888;
          font-weight: 700;
          z-index: 2;
        }
      }
    }
    .imgContent {
      padding: px2rem(30px) 0;
      & > span {
        display: block;
        text-align: center;
        font-size: px2rem(30px);
      }
      & > img {
        display: block;
        width: px2rem(200px);
        height: px2rem(200px);
        border-radius: .1rem;
        margin: .2rem auto;
      }
    }
    .headImgList {
      width: 100%;
      margin: 1rem 0;
      overflow: auto;
      float: left;
      img {
        display: block;
        width: 2.5rem;
        float: left;
        border-radius: .1rem;
        margin: .25rem;
      }
    }
    .changeBtn {
      text-align: center;
      .subBtn {
        background: #e4393c;
        color: #fff;
        display: inline-block;
        width: px2rem(300px);
        font-size: px2rem(30px);
        padding: .3rem 0;
        border-radius: .15rem;
      }
      .cancel {
        background: #d6d6d6;
      }
    }
  }
</style>

