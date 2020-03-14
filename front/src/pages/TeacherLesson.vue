<template>
  <div class="lesson">
    <userInfo/>
    <h2 class="title">我的课程</h2>
    <div class="content">
      <div class="profession">
        <h-LessonItem v-for="item in lessons" :key="item._id" :lessonObj = "item"/>
      </div>
      <el-button @click="addLesson">添加课程</el-button>
    </div>
  </div>
</template>

<script>
import userInfo from '@/components/teacher/userInfo'
import LessonItem from '@/components/home/LessonItem'
import Living from '@/components/home/Living'
import {getLessons} from '@/api/home'
export default {
  data () {
    return {
      lessons: []
    }
  },
  mounted () {
    this.getWebLessons()
  },
  methods: {
    getWebLessons () {
      getLessons().then(res => {
        console.log(res)
        this.lessons = res
      })
    },
    addLesson () {
      console.log('添加课程')
      this.$router.push({
        path: '/teacher/addlesson'
      })
    }
  },
  components: {
    'userInfo': userInfo,
    'h-LessonItem': LessonItem,
    'h-Living': Living
  }
}
</script>

<style scoped lang="less">
.lesson{
    .title{
        text-align: left;
        margin: 10px 8%;
    }
  .content{
    margin: 0 8%;
    h2{
      height: 80px;
      line-height: 80px;
    }
    .profession{
      display: flex;
      flex-wrap: wrap;
      div{
        margin-right: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
