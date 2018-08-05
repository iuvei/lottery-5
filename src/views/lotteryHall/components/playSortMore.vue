<template>
  <div class="playSortMore">
    <betFilter :tag-main-data="tagMainData" v-model="tagMainDataChecked"></betFilter>
    <betFilterAnd :followPlaylistData="followPlaylistData" v-model="followPlaylistDataChecked"></betFilterAnd>
  </div>
</template>
<script>
  import betFilter from './betFilter'
  import betFilterAnd from './betFilterAnd'
  import {tagToPlayMap} from './tagToPlayMap'
  
  export default {
    components: {
      betFilter,
      betFilterAnd
    },
    data() {
      return {
        tagMainData: [
          {value: 1, label: '一星', checked: true},
          {value: 2, label: '前二', checked: false},
          {value: 3, label: '后二', checked: false},
          {value: 4, label: '前三', checked: false},
          {value: 5, label: '中三', checked: false},
          {value: 6, label: '后三', checked: false},
          {value: 7, label: '四星', checked: false},
          {value: 8, label: '五星', checked: false},
          {value: 9, label: '大小单双', checked: false},
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
		    tagToPlayMap.forEach(item => {
		    	if(item.tag == this.tagMainDataChecked[0].label){
		    		_this.followPlaylistData = item.play
          }
        })
      }
    },
    watch: {
    	'tagMainDataChecked': function (n) {
        this.tagToPlay()
	    },
	    'followPlaylistDataChecked': function (n) {
		    let lv1 = this.tagMainDataChecked[0].label
		    let lv2 = this.followPlaylistDataChecked[1].titleName
		    let lv3 = this.followPlaylistDataChecked[0].label
		    tagToPlayMap.forEach(i => {
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
	    },
      'playBoardData': function (n) {
        this.$emit('input', n)
      }
    },
    mounted() {
	    this.tagToPlay()
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
