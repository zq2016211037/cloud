<template>
  <div class="living">
      <h2 class="head">云课堂</h2>
      <div class="con">
          <i class="el-icon-video-camera"></i>
          <el-button class="startLesson" type="primary">开始上课</el-button>
          <div class="foot">
              <p>
                  <el-link type="primary">点击查看</el-link>直播间使用教程
              </p>
              <p>联系客服<el-link type="primary">QQ232343434</el-link>查看更多功能</p>
          </div>
      </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.living{
    height: 100%;
    padding: 10px 10%;
    text-align: left;
    background: #f6f6f6;
    h2{
        background: #fff;
        margin: 10px 0;
    }
    .con{
        position: relative;
        background: #fff;
        height: calc(100% - 44px);
        i{
            display: inline-block;
            width: 100%;
            margin-top: 120px;
            font-size: 120px;
            text-align: center;
        }
        .startLesson{
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
        .foot{
            position: absolute;
            width: 100%;
            bottom: 200px;
            text-align: center;
            p{
                font-size: 13px;
                line-height: 28px;
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
