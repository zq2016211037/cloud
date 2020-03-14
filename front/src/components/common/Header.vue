<template>
  <div id="header">
      <div class="logo_name">
          <span class="logo"></span>
          <span class="name">云课堂</span>
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
            <el-dropdown-item command="a">黄金糕</el-dropdown-item>
            <el-dropdown-item command="b">狮子头</el-dropdown-item>
            <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span><i class="el-icon-message-solid message"></i></span>
        <router-link :to="{name: 'person', params: {id: 1}}">
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
}
</style>

<script>
export default {
  // name: 'header',
  data () {
    return {
      learnOptions: [{
        value: '选项1',
        label: '黄金糕'
      }],
      learnValue: '',
      searchWords: ''
    }
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>
