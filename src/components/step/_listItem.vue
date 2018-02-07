<template>
  <div class="list-item">
    <div class="fl color-4d zuo">{{name}}：</div>
    <div class="fl color-3 you">{{con}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    components: {},
    props: {
      name: {
        type: String
      },
      con: {
        type: String
      }
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .list-item{
    display: table;
    width: 100%;
    font-size: 15px;
    height: 35px;
    line-height: 35px;
  }
  .zuo{
    width: 20%;
    min-width: 100px;
    max-width: 150px;
    text-align: left;
  }
  .you{
    width: 25%;
    min-width: 200px;
    text-align: left;
  }
</style>    