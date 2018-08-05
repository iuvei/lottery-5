<template>
  <div class="betFilter">
    <span class="tag_mainplay_item" :class="{active: item.checked}" v-for="item in tagMainData" @click="checkedData(item)">
      {{item.label}}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      tagMainData: {
        type: Array
      }
    },
    methods: {
      checkedData(item) {
      	if(item) {
		      this.tagMainData.forEach(item => {
			      item.checked = false
		      })
		      item.checked = !item.checked
	      }
        let emitData = this.tagMainData.filter( item => {
          return item.checked == true
        })
        this.$emit('input', emitData)
      }
    },
    watch: {
    
    },
    mounted() {
	    this.checkedData()
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .betFilter {
    padding: px2rem(10px) px2rem(30px);
    box-shadow: 0 2px 10px rgba(41,41,41,.08);
    position: relative;
    z-index: 2;
    background: #fff;
    overflow: hidden;
    .tag_mainplay_item {
      text-align: center;
      float: left;
      display: inline-block;
      margin: px2rem(10px) px2rem(20px);
      width: px2rem(130px);
      height: px2rem(64px);
      line-height: px2rem(64px);
      border: 1px solid #ddd;
      border-radius: 3px;
      font-size: px2rem(30px);
      color: #555;
    }
  }
  .active {
    background: #dc3b40 !important;
    border: 1px solid #dc3b40 !important;
    color: #fff !important;
  }
</style>
