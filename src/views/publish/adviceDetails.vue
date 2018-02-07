<template>
  <div class="list-menu">
    <div class="head">
      <div class="picture">
        <img src="static/images/header.jpg" alt="">
      </div>
      <div class="name">
        <div class="a-title">aaa{{user_name}}</div>
        <div class="a-theme">建议主题：aaa{{user_theme}}
        </div>
      </div>
      <div class="date">
        <div class="list-title">2014-02-14{{date}}&nbsp;来自技术部{{from}}</div>
        <div class="a-theme"><el-button size="mini" round @click="toStep">查看流程</el-button></div>
      </div>
    </div>
    <div>pp{{con}}</div>
    <improve-picture></improve-picture>
    <div class="foot">
      <div class="see-count">浏览{{sum}}1次</div>
      <div class="total">
        <div class="zan">
          <svg-icon icon-class="bb"/>
          <span>0</span>
        </div>
        <div class="zan" @click="showView">
          <svg-icon icon-class="view"/>
          <span>0</span>
        </div>
        <div class="zan">
          <svg-icon icon-class="collect"/>
          <span>0</span>
        </div>
      </div>
    </div>
    <templt v-if="isShow">
      <div class="publish">
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入评论..."
            v-model="publish_view">
        </el-input>
        <div style="margin-top: 20px">
          <el-button size="mini" round>发表</el-button>
          <!--<el-button size="mini" round @click="cancleView">取消</el-button>-->
        </div>
      </div>
      <div class="view-list">
        <div class="header-img">
          <img src="static/images/header.jpg" alt="">
        </div>
        <div class="you">
          <div>
            <div class="list-title">aaa{{user_name}}</div>
            <div class="back">
              <svg-icon icon-class="view"/>
              <span>回复</span>
            </div>
          </div>
          <div class="view-con"><p>就是打开返回说的话就粉红色大姐夫换手机就是打开返回说的话就粉红色大姐夫换手机就是打开返回说的话就粉红色大姐夫换手机就是打开返回说的话就粉红色大姐夫换手机</p></div>
          <div class="come-from">
            <div>time</div>
            <div>来自技术部</div>
          </div>
        </div>
      </div>
      <div class="view-list">
        <div class="header-img">
          <img src="static/images/header.jpg" alt="">
        </div>
        <div class="you">
          <div>
            <div class="list-title">aaa{{user_name}}</div>
            <div class="back">
              <svg-icon icon-class="view"/>
              <span>回复</span>
            </div>
          </div>
          <div class="view-con"><p>就是打开返回说的话就粉红色大姐夫换手机就是打开返回说的话就粉红色大姐夫换手机就是打开返回说的话就粉红色大姐夫换手机就是打开返回说的话就粉红色大姐夫换手机</p></div>
          <div class="come-from">
            <div>time</div>
            <div>来自技术部</div>
          </div>
        </div>
      </div>
    </templt>
  </div>
</template>
<script>
  import ImprovePicture from '../../components/picture/_improve'
  export default {
    name: '',
    components: {
      ImprovePicture
    },
    data() {
      return {
        user_name: '',
        user_theme: '',
        date: '',
        from: '',
        con: '',
        sum: '',
        publish_view: '',
        isShow: false
      }
    },
    methods: {
      showView() {
        this.isShow = true
      },
      cancleView() {
        this.isShow = false
        this.publish_view = ''
      },
      toStep() {
        this.$router.push({
          name: 'stepDetail'
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
      margin: 20px 0;
    }
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
        border-radius: 50%;
      }
    }
    .name {
      float: left;
      width: 50%;
      position: relative;
      height: 80px;
    }
    .a-title {
      font-size: 20px;
      color: #4d4d4d;
      top: 8px;
      position: absolute;
    }
    .a-theme {
      font-size: 14px;
      color: #4d4d4d;
      position: absolute;
      bottom: 10px;
    }
    .date {
      position: relative;
      width: 30%;
      float: left;
      text-align: right;
      height: 80px;
      >div{
        text-align: right;
        width: 100%;
      }
      .list-title{
        color: #4d4d4d;
        font-size: 14px;
      }
    }

    .foot {
      width: 100%;
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
      >div{
        width: 100%;
        display: table;
      }
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
      .back {
        float: right;
        width: 20%;
        text-align: right;
        line-height: 80px;
        color: #4d4d4d;
        span{
          font-size: 14px;
        }
      }
      .view-con{
        color: #4d4d4d;
        font-size: 14px;
        padding-bottom: 5px;
        p{
          margin: 0;
          line-height: 20px;
        }
      }
      .come-from{
        width: 100%;
        display: table;
        color: #999;
        font-size: 14px;
        border-bottom: 1px solid #e0e0e0;
        >div{
          float: left;
          margin: 10px 20px 10px 0;
        }
      }
    }
    .publish{
      margin: 20px 0;
    }
  }
</style>    