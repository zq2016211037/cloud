<template>
  <div class="lessonDetail">
    <userInfo v-if="user.role"/>
    <div class="addClass" v-if="!user.role">
      <el-button type='primary' @click="backHome">返回首页</el-button>
      <el-button @click="pickLesson" v-if="!added">添加课程</el-button>
      <el-button type='warning' v-else>已添加</el-button>
    </div>
     <el-tabs class="tabpane" v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="章节目录" name="first">
      <el-form class="form" v-if="user.role" :model="newChapter" :visible='visible' :inline='isInline'>
        <el-form-item label='章数'>
             <el-input-number v-model="newChapter.chapter_number" @change="handleChangeChapter" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label='节数'>
             <el-input-number v-model="newChapter.section_number" @change="handleChangeSection" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-form-item>

        <el-form-item label='章节内容'>
            <el-input type='text' v-model='newChapter.chapter_name'></el-input>
        </el-form-item>
        <el-form-item label='小节内容'>
            <el-input type='text' v-model='newChapter.section_name'></el-input>
        </el-form-item>
        <el-form-item label='视频'>
            <el-input type='text' v-model='newChapter.video'></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="addChapter" type='primary'>新增章节</el-button>
        </el-form-item>
    </el-form>
    <div class="chapters">
        <div class="chapter-item" v-for="(chapter, index) in chapters" :key="chapter._id">
            <h2 class="title">{{index + 1}} {{chapter.chapter_name}}</h2>
            <p class="section" v-for="section in chapter.sections" :key="section.section_name" @click="getVideo(section.video)">
                <span class="icon">
                    <i class="el-icon-video-camera"></i>
                </span>
                <span>{{section.section_name}}</span>
            </p>
        </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="选课学生管理" name="second" v-if="user.role">
          <el-table
            border
            :data="studentList"
            style="width: 50%; margin: 0 auto">
            <el-table-column
              prop="username"
              label="学生昵称">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import userInfo from '@/components/teacher/userInfo'
import { getChapters, createChapter, getStudents, deleteStudent, createStudent } from '@/api/home'
export default {
  data () {
    return {
      user: {},
      lesson_id: '',
      chapters: [],
      newChapter: {
        lesson_id: '',
        chapter_name: '',
        section_name: '',
        chapter_number: 0,
        section_number: 0,
        video: '',
        timeLong: '',
        teacher: '',
        teacher_id: ''
      },
      isInline: true,
      visible: false,
      activeName: 'first',
      added: false,
      studentList: []
    }
  },
  async mounted () {
    this.user = JSON.parse(sessionStorage.getItem('userInfo'))
    console.log(this.$route, this.user)
    this.lesson_id = this.$route.params.lesson_id
    await this.getChapterLists()
    await this.getStudentLists()
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleChangeChapter (value) {
      this.newChapter.chapter_number = value
    },
    handleChangeSection (value) {
      this.newChapter.section_number = value
    },
    getChapterLists () {
      const _this = this
      getChapters({
        lesson_id: this.lesson_id
      }).then(res => {
        if (res.code === 0) {
          _this.chapters = res.data
        }
      })
    },
    addChapter () {
      const {chapter_name, section_name, chapter_number, section_number, video} = this.newChapter
      createChapter({
        chapter_name,
        section_name,
        chapter_number: chapter_number - 1,
        section_number: section_number - 1,
        video: video,
        lesson_id: this.lesson_id
      }).then(res => {
        if (res.code === 0) {
          this.$message({
            message: '创建成功',
            type: 'success'
          })
          this.getChapterLists()
        }
      })
    },
    getStudentLists () {
      const _this = this
      getStudents({
        lesson_id: this.lesson_id
      }).then(res => {
        _this.studentList = res.data
      })
      getStudents({
        lesson_id: this.lesson_id,
        student_id: this.user._id
      }).then(res => {
        console.log(res)
        _this.added = !!res.data.length
      })
    },
    getVideo (url) {
      console.log(url)
      this.$router.push({
        path: '/living',
        query: url
      })
    },
    pickLesson () {
      createStudent({
        lesson_id: this.lesson_id,
        student_id: this.user._id
      }).then(res => {
        this.$message.success(res.message)
      })
    },
    backHome () {
      this.$router.push({
        path: '/'
      })
    }
  },
  computed: {
    // chapterLists () {
    //   return this.chapters
    // }
  },
  components: {
    userInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.lessonDetail {
    .addClass {
      display: flex;
      margin: 20px 10%;
    }
    .tabpane {
      margin: 10px 10%;
    }
    .form{
        margin: 20px auto;
        display: flex;
        flex-wrap: wrap;
    }
    .chapters {
        text-align: left;
        .chapter-item {
            .title{
                font-size: 20px;
                color: #000;
                font-weight: 700;
                margin: 15px 0;
            }
            .section{
                background: #f4f4f4;
                color: #333;
                padding: 10px 20px;
                margin: 5px auto;
                &:hover{
                    cursor: pointer;
                }
                .icon {
                    i {
                        color: #a3d2f8;
                        font-size: 20px;
                        padding: 0 10px;
                    }
                }
            }
        }
    }
}
</style>
