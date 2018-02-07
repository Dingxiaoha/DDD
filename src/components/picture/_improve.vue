<template>
  <div>
    <div class="pic-list">
      <div class="tit">改善前</div>
      <div class="mark">
        <img src="static/images/header.jpg" alt="">
      </div>
    </div>
    <div class="pic-list">
      <div class="tit" style="border-color: #8cc555">改善后</div>
      <div class="mark">
        <img src="static/images/header.jpg" alt="">
      </div>
    </div>
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
  .pic-list {
    margin: 20px auto;
    width: 100%;
    display: table;
    .tit {
      color: #606266;
      font-size: 15px;
      padding-left: 15px;
      border-left: red solid 8px;
      margin-bottom: 20px;
    }
    .mark {
      width: 90%;
      max-width: 180px;
      img {
        width: 100%;
        height: 180px;
      }
    }
    img {
      width: 90%;
      height: 185px;
    }
  }
</style>    