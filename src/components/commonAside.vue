<template>
  <el-menu
    id="menu"
    :router="true"
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#FFFFFF"
    active-text-color="#80ffff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>充电系统管理中心</h3>
    <el-menu-item @click="navigation('/')" index="/">
      <i class="el-icon-odometer"></i>
      <span slot="title">充电桩管理</span>
    </el-menu-item>
    <el-menu-item @click="navigation('/queue')" index="/queue">
      <i class="el-icon-postcard"></i>
      <span slot="title">队列管理</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "menu",
          url: "Home/Home",
        },
        {
          path: "/queue",
          name: "queue",
          label: "队列管理",
          icon: "location",
          url: "Queue/Queue",
        },

      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    navigation(path){
      this.$router.push(path)
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
};
</script>
