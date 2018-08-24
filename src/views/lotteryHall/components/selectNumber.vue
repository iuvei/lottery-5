<template>
  <div class="selectNumber clearfix">
    <div class="title">
      <span>{{titleName}}</span>
    </div>
    <div class="numberContent">
      <div class="number" v-for="item in numberData" :class="{'number-active': item.checked == true}" @click="checkItem(item)">{{item.label}}</div>
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
		titleName: {
			default: '万位'
    },
		numberData: {
			type: Array
    },
    single: {
		  default: false
    }
  },
  methods: {
	  checkItem(item) {
	    if (this.single) {
        this.numberData.forEach(item => {
          item.checked = false
        })
      }
	  	item.checked = !item.checked
      let checkedData = this.numberData.filter(item => {
      	return item.checked == true
      })
      let emitData = {titleName: this.titleName, data: checkedData}
      this.$emit('input', emitData)
    },
    changeEmit() {
	    let checkedData = this.numberData.filter(item => {
		    return item.checked == true
	    })
	    let emitData = {titleName: this.titleName, data: checkedData}
	    console.log(emitData)
	    this.$emit('input', emitData)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .selectNumber {
    position: absolute;
    z-index: 0;
    padding: px2rem(20px) 0;
  }

  @include onebottompx('.selectNumber')

  .title {
    float: left;
    span {
      font-size: px2rem(30px);
      width: px2rem(110px);
      display: block;
      text-align: center;
      line-height: 1.3em;
      color: #bbb39c;
      background: #eeebda;
      border: 1px solid #e3decf;
      border-radius: .3em;
      position: relative;
      z-index: 2;
      margin-top: px2rem(10px);
      padding: .2em .5em;
    }
  }

  .numberContent {
    float: left;
    width: px2rem(600px);
    .number {
      display: inline-block;
      width: px2rem(70px);
      height: px2rem(70px);
      line-height: px2rem(70px);
      text-align: center;
      color: #dc3b40;
      background: #faf9f6;
      border-radius: 50%;
      border: 1px solid #bfbfbf;
      font-size: px2rem(35px);
      margin: px2rem(10px) px2rem(25px);
    }
  }
  .number-active {
    background: #dc3b40 !important;
    color: #fff !important;
    border: 1px solid #dc3b40 !important;
  }
</style>
