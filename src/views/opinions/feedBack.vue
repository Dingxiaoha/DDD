<template>
<div class="main">
  <div class="top">
    <div class="fl title">意见类型</div>
    <div class="choose fl">
      <el-radio-group v-model="chooseType" size="medium">
        <el-radio-button label="故障"></el-radio-button>
        <el-radio-button label="建议"></el-radio-button>
        <el-radio-button label="咨询"></el-radio-button>
        <el-radio-button label="其它"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
  <div>
    <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="请输入您的意见..."
        v-model="content">
    </el-input>
  </div>
  <div class="tid">
    <span>联系方式</span>
    <span class="special">（可选填或不填）</span>
  </div>
  <div class="title-icon">
    <svg-icon icon-class="phone"/>
    <el-input v-model="phone" placeholder="请输入手机号码" class="title-con"></el-input>
  </div>
  <div class="title-icon">
    <svg-icon icon-class="pp"/>
    <el-input v-model="qq" placeholder="请输入QQ号码" class="title-con"></el-input>
  </div>
  <div class="submit">
    <el-button type="primary" round>提交</el-button>
  </div>
  <div class="contact"><svg-icon icon-class="moblie"/> 客服热线：400-120-5620</div>
</div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        chooseType: '',
        content: '',
        phone: '',
        qq: ''
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
  .top{
    width: 100%;
    display: table;
    margin: 20px 0;
    .title{
      width: 15%;
      min-width: 70px;
      color: #4d4d4d;
      font-size: 15px;
      height: 36px;
      line-height: 36px;
    }
    .choose{
      width: 85%;
    }
  }
  .title-icon{
    width: 100%;
    display: table;
    margin: 20px 0;
    .svg-icon{
      width: 30px;
      height: 30px;
      float: left;
      margin-right: 10px;
    }
    .title-con{
      width: 300px;
      float: left;
    }
  }
  .tid{
    margin: 20px 0;
    span{
      font-size: 15px;
      color: #4d4d4d;
    }
    .special{
      font-size: 12px;
    }
  }
  .submit{
    text-align: center;
    width: 100%;
    margin: 20px 0;
  }
  .contact{
    text-align: center;
    width: 100%;
    margin: 20px 0;
    color: #409EFF;
    font-size: 14px;
  }
</style>    