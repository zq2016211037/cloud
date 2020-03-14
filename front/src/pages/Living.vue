<template>
  <div class="living">
      <div class="head">
          <div class="left"><i class="el-icon-arrow-left" @click="goback()"></i><span>{{weblesson.name}}</span><span>[{{weblesson.university}}]</span></div>
          <div class="right"><img :src="user.avata"/></div>
      </div>
      <div class="liveroom">
          <div class="left video">
              <video src="../../static/1.mp4" controls="controls">
                您的浏览器不支持 video 标签。
              </video>
          </div>
          <div class="right chat">
              <p class="tabs">
                  <span class="active">讨论</span>
                  <span>成员</span>
              </p>
              <div class="chatbox"></div>
              <div class="inputbox">
                  <div class="btns">
                      <i class="iconfont icon-biaoqing-xue"></i>
                      <i class="iconfont icon-biaoqingbao"></i>
                      <i class="iconfont icon-jiahaoyou"></i>
                      <i class="iconfont icon-songli"></i>
                  </div>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea"
                    class="chatcontent">
                 </el-input>
              </div>
          </div>
      </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.living{
    .head{
        display: flex;
        justify-content: space-between;
        height: 54px;
        line-height: 54px;
        padding: 0 20px;
        font-size: 13px;
        overflow: hidden;
        background: #1d1d1d;
        color: #aaa;
        .left{
            i{
                cursor: pointer;
            }
            span{
                padding: 0 8px;
            }
        }
        .right{
            img{
                width: 40px;
                height: 40px;
                border-radius: 20px;
                vertical-align: middle;
            }
        }
    }
    .liveroom{
        display: flex;
        .left{
            width: 80%;
            background: #1d1d1d;
            border: 1px solid #d2d2d2;
            video{
                width: 100%;
                height: calc(100vh - 54px);
                outline: none;
            }
        }
        .right{
            width: 30%;
            height: 100vh;
            background: #333;
            color: #ccc;
            .tabs{
                height: 32px;
                line-height: 32px;
                text-align: center;
                display: flex;
                border-bottom: 1px solid #2d2d2d;
                span{
                    display: inline-block;
                    width: 50%;
                }
                .active{
                    border-bottom: 3px solid #23b8ff;
                }
            }
            .chatbox{
                height: calc(100vh - 200px);
            }
            .inputbox{
                border-top: 1px solid #2d2d2d;
                padding: 0 5px;
                .btns{
                    text-align: left;
                    i{
                        padding: 5px;
                    }
                }
                .chatcontent /deep/ textarea{
                    background: #333 ! important;
                }
            }
        }
    }
}
</style>

<script>
export default {
  data () {
    return {
      weblesson: {
        name: 'css北景相关属性',
        university: '独一教育'
      },
      user: {
        avata: 'https://thirdqq.qlogo.cn/g?b=sdk&k=anvhgBmzFkYIgW3hJwKE4A&s=140&t=1569855457'
      },
      textarea: ''
    }
  },
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>
