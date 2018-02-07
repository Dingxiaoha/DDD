<template>
  <div style="width: 100%; margin: 25px 0">
    <el-steps :active="3" align-center>
      <el-step title="发起"></el-step>
      <el-step title="审核"></el-step>
      <el-step title="指派"></el-step>
      <el-step title="处理"></el-step>
      <el-step title="评分"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
  </div>
</template>

<script>
  export default {
    name: 'Progress',
    components: {},
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped>
</style>    