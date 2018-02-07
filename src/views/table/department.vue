<template>
  <div>
    <template>
      <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{prop: 'num', order: 'descending'}">
        <el-table-column prop="name" label="部门名称" width="180">
        </el-table-column>
        <el-table-column prop="num" label="数量" sortable width="180">
        </el-table-column>
        <el-table-column prop="finish_num" label="完成量" sortable width="180">
        </el-table-column>
        <el-table-column prop="percent" label="完成率" sortable width="180">
        </el-table-column>
        <el-table-column prop="average" label="人均" sortable="" :formatter="formatter">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {
        tableData: [{
          name: '王小虎',
          num: '10',
          finish_num: '20',
          percent: '20%',
          average: 20
        }, {
          name: '王小虎1',
          num: '103',
          finish_num: '4',
          percent: '21%',
          average: 10
        }, {
          name: '王小虎0',
          num: '5',
          finish_num: '41',
          percent: '28%',
          average: 201
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.average
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
</style>