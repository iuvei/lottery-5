<template>
  <div class="playSortMore">
    {{tagMainDataChecked}}
    <betFilter :tag-main-data="tagMainData" v-model="tagMainDataChecked"></betFilter>
    <betFilterAnd :followPlaylistData="followPlaylistData" v-model="followPlaylistDataChecked"></betFilterAnd>
  </div>
</template>
<script>
  import betFilter from './betFilter'
  import betFilterAnd from './betFilterAnd'
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
        followPlaylistData: [
          {titleName: '直选', data: [
              {value: 1, label: 'tessda tqw', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
            ]},
          {titleName: 'aedf', data: [
              {value: 1, label: 'tessda tqw', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
            ]}
        ],
        followPlaylistDataChecked: []
      }
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
