<template>
  <div class="textareaNumber">
    <textarea class="tag_import_content" placeholder=" 每一注号码之间请使用空格( )、逗号(,)或分号(;)进行分隔" @input="emitData" v-model="areaData"></textarea>
  </div>
</template>
<script>
  export default {
    props: {
      titleName: {
        default: ''
      },
      numberData: {
        type: Array
      },
      // single: {
      //   default: false
      // }
    },
    data() {
      return {
        areaData:''
      }
    },
    methods: {
      emitData() {
        this.areaData = this.areaData.replace(/[^\d,，；; ]/, '')
        let emitData = {titleName: this.titleName, data: this.areaData.split(/[,，；; ]/)}
        this.$emit('input', emitData)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .textareaNumber {
    background: #fff;
    margin: .6em;
    padding: .6em;
    textarea {
      font-size: px2rem(32px);
      width: 100%;
      height: px2rem(400px);
      margin: 0;
      border: none;
      color: #666;
      display: block;
      overflow: auto;
      resize: none;
    }
  }
</style>
