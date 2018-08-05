<template>
  <div class="title">
    <div class="line"></div>
    <div class="text">{{msg}}</div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  margin: 28px auto 24px auto;
  width: 80%;

  .line {
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .text {
    padding: 0 12px;
    font-size: 14px;
  }
}
</style>
