<template>
  <div class="home">
    <h-header/>
    <div class="content">
      <h2>精选直播课</h2>
      <h-Living/>
      <h2>精选专业课</h2>
      <div class="profession">
        <h-LessonItem v-for="item in lessons" :key="item._id" :lessonObj = "item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
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
    }
  },
  components: {
    'h-header': Header,
    'h-LessonItem': LessonItem,
    'h-Living': Living
  }
}
</script>

<style scoped lang="less">
.home{
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
