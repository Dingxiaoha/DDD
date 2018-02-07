<template>
  <div class="main">
    <div class="tab">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="部门排名" name="first">
            <department></department>
          </el-tab-pane>
          <el-tab-pane label="员工排名" name="second">
            <personnel></personnel>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>

</template>

<script>
  import Department from './department'
  import Personnel from './personnel'
  export default {
    name: '',
    components: {
      Department,
      Personnel
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }],
        activeName: 'first'
      }
    },
    methods: {
      formatter(row, column) {
        return row.address
      },
      filterTag(value, row) {
        return row.tag === value
      }
    }
  }
</script>

<style scoped lang="scss">
  .main {
    width: 70%;
    margin: 0 auto;
  }

  .tab {
    width: 100%;
    position: relative;
    margin: 20px 0;
    display: table;
    .tab-li {
      width: 50%;
      float: left;
      padding-bottom: 20px;
      span {
        font-size: 16px;
      }
    }
    .slide {
      position: absolute;
      bottom: 0;
      width: 100px;
      height: 2px;
      background: #409EFF ;
      animation: forwards;
      -webkit-animation: myfirst 5s; /* Safari and Chrome */
    }
    @keyframes myfirst {
      0% {
        left: 0px;
        top: 0px;
      }
      25% {
        left: 200px;
        top: 0px;
      }
    }

  }
</style>