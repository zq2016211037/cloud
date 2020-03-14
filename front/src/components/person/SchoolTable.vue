<template>
  <div class="schoolTable">
      <h2 class="schoolTable-title">课程表</h2>
      <div class="duration">
          <div class="duration-today duration-item">
              <p class="info">今天上课</p>
              <p class="info">分钟</p>
          </div>
          <div class="duration-total duration-item">
              <p class="info">总时长</p>
              <p class="info">分</p>
          </div>
          <div class="duration-total duration-item">
              <p class="info">总时长</p>
              <p class="info">分</p>
          </div>
      </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.schoolTable{
    // background: #fff;
    padding: 0 20px;
    &-title{
        text-align: left;
        line-height: 42px;
    }
    .duration{
        display: flex;
        padding: 15px 0 15px 0;
        font-size: 20px;
        border-top: 1px solid #f2f2f2;
        background: #fff;
        .duration-item{
            padding: 0 110px;
            border-right: 2px solid #eee;
            .info{
                line-height: 48px;
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
