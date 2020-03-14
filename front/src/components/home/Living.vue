<template>
  <div class="living">
      <div class="livingRoom">
          <img :src="livingObj.pic" alt="">
          <div class="mask"></div>
          <div class="info">
            <p class="title">{{livingObj.lesson_title}} </p>
            <p class="startTime">{{livingObj.living_time}}</p>
            <el-button type="primary" class="start"> <router-link to='/living'>立即开始</router-link></el-button>
            <p class="details">
                <span class="teacher">{{livingObj.teacher}}</span>
                <span class="chapter">{{livingObj.chapter}}</span>
            </p>
          </div>
      </div>
      <div class="timeline">
          <div class="time-axis"></div>
          <ul class="timeline-content">
              <li class="task-item" v-for="item in timeline" :key="item._id" @click="changeCurLiving(item._id);">
                  <div class="item-wrap">
                      <span class="item-time">{{item.living_time}}</span>
                      <span class="item-info">{{item.lesson_title}}</span>
                  </div>
                  <div class="item-point"></div>
              </li>
          </ul>
      </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.living{
    position: relative;
    display: flex;
    justify-content: space-between;
    .livingRoom{
        width: 50%;
        min-height: 280px;
        img{
            width: 100%;
            height: 100%;
        }
        .mask{
            position: absolute;
            width: 50%;
            height: 100%;
            top: 0;
            left: 0;
            background: #000;
            opacity: .7;
        }
        .info{
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            // padding-top: 20px;
            p{
                color: #fff;
                line-height: 48px;
                font-weight: 900;
            }
            .title{
                margin-top: 50px;
            }
            .start{
                width: 200px;
                margin: 10px auto;
            }
            .details{
                position: absolute;
                bottom: 0;
                font-weight: normal;
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 0 5px;
                box-sizing: border-box;
                .teacher{
                    padding: 0 20px 0 10px;
                    word-wrap: none;
                    white-space: nowrap;
                }
                .chapter{
                    max-width: 90%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
    .timeline{
        position: relative;
        width: 50%;
        background: #f2f2f2;
        .time-axis{
            position: absolute;
            height: 100%;
            border-right: 2px dotted #bbb;
            left: 24px;
            z-index: 1;
        }
        .timeline-content{
            list-style: none;
            color: #bbb;
            font-size: 17px;
            margin: 0;
            padding: 0;
            .task-item{
                line-height: 42px;
                text-align: left;
                &:hover{
                    width: 100%;
                    position: relative;
                    background: #fff;
                    color: #23b8ff;
                    border-left: 4px solid #23b8ff;
                    left: -4px;
                    padding-right: 4px;
                    cursor: pointer;
                }
                .item-wrap{
                    padding-left: 40px;
                    .item-time{
                        margin-right: 10px;
                    }
                    .item-info{
                        white-space: nowrap;
                        max-width: 70%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
                .item-point{
                    position: relative;
                    left: 21px;
                    bottom: 25px;
                    width: 8px;
                    height: 8px;
                    background: #bbb;
                    border-radius: 4px;
                }
            }
        }
    }
}
</style>

<script>
import {getLiving, getTimeline} from '@/api/home.js'
export default {
  props: {
  },
  data () {
    return {
      livingObj: {
        pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCMvtO9vNM1TkNFPEPSGA92dV3oVAyPTJJGYVaeVkmaeZy3y3ibXXSCHFalmPFkn0es/510',
        lesson_title: 'CSS权重及元素类型',
        chapter: 'Web前端H5/JS/javascript/ES6/vue/react/webpack/node|启道学院',
        startTime: '2020/02/02',
        teacher: ' 软谋-Laney老师',
        living_time: '2020/02/02'
      },
      curLivingId: '5e44e6cff8f56207e62a553d',
      timeline: []
    }
  },
  mounted () {
    this.getTimelineData()
  },
  methods: {
    getTimelineData () {
      console.log('fdkflskl')
      getTimeline().then(res => {
        console.log(res)
        this.timeline = res
      }).catch((err) => {
        this.$message.error(err)
      })
    },
    changeCurLiving (curLivingId) {
      this.curLivingId = curLivingId
      getLiving({
        _id: this.curLivingId
      }).then(res => {
        this.livingObj = res ? res[0] : []
      })
    }
  }
}
</script>
