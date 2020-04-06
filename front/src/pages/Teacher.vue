<template>
  <div class="teacher">
    <UserInfo/>
    <h2 class="title">search out</h2>
    <el-input
        placeholder="请输入你想搜索的内容"
        suffix-icon="el-icon-search"
        v-model="searchValue"
        style='width: 600px'>
    </el-input>
    <div class="link">
        <router-link to='/teacher/livingRoom'><i class="el-icon-video-camera-solid"></i></router-link>
        <router-link to='/teacher/lesson'><i class="el-icon-s-comment"></i></router-link>
        <i class="el-icon-date"></i>
        <i class="el-icon-notebook-1"></i>
        <i class="el-icon-user"></i>
        <i class="el-icon-date"></i>
        <i class="el-icon-collection"></i>
        <i class="el-icon-plus"></i>
    </div>
    <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import LessonItem from '@/components/home/LessonItem'
import Living from '@/components/home/Living'
import UserInfo from '@/components/teacher/userinfo'
import {getLessons} from '@/api/home'
export default {
  data () {
    return {
      lessons: [],
      activeName: 'second',
      searchValue: ''
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
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    'h-header': Header,
    'h-LessonItem': LessonItem,
    'h-Living': Living,
    UserInfo
  }
}
</script>

<style scoped lang="less">
.teacher{
    .title {
        margin: 40px auto;
        font-size: 48px;
        background: linear-gradient(to right, red, blue);
        -webkit-background-clip: text;
        color: transparent;
    }
    .link{
        width: 600px;
        margin: 20px auto;
        text-align: left;
      i{
        font-size: 48px;
        padding: 20px;
        border-radius: 44px;
        margin: 20px;
        &:hover{
            cursor: pointer;
            background: #f9f9f9;
        }
      }
    }
}
</style>
