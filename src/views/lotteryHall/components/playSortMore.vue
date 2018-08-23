<template>
  <div class="playSortMore">
    <betFilter :tagMainData="tagMainData" v-model="tagMainDataChecked" @change="tagMainDataCheckedMethod"></betFilter>
    <betFilterAnd :followPlaylistData="followPlaylistData" v-model="followPlaylistDataChecked"></betFilterAnd>
  </div>
</template>
<script>
  import betFilter from './betFilter'
  import betFilterAnd from './betFilterAnd'
//  import {tagToPlayMapK3.js} from './tagToPlayMapK3.js'

  export default {
  	props: ['tagToPlayMap'], //传过来的映射关系
    components: {
      betFilter,
      betFilterAnd
    },
    data() {
      return {
        tagMainData: [ //传给tag的数据
//          {value: 1, label: '一星', checked: true},
//          {value: 2, label: '前二', checked: false},
//          {value: 3, label: '后二', checked: false},
//          {value: 4, label: '前三', checked: false},
//          {value: 5, label: '中三', checked: false},
//          {value: 6, label: '后三', checked: false},
//          {value: 7, label: '四星', checked: false},
//          {value: 8, label: '五星', checked: false},
//          {value: 9, label: '大小单双', checked: false},
        ],
        tagMainDataChecked: [],
        followPlaylistData: [],
        followPlaylistDataChecked: [],
        playBoardData: []
      }
    },
    methods: {
    	tagToPlay() {
    		const _this = this
		    this.tagToPlayMap.forEach(item => {
		    	if(item.tag == this.tagMainDataChecked[0].label){
		    		_this.followPlaylistData = item.play
          }
        })
      },
      tagMainDataCheckedMethod(data) {
    	  this.tagMainDataChecked = data
        // alert(11231)
        // this.$store.commit('resetBetFilterData')
      }
    },
    watch: {
	    'tagToPlayMap': {
		    handler:function(n,oldval){

		    },
		    deep:true
	    },
    	'tagMainDataChecked': function (n) {
        this.tagToPlay()
	    },
	    'followPlaylistDataChecked': function (n) {
		    let lv1 = this.tagMainDataChecked[0].label
		    let lv2 = this.followPlaylistDataChecked[1].titleName
		    let lv3 = this.followPlaylistDataChecked[0].label
		    this.tagToPlayMap.forEach(i => {
			    if(i.tag == lv1){
			    	i.play.forEach(j => {
			    		if (j.titleName == lv2) {
			    			j.data.forEach(k => {
			    				if(k.label == lv3) {
								    this.playBoardData = k.playBoard
                  }
                })
              }
            })
          }
		    })
        this.$emit('tagSelected', [lv1, lv2, lv3])
	    },
      'playBoardData': function (n) {
        this.$emit('input', n)
      }
    },
    mounted() {
	    this.tagMainData = this.tagToPlayMap.map((item, index) => {
		    return {value: index + 1, label: item.tag, checked: item.checked}
	    })

//	    this.tagToPlay()
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";
  .playSortMore {
    position: fixed;
    left: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0,0,0,.4);
  }
</style>
