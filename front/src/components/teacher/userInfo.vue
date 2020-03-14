<template>
  <div class="userInfo">
       <el-avatar size='large' src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
       <div class="info">
           <span>用户名： {{userInfo.username}}</span>
           <span>角色： {{userInfo.role ? '教师' : '学生'}}</span>
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

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.userInfo {
    padding: 50px 0 0 0;
    // border: 1px solid #eee;
    height: 200px;
    box-sizing: border-box;
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
