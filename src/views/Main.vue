<template>
  <el-container style="height:100%">
    <el-aside width="auto"></el-aside>
    <common-aside></common-aside>
<el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import CommonAside from '../components/CommonAside.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  components:{
    CommonAside
  },
  data() {
    return {};
  },

};
</script>
<style type='less' scoped>
.el-header {
    background-color: black;
}
.el-main {
    padding-top:0;
}
</style>



