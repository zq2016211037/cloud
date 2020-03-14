<template>
  <div class="person">
    <p-header/>
    <div class="content">
      <p-Sidebar/>
      <div class="right">
        <p-SchoolTable/>
        <p-Progress/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Sidebar from '@/components/person/Sidebar'
import SchoolTable from '@/components/person/SchoolTable'
import Progress from '@/components/person/Progress'
export default {
  data () {
    return {
    }
  },
  components: {
    'p-header': Header,
    'p-Sidebar': Sidebar,
    'p-SchoolTable': SchoolTable,
    'p-Progress': Progress
  }
}
</script>

<style scoped lang="less">
.person{
  height: 100%;
  background: #f4f4f4;
  .content{
    margin: 30px 10%;
    display: flex
  }
}
</style>
