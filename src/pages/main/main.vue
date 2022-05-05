<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px" class="main-aside">
        <nav-menu />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavMenu from "@/components/navMenu/navMenu.vue";

export default defineComponent({
  components: { NavMenu },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.main-content {
  .main-aside {
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
    cursor: pointer;
    background-color: #344058;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .page {
    .page-header {
      display: flex;
      height: 48px !important;
      color: #333;
      text-align: center;
      align-items: center;
    }

    .page-content {
      color: #333;
      text-align: center;
      background-color: #f0f2f5;
      height: calc(100% - 48px);
    }
  }
}
</style>
