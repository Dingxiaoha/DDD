<template>
  <div class="main">
    <ul class="top">
      <li class="list-total">
        <div class="total" @click="toNewsList">20</div>
        <span>待我审核</span>
      </li>
      <li class="list-total">
        <div class="total">20</div>
        <span>我发起的</span>
      </li>
      <li class="list-total">
        <div class="total">20</div>
        <span>抄送我的</span>
      </li>
    </ul>
    <ul class="news-list">
      <li class="news-item">
        <div class="fl item-left">
          <svg-icon icon-class="work"/>
        </div>
        <div class="fl item-right">
          <div class="news-tit">工作通知：苏州易改善网络科技有限公司</div>
          <div class="news-tid"><span>[审批]</span> 主题</div>
        </div>
      </li>
      <li class="news-item">
        <div class="fl item-left">
          <el-badge is-dot class="item">
            <svg-icon icon-class="tid"/>
          </el-badge>
        </div>
        <div class="fl item-right">
          <div class="news-tit">消息通知：评论，点赞，收藏</div>
          <div class="news-tid"><span>[审批]</span> 主题</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    methods: {
      toNewsList() {
        this.$router.push({
          name: 'dealNews'
        })
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .main {
    width: 70%;
    margin: 0 auto;
    .top {
      width: 100%;
      display: table;
      margin: 20px 0;
      .list-total {
        width: 33%;
        float: left;
        min-width: 60px;
        text-align: center;
        .total{
          margin: 0 auto;
          text-align: center;
          width: 60px;
          height: 60px;
          line-height: 60px;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          font-size: 22px;
          color: #409EFF;
          font-weight: 600;
        }
        span{
          font-size: 14px;
          color: #4d4d4d;
          line-height: 40px;
        }
      }
    }
  }
  .news-list{
    width: 100%;
    .news-item{
      width: 100%;
      display: table;
      border-bottom: 1px solid #e0e0e0;
      padding: 20px 0;
      .item-left{
        width: 10%;
        text-align: center;
        min-width: 50px;
        max-width: 100px;
        .svg-icon{
          width: 45px;
          height: 45px;
        }
      }
      .item-right{
        width: 90%;
        .news-tit{
          color: #4d4d4d;
          font-size: 15px;
        }
        .news-tid{
          color: #333;
          font-size: 12px;
          margin-top: 15px;
          span{
            color: #ff9a03;
          }
        }
      }
    }
  }
</style>    