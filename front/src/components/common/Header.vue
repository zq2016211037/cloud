<template>
  <div id="header">
      <div class="logo_name">
          <span class="logo"></span>
          <span class="name" @click="backHome">云课堂</span>
      </div>
      <div class="search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="searchWords">
          </el-input>
      </div>
      <div class="person">
        <el-dropdown @command="handleCommand" class="dropdown">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">我的课程</el-dropdown-item>
            <el-dropdown-item command="b">我的任务</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dialog
          title="注册"
          :visible.sync="registerVisible"
          width="500px"
          :rules='registerrules'>
          <el-form :model="registerForm" status-icon ref="registerForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" required v-model="registerForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="registerForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="dialog-bottom">
              <el-button type="primary" @click="register('registerForm')">注册</el-button>
              <el-button type="text" @click="registerVisible = false; loginVisible = true;">返回登陆</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <el-dialog
          title="登陆"
          :visible.sync="loginVisible"
          width="500px">
          <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" required v-model="loginForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="dialog-bottom">
              <el-button type="primary" @click="login('loginForm')">登陆</el-button>
              <div>
                  还没注册？<el-button type="text" @click="registerVisible = true; loginVisible = false;">免费注册</el-button>
              </div>
            </el-form-item>
            <!-- <div>
              还没注册？
              <el-button type="text" v-if="!user" @click="registerVisible = true; loginVisible = false;" style="color: #333;">免费注册</el-button>
            </div> -->
          </el-form>
        </el-dialog>
        <span><i class="el-icon-message-solid message"></i></span>
        <el-button type="text" v-if="!user" @click="loginVisible = true; registerVisible = false; role = 1" style="color: #f57d35;">教师入口</el-button>
        <el-button type="text" v-if="!user" @click="loginVisible = true; registerVisible = false; role = 0" style="color: #f57d35;">学生入口</el-button>
        <router-link :to="{name: 'person', params: {id: 1}}" v-if="user">
            <span><img class="avatar" src="http://img5.imgtn.bdimg.com/it/u=149279704,350945725&fm=11&gp=0.jpg" alt=""></span>
        </router-link>
      </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;;
  color: #333;
  background: green;
  .logo_name{

  }
  .search{

  }
  .person{
    display: flex;
    align-items: center;
    .dropdown{
      .el-dropdown-link {
        cursor: pointer;
        color: #333;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
    .message{
      color: #ff9a00;
      margin: 0 10px;
    }
    .avatar{
      width: 50px;
      height: 50px;
      border-radius: 25px;
    }
  }
  .dialog-bottom{
    /deep/ .el-form-item__content{
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

<script>
import {register, login} from '@/api/home'
export default {
  // name: 'header',
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        // callback(new Error('请再次输入密码'))
        // this.$message({
        //   message: '请再次输入密码!',
        //   type: 'warning'
        // })
      } else if (value !== this.ruleForm.password) {
        // callback(this.$message({
        //   message: '两次输入密码不一致!',
        //   type: 'warning'
        // }))
      } else {
        callback()
      }
    }
    return {
      learnOptions: [{
        value: '选项1',
        label: '黄金糕'
      }],
      learnValue: '',
      searchWords: '',
      user: '',
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        checkPass: ''
      },
      loginVisible: false,
      registerVisible: false,
      registerrules: {
        checkPass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      },
      role: 0
    }
  },
  mounted () {
    // localStorage.setItem('user', 'zqian')
    // this.user = localStorage.getItem('user')
  },
  methods: {
    backHome () {
      this.$router.push({
        path: '/'
      })
    },
    handleCommand (command) {
      this.$message('click on item ' + command)
    },
    register () {
      this.registerForm.role = this.role
      register(this.registerForm).then(res => {
        if (res.code === 0) {
          this.$alert(res.message, '注册', {
            confirmButtonText: '登陆',
            callback: action => {
              this.registerVisible = false
              this.loginVisible = true
            }
          })
        } else {
          this.$message({
            message: res.message,
            type: 'warning'
          })
        }
      })
    },
    login () {
      this.loginForm.role = this.role
      login(this.loginForm).then(res => {
        this.$message({
          message: res.message
        })
        if (res.code === 0) {
          this.loginVisible = false
          sessionStorage.setItem('userInfo', JSON.stringify(res.userInfo))
          this.user = res.userInfo
          if (this.user.role === 1) {
            console.log(sessionStorage)
            this.$router.push({
              path: '/teacher'
            })
          }
        }
      })
    }
  }
}
</script>
