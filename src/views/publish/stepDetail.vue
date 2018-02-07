<template>
  <div class="main">
    <div class="view-list">
      <div class="header-img">
        <img src="static/images/header.jpg" alt="">
      </div>
      <div class="you">
          <div class="list-title">aaa{{user_name}}</div>
      </div>
    </div>
    <div class="kong"></div>
    <div class="progress-con">
      <list-items :name="progressName.title_1" :con="progressCon.department"></list-items>
      <list-items :name="progressName.title_2" :con="progressCon.areas"></list-items>
      <list-items :name="progressName.title_3" :con="progressCon.classic"></list-items>
      <list-items :name="progressName.title_4" :con="progressCon.is_urgent"></list-items>
      <list-items :name="progressName.title_5" :con="progressCon.build_time"></list-items>
      <list-items :name="progressName.title_6" :con="progressCon.finish_time"></list-items>
      <list-items :name="progressName.title_7" :con="progressCon.score"></list-items>
    </div>
    <step-progress></step-progress>
    <div class="kong"></div>
    <advice-con></advice-con>
    <div class="kong"></div>
    <improve></improve>
    <div class="kong"></div>
    <current-step></current-step>
    <div style="text-align: center" v-if="">
      <el-button type="primary" round>点击查看下一环节处理人
        <svg-icon icon-class="down"/></el-button>
    </div>
    <div style="text-align: center" v-if="">
      <el-button type="primary" round>向上收起
        <svg-icon icon-class="up"/></el-button>
    </div>
    <current-step></current-step>
  </div>
</template>

<script>
  import StepProgress from '../../components/step/_progress'
  import ListItems from '../../components/step/_listItem'
  import AdviceCon from '../../components/step/_con'
  import CurrentStep from '../../components/step/_step'
  import Improve from '../../components/picture/_improve'

  export default {
    name: '',
    components: {
      StepProgress,
      ListItems,
      Improve,
      AdviceCon,
      CurrentStep
    },
    data() {
      return {
        progressName: {
          title_1: '建议部门',
          title_2: '建议区域',
          title_3: '分类',
          title_4: '是否紧急',
          title_5: '创建时间',
          title_6: '完成期限',
          title_7: '评分'
        },
        progressCon: {
          department: '技术部',
          areas: '实验室',
          classic: '3级条件',
          is_urgent: '一般紧急',
          build_time: '2018-01-01 12:00',
          finish_time: '2018-02-01 12:00',
          score: '50'
        }
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .main{
    width: 70%;
    margin: 0 auto;
  }
  .header-img {
    width: 20%;
    height: 80px;
    min-width: 80px;
    max-width: 125px;
    float: left;
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }
  .you {
    width: 80%;
    float: right;
  }
  .view-list {
    width: 100%;
    display: table;
    margin: 20px 0;
    .list-title {
      font-size: 20px;
      color: #4d4d4d;
      width: 60%;
      float: left;
      line-height: 80px;
    }
  }

</style>    