<template>
  <div class="pagination">
    <button>上一页</button>
    <button v-if="startPageAndEndPage.start !== 1">1</button>
    <button v-if="startPageAndEndPage.start > 2">···</button>

    <template v-for="(n, index) in startPageAndEndPage.end">
      <button :key="index" v-if="n >= startPageAndEndPage.start">{{ n }}</button>
    </template>

    <button v-if="startPageAndEndPage.end < totalPage - 1">···</button>
    <button v-if="startPageAndEndPage.end < totalPage">{{ totalPage }}</button>
    <button>下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
    <h1>{{ startPageAndEndPage }} 当前页码{{ pageNow }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: ['pageNow', 'pageSize', 'total', 'continues'],
    computed: {
      totalPage() {
        return Math.ceil(this.total / this.pageSize)
      },
      startPageAndEndPage() {
        const { pageNow, pageSize, totalPage, continues } = this
        // 注意total是总条数
        // 初始化开始页码和结束页码
        let start = 0,
          end = 0
        if (totalPage < continues) {
          start = 1
          end = totalPage
        } else {
          start = pageNow - parseInt(continues / 2)
          end = pageNow + parseInt(continues / 2)

          // 若当前页码靠前，start小于1
          if (start < 1) {
            start = 1
            end = continues
          }
          // 若当前页码靠后，end大于total
          if (end > totalPage) {
            end = totalPage
            start = totalPage - continues + 1
          }
        }
        return { start, end }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
