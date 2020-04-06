<template>
  <div class="lesson">
    <userInfo/>
    <el-tabs class="tabPane" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程列表" name="first">
        <div class="content">
          <div class="profession">
            <h-LessonItem v-for="item in lessons" :key="item._id" :lessonObj = "item"/>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="添加课程" name="second">
         <el-form ref="form" :model="form" class='addLesson' label-width="80px" :rules='rules'>
      <el-form-item label="课堂名称" prop='university'>
        <el-input v-model="form.university"></el-input>
      </el-form-item>
      <el-form-item label="内容封面" prop='pic'>
        <el-input v-model="form.pic"></el-input>
      </el-form-item>
      <!-- <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </!-->
      <el-form-item label="价格" prop='price'>
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="老师" prop='teacher'>
          <el-input v-model="form.teacher"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addLesson">立即创建</el-button>
      </el-form-item>
    </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import userInfo from '@/components/teacher/userInfo'
import LessonItem from '@/components/home/LessonItem'
import Living from '@/components/home/Living'
import {getLessons, createLesson} from '@/api/home'
export default {
  data () {
    return {
      activeName: 'first',
      lessons: [],
      form: {
        lesson_title: '',
        university: '',
        pic: '',
        price: '',
        teacher: ''
      },
      user: {},
      rules: {
        lesson_title: [
          { required: true, message: '请输入课程名称', trigger: 'blur' }
        ],
        university: [
          { required: true, message: '请你的组织', trigger: 'blur' }
        ],
        pic: [
          { required: true, message: '请选择封面图', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请制定价格', trigger: 'blur' }
        ]

      }
    }
  },
  mounted () {
    this.getWebLessons()
    this.user = JSON.parse(sessionStorage.getItem('userInfo'))
  },
  methods: {
    getWebLessons () {
      getLessons().then(res => {
        this.lessons = res
      })
    },
    addLesson () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })

      createLesson({
        ...this.form,
        teacher_id: this.user._id
      }).then(res => {
        if (res.code === 0) {
          this.$message({
            message: res.message,
            type: 'success'
          })
        }
      })
    },
    handleClick (tab, event) {
      console.log(tab, event)
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
  .tabPane{
    margin: 0 10%;
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
  .addLesson {
    width: 500px;
    margin-top: 20px;
  }
}
</style>
