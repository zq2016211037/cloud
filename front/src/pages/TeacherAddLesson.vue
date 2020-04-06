<template>
  <div class="lesson">
    <userInfo/>
    <el-form ref="form" :model="form" class='addLesson' label-width="80px">
      <el-form-item label="课程名称">
        <el-input v-model="form.lesson_title"></el-input>
      </el-form-item>
      <el-form-item label="课堂名称">
        <el-input v-model="form.university"></el-input>
      </el-form-item>
      <el-form-item label="内容封面">
        <el-input v-model="form.pic"></el-input>
      </el-form-item>
      <!-- <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </!-->
      <el-form-item label="价格">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="老师">
          <el-input v-model="form.teacher"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addLesson">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import userInfo from '@/components/teacher/userInfo'
import { getLessons, createLesson } from '@/api/home'
export default {
  data () {
    return {
      form: {
        lesson_title: '',
        university: '',
        pic: '',
        price: '',
        teacher: ''
      },
      user: {}
    }
  },
  mounted () {
    this.getWebLessons()
    this.user = JSON.parse(sessionStorage.getItem('userInfo'))
  },
  methods: {
    getWebLessons () {
      getLessons().then(res => {
        console.log(res)
        this.lessons = res
      })
    },
    addLesson () {
      createLesson({
        ...this.form,
        teacher_id: this.user._id
      }).then(res => {
        if (res.code === 0) {
          this.$message({
            message: res.message,
            type: 'success'
          })
          this.$router.push({
            path: '/teacher/lesson'
          })
        }
      })
    }

  },
  components: {
    userInfo
  }
}
</script>

<style scoped lang="less">
.lesson {
    padding: 50px 10%;
}
</style>
