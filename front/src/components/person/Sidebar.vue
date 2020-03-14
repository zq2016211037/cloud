<template>
  <div class="sidebar">
      <ul class="task-menu">
          <li class="task-menu-item">课程表</li>
          <li class="task-menu-item">任务习题</li>
          <li class="task-menu-item">下载</li>
          <li class="task-menu-item">我的提问</li>
          <li class="task-menu-item">消息</li>
      </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sidebar{
  height: fit-content;
    background: #fff;
    .task-menu{
        width: 220px;
        list-style: none;
        text-align: left;
        border: 2px solid #f2f2f2;
        .task-menu-item{
            position: relative;
            width: 100%;
            padding-left: 30px;
            line-height: 42px;
            color: #aaa;
            &:hover{
                cursor: pointer;
                border-left: 4px solid #23b8ff;
                left: -4px;
            }
        }
    }
}
</style>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
