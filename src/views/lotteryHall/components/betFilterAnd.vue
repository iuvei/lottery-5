<template>
  <div class="betFilterAnd">
    <div class="followPlaylist clearfix" v-for="item in followPlaylistData">
      <div class="title">
        <span>{{item.titleName}}</span>
      </div>
      <div class="numberContent">
        <div class="number" v-for="itemChild in item.data" :class="{'active': itemChild.checked == true}" @click="checkItem(item, itemChild)">{{itemChild.label}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    props: {
      followPlaylistData: {
        type: Array
      }
    },
    methods: {
      checkItem(item, itemChild) {
        itemChild.checked = !itemChild.checked
        let checkedData = item.data.filter(i => {
          return i.checked == true
        })
        checkedData.push(item.titleName)
        console.log(checkedData)
        this.$emit('input', checkedData)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .followPlaylist {
    padding: px2rem(10px) px2rem(50px);
    background: #fff;
    border-bottom: 1px solid #eee;
    position: relative;
    z-index: 1;
  }

  .title {
    float: left;
    span {
      font-size: px2rem(30px);
      width: px2rem(120px);
      display: block;
      text-align: center;
      line-height: 1.3em;
      color: #666;
      margin-top: px2rem(10px);
      padding: .2em .5em;
    }
  }

  .numberContent {
    float: left;
    width: px2rem(500px);
    .number {
      float: left;
      display: inline-block;
      height: px2rem(64px);
      line-height: px2rem(64px);
      text-align: center;
      color: #dc3b40;
      background: #faf9f6;
      border: 1px solid #bfbfbf;
      border-radius: 3px;
      font-size: px2rem(32px);
      margin: px2rem(10px) px2rem(25px);
      padding: 0 px2rem(20px);
    }
  }
  .active {
    background: #dc3b40 !important;
    color: #fff !important;
    border: 1px solid #dc3b40 !important;
  }
</style>
