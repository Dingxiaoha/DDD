<template>
  <div class="main-advice">
    <div class="advice-tit">
      <el-input
          placeholder="请输入建议主题"
          v-model="advice_tit"
          clearable>
      </el-input>
    </div>
    <div class="advice-con">
      <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入建议详情"
          v-model="advice_con">
      </el-input>
    </div>
    <div class="before">
      <div class="tit">改善前</div>
      <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="list">
      <div class="department">部门：</div>
      <template>
        <el-select v-model="valueOne" clearable placeholder="请选择部门">
          <el-option
              v-for="item in optionOne"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </template>
    </div>
    <div class="list">
      <div class="department">区域：</div>
      <template>
        <el-select v-model="valueTwo" clearable placeholder="请选择区域">
          <el-option
              v-for="item in optionTwo"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </template>
    </div>
    <div class="list">
      <div class="department">分类：</div>
      <template>
        <el-select v-model="valueThree" clearable placeholder="请选择分类">
          <el-option
              v-for="item in optionThree"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </template>
    </div>
    <div class="submit">
      <el-button type="primary" round>主要按钮</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        optionOne: [{
          value: '选项1',
          label: '运营部'
        }, {
          value: '选项2',
          label: '技术部'
        }, {
          value: '选项3',
          label: '维修部'
        }, {
          value: '选项4',
          label: '制造部'
        }],
        optionTwo: [{
          value: '选项1',
          label: '实验室A'
        }, {
          value: '选项2',
          label: '实验室B'
        }, {
          value: '选项3',
          label: '实验室C'
        }],
        optionThree: [{
          value: '选项1',
          label: '新功能测试'
        }, {
          value: '选项2',
          label: '3级条件'
        }, {
          value: '选项3',
          label: '3级评分测试'
        }],
        valueOne: '',
        valueTwo: '',
        valueThree: '',
        advice_tit: '',
        advice_con: '',
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .main-advice {
    width: 100%;
    .advice-tit{
      width: 50%;
      margin: 20px auto;
    }
    .advice-con{
      width: 50%;
      margin: 0 auto;
    }
    .before{
      .tit{
        color: #606266;
        font-size: 15px;
        padding-left: 15px;
        border-left: red solid 8px;
        margin-bottom: 20px;
      }
      width: 50%;
      margin: 20px auto;
    }
    .list {
      width: 50%;
      margin: 20px auto;
      .department {
        width: 80px;
        float: left;
        height: 36px;
        line-height: 36px;
        color: #606266;
        font-size: 14px;
      }
    }
    .submit{
      width: 50%;
      margin: 40px auto;
      text-align: center;
      button{
        width: 200px;
        border: none;
        background-color: #42b983;
        color: #fff;
        border-radius: 10px;
        outline: none;
        cursor: pointer;
      }
    }
  }
</style>