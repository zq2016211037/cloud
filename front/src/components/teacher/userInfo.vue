<template>
  <div class="userInfo">
        <div @click="backHome" class="avatar">
            <el-avatar size='large' src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
       <div class="info">
           <span>用户名： {{userInfo.username}}</span>
           <span>角色： {{userInfo.role ? '教师' : '学生'}}</span>
            <el-button @click="enterLiving" type='primary' size='small'>直播间</el-button>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    console.log(sessionStorage)
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    console.log(this.userInfo)
  },
  methods: {
    enterLiving () {
      this.$router.push({
        path: '/teacher/livingRoom'
      })
    },
    backHome () {
      this.$router.push({
        path: '/teacher'
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.userInfo {
    padding: 50px 0 0 0;
    // border: 1px solid #eee;
    // height: 200px;
    box-sizing: border-box;
    .avatar {
      cursor: pointer;
    }
    .info {
        font-size: 17px;
        color: #333;
        // background: ;
        span{
            display: inline-block;
            margin: 10px;
        }
    }
}
</style>
