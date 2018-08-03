<template>
  <div class="playSortMore">
    <betFilter :tag-main-data="tagMainData" v-model="tagMainDataChecked"></betFilter>
    <betFilterAnd :followPlaylistData="followPlaylistData"></betFilterAnd>
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
          {value: 1, label: 'test', checked: false},
          {value: 2, label: 'test', checked: false},
          {value: 3, label: 'test', checked: false},
          {value: 4, label: 'test', checked: false},
          {value: 5, label: 'test', checked: false},
          {value: 6, label: 'test', checked: false},
          {value: 7, label: 'test', checked: false},
          {value: 8, label: 'test', checked: false},
          {value: 9, label: 'test', checked: false},
        ],
        tagMainDataChecked: [],
        followPlaylistData: [
          {titleName: '直选', data: [
              {value: 1, label: 'tessda tqw', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
              {value: 1, label: 'test', checked: false},
            ]}
        ]
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
