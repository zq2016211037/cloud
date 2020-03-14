<template>
    <div class="task-lesson-progress">
        <h2>进度</h2>
        <div class="progresses">
            <div class="progressWrapper" v-for="item in lessonProgressArr" :key="item.id">
                    <p class="task-name">{{item.name}}</p>
                    <p class="task-progress">
                        <el-progress :percentage="item.progress"></el-progress>
                    </p>
            </div>
        </div>
        <h2>当前任务</h2>
        <div class="exercisesWrapper">
            <ul class="exercises">
                <li class="exercise-item" v-for="item in taskProgressArr" :key="item.id">
                    <el-progress type="circle" :percentage="item.taskProgress" :width="40" :height="40" :stroke-width="3"></el-progress>
                    <p class="info">{{item.taskName}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.task-lesson-progress{
    text-align: left;
    margin-left: 20px;
    h2{
        line-height: 42px;
    }
    .progresses{
        display: flex;
        .progressWrapper{
            position: relative;
            text-align: left;
            width: 33.3%;
            background: #fff;
            margin-right: 10px;
            .task-name{
                padding: 20px 10px;
                line-height: 28px;
                font-size: 17px;
            }
            .task-progress{
                line-height: 24px;
                padding-bottom: 20px;
                /deep/ .el-progress{
                    position: absolute;
                    width: 100%;
                    left: 10px;
                    bottom: 10px;
                }
            }
        }
    }
    .exercisesWrapper{
        background: #fff;
        .exercises{
            list-style: none;
            padding-left: 10px;
            .exercise-item{
                display: flex;
                padding: 5px 10px 5px 10px;
                border-bottom: 1px solid #f4f4f4;
                .info{
                    line-height: 40px;
                    padding-left: 20px;
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
    }
  },
  props: {
    lessonProgressArr: {
      default () {
        return [{
          'name': '如何轻松搞定Node.js 进阶全栈工程师必备高薪技能',
          'progress': 20
        }, {
          'name': '视频云直播系统架构与最佳实践',
          'progress': 30
        }]
      },
      type: Array
    },
    taskProgressArr: {
      default () {
        return [{
          'taskName': '如何轻松搞定Node.js 进阶全栈工程师必备高薪技能',
          'taskProgress': 20
        }, {
          'taskName': '视频云直播系统架构与最佳实践',
          'taskProgress': 30
        }]
      },
      type: Array
    }
  }
}
</script>
