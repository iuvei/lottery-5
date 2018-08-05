<template>
  <div class="textareaNumber">
    <textarea class="tag_import_content" placeholder=" 每一注号码之间请使用空格分开，每注之间以回车、逗号或分号进行分隔" @input="emitData" v-model="areaData"></textarea>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        areaData:''
      }
    },
    methods: {
      emitData() {
        this.$emit('input', this.areaData)
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
