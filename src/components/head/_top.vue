<template>
  <div class="top">
    <template>
      <el-select v-model="valueOne" clearable placeholder="状态">
        <el-option
            v-for="item in optionsOne"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </template>
    <template>
      <el-select v-model="valueTwo" clearable placeholder="部门">
        <el-option
            v-for="item in optionsTwo"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </template>
    <template>
      <el-select v-model="valueThree" clearable placeholder="区域">
        <el-option
            v-for="item in optionsThree"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </template>
    <template>
      <el-date-picker
          v-model="valueFour"
          type="month"
          placeholder="月份">
      </el-date-picker>
    </template>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        optionsOne: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '发起'
        }, {
          value: '选项3',
          label: '审核'
        }, {
          value: '选项4',
          label: '指派'
        }, {
          value: '选项5',
          label: '处理'
        }, {
          value: '选项6',
          label: '评分'
        }, {
          value: '选项7',
          label: '完成'
        }],
        optionsTwo: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '运营部'
        }, {
          value: '选项3',
          label: '技术部'
        }, {
          value: '选项4',
          label: '维修部'
        }, {
          value: '选项5',
          label: '制造部'
        }],
        optionsThree: [{
          value: '选项1',
          label: '全部'
        }],
        valueOne: '',
        valueTwo: '',
        valueThree: '',
        valueFour: ''
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  .top{
    width: 90%;
    margin: 20px auto 0 auto;
    text-align: center;
    .el-select{
      margin-bottom: 20px;
    }
  }
</style>    