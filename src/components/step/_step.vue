<template>
  <div class="main">
    <div class="step-list">
      <div class="fl zuo">
        <div class="theme">
          <div class="circle-grey">发起建议</div>
        </div>
      </div>
      <div class="fr details">
        <div class="head">
          <img src="static/images/header.jpg" alt="" class="fl headUrl">
          <div class="fl user_name">name</div>
          <div class="fl user_job"><span>工程师</span></div>
        </div>
        <div class="come-from">
          <div>time</div>
          <div>来自技术部</div>
        </div>
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
  .main{
    width: 100%;
    .headUrl{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 15px 0;
    }
    .head{
      width: 100%;
      display: table;
      height: 110px;
      line-height: 110px;
      .user_name{
        color: #4d4d4d;
        font-size: 20px;
        margin-left: 30px;
      }
      .user_job{
        margin-left: 20px;
        span{
          padding: 5px;
          border-radius: 10px;
          background: #409EFF;
          color: #fff;
          font-size: 14px;
        }
      }
    }
    .step-list{
      width: 100%;
      display: table;
      .theme{
        border-right: 1px solid #e0e0e0;
        position: relative;
        width: 30px;
        padding: 44px 0;
        >div{
          width: 60px;
          height: 60px;
          line-height: 60px;
          color: #fff;
          font-size: 12px;
          text-align: center;
          border-radius: 50%;
        }
      }
      .zuo{
        width: 10%;
      }
      .details{
        width: 85%;
        border-bottom: 1px solid#e0e0e0;
        .come-from{
          width: 100%;
          display: table;
          color: #999;
          font-size: 14px;
          >div{
            float: left;
            margin: 10px 20px 10px 0;
          }
        }
      }
    }
  }
</style>    