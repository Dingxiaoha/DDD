<template>
  <div class="list-menu">
    <div class="head">
      <div class="picture">
        <img src="static/images/header.jpg" alt="">
      </div>
      <div class="name">
        <div class="list-title">aaa{{user_name}}</div>
        <div class="list-theme">建议主题：aaa{{user_theme}}</div>
      </div>
      <div class="date">11{{date}}&nbsp;来自22{{from}}</div>
    </div>
    <step-progress></step-progress>
    <div>pp{{con}}</div>
    <div class="pic-list">
      <div class="before fl">
        <div class="mark">
          <img src="static/images/before.png" alt="">
        </div>
        <img src="static/images/header.jpg" alt="">
      </div>
      <div class="after fl">
        <div class="mark">
          <img src="static/images/after.png" alt="">
        </div>
        <img src="static/images/header.jpg" alt="">
      </div>
    </div>
    <div class="foot">
      <div class="see-count">浏览{{sum}}1次</div>
      <div class="total">
        <div class="zan">
          <svg-icon icon-class="bb"/>
          <span>0</span></div>
        <div class="zan" @click="toView">
          <svg-icon icon-class="view"/>
          <span>0</span></div>
        <div class="zan">
          <svg-icon icon-class="collect"/>
          <span>0</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import StepProgress from '../../components/step/_progress'
  export default {
    name: '',
    components: {
      StepProgress
    },
    props: {
      user_name: {
        type: String
      },
      user_theme: {
        type: String
      },
      date: {
        type: String
      },
      from: {
        type: String
      },
      con: {
        type: String
      },
      sum: {
        type: Number
      }
    },
    data() {
      return {}
    },
    methods: {
      toView() {
        this.$router.push({
          path: '/advice_details',
          name: 'advice_details'
        })
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  .list-menu {
    width: 70%;
    margin: 0 auto;
    .head {
      width: 100%;
      display: table;
      .picture {
        width: 20%;
        height: 80px;
        min-width: 80px;
        max-width: 125px;
        text-align: left;
        float: left;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50px;
        }
      }
      .name {
        float: left;
        width: 50%;
        position: relative;
        height: 80px;
        .list-title {
          font-size: 20px;
          color: #4d4d4d;
          top: 8px;
          position: absolute;
        }
        .list-theme {
          font-size: 14px;
          color: #4d4d4d;
          position: absolute;
          bottom: 10px;
        }
      }
      .date {
        width: 30%;
        float: left;
        color: #4d4d4d;
        font-size: 14px;
        text-align: right;
        line-height: 80px;
      }
    }
    .pic-list {
      margin: 20px auto;
      width: 100%;
      display: table;
      > div {
        position: relative;
        width: 33%;
        max-width: 185px;
      }
      .mark {
        position: absolute;
        top: 0;
        width: 90%;
        max-width: 107px;
        img {
          width: 100%;
          height: 66px;
        }
      }
      img {
        width: 90%;
        height: 185px;
      }
    }
    .foot {
      width: 100%;
      margin: 20px 0;
      display: table;
      padding-bottom: 10px;
      border-bottom: 1px solid #e0e0e0;
    }
    .see-count {
      color: #6f7180;
      font-size: 13px;
      text-align: left;
      width: 20%;
      float: left;
    }
    .total {
      width: 28%;
      float: right;
      > div {
        width: 33%;
        float: left;
        text-align: center;
      }
      span {
        margin-left: 5px;
        color: #4d4d4d;
        font-size: 14px;
      }
    }
  }
</style>    