<template>
  <div>
    <div class="title">
      <svg-icon icon-class="themer"/>
      <span>建议主题</span>
    </div>
    <div class="con"><p>测试测试测试测试测试测试测试测试测试测试测试测试</p></div>
    <div class="title">
      <svg-icon icon-class="acon"/>
      <span>建议主题</span>
    </div>
    <div class="con"><p>测试测试测试测试测试测试测试测试测试测试测试测试</p></div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .title {
    height: 50px;
    line-height: 50px;
  }
  .con{
    line-height: 20px;
    text-indent: 20px;
    letter-spacing: 1px;
  }
</style>    