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
      	this.followPlaylistData.forEach(item => {
      		item.data.forEach(j => {
      			j.checked = false
          })
        })
        itemChild.checked = !itemChild.checked
        this.$store.commit('showPlaySortMore', false)
//        let checkedData = item.data.filter(i => {
//          return i.checked == true
//        })
//        if(checkedData) {
//          checkedData.push({titleName: item.titleName})
//        }
//        this.$emit('input', checkedData)
      }
    },
    watch: {
	    'followPlaylistData': {
		    handler:function(n,oldval){
			    let checkedData = []
			    this.followPlaylistData.forEach(i => {
				    i.data.forEach(j => {
					    if (j.checked == true) {
						    checkedData = [j]
						    checkedData.push({titleName: i.titleName})
					    }
				    })
			    })
			    this.$emit('input', checkedData)
		    },
		    deep:true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .betFilterAnd {
    background: #fff;
  }
  .followPlaylist {
    padding: px2rem(10px) px2rem(30px);
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
    width: px2rem(530px);
    .number {
      float: left;
      display: inline-block;
      height: px2rem(56px);
      line-height: px2rem(56px);
      text-align: center;
      color: #666;
      background: #faf9f6;
      border: 1px solid #ddd;
      border-radius: 3px;
      font-size: px2rem(28px);
      margin: px2rem(10px) px2rem(10px);
      padding: 0 px2rem(20px);
    }
  }
  .active {
    border: 1px solid #dc3b40 !important;
    color: #dc3b40 !important;
  }
</style>
