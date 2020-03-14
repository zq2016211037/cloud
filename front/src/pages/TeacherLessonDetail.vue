<template>
  <div class="lessonDetail">
    <el-form class="form" :model="newChapter" :visible='visible' :inline='isInline'>
        <el-form-item label='章数'>
             <el-input-number v-model="newChapter.chapter_number" @change="handleChangeChapter" :min="1" :max="10" label="描述文字"></el-input-number>
            <!-- <el-input type='text' v-model='newChapter.chapter_title'></el-input> -->
        </el-form-item>
        <el-form-item label='节数'>
             <el-input-number v-model="newChapter.section_number" @change="handleChangeSection" :min="1" :max="10" label="描述文字"></el-input-number>
            <!-- <el-input type='text' v-model='newChapter.chapter_title'></el-input> -->
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
             <p class="section" v-for="section in chapter.sections" :key="section.section_name">
                 <span class="icon">
                     <i class="el-icon-video-camera"></i>
                 </span>
                  <span>{{section.section_name}}</span>
             </p>
          </div>
      </div>
  </div>
</template>

<script>
import { getChapters, createChapter } from '@/api/home'
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
      visible: false
    }
  },
  async mounted () {
    this.user = JSON.parse(sessionStorage.getItem('userInfo'))
    console.log(this.$route)
    this.lesson_id = this.$route.params.lesson_id
    await this.getChapterLists()
  },
  methods: {
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
      const {chapter_name, section_name,  chapter_number, section_number, video} = this.newChapter
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
    }
  },
  computed: {
    // chapterLists () {
    //   return this.chapters
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.lessonDetail {
    .form{
        margin: 20px auto;
    }
    .chapters {
        margin: 0 10%;
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
