<template>
  <div class="main">
    <div class="news-list">
      <div class="list-item">
        <div class="title"><span>建议主题：</span>测试芳芳芳</div>
        <div class="time">2017-02-03 12:11</div>
      </div>
      <div class="item-right wait">
        <div class="icon">
          <svg-icon icon-class="wait"/>
        </div>
        <div class="status color-8a">待查阅</div>
      </div>
    </div>
    <div class="news-list">
      <div class="list-item">
        <div class="title"><span>建议主题：</span>测试芳芳芳</div>
        <div class="time">2017-02-03 12:11</div>
      </div>
      <div class="item-right error">
        <div class="icon">
          <svg-icon icon-class="error"/>
        </div>
        <div class="status-blue color-f">已拒绝</div>
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
  .main {
    width: 70%;
    margin: 0 auto;
    .news-list {
      width: 100%;
      display: table;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      margin: 20px 0;
      position: relative;
      .list-item {
        line-height: 25px;
        padding: 10px 20px;
        width: 70%;
        min-width: 250px;
        .title {
          font-size: 16px;
          color: #333;
          span {
            color: #409EFF;
          }
        }
        .time {
          font-size: 14px;
          color: #6f7180;
        }
      }
    }
    .item-right {
      width: 70px;
      border-radius: 10px;
      position: absolute;
      top: -1px;
      right: -1px;
      .icon {
        width: 100%;
        text-align: center;
        margin-top: 10px;
        .svg-icon {
          width: 30px;
          height: 30px;
        }
      }
      .status {
        width: 100%;
        text-align: center;
        line-height: 28px;
        font-size: 14px;
      }
      .status-blue {
        width: 100%;
        text-align: center;
        line-height: 28px;
        font-size: 14px;
      }
    }
    .wait {
      border: 1px solid #e0e0e0;
      background: #eee;
    }
    .error {
      background: #409EFF;
      border: 1px solid #409EFF;
    }
  }
</style>    