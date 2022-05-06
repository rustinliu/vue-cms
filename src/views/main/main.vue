<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '200px'" class="main-aside">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavMenu from "@/components/navMenu/navMenu.vue";
import NavHeader from "@/components/navHeader/navHeader.vue";

export default defineComponent({
  components: { NavHeader, NavMenu },
  setup() {
    const isCollapse = ref(false);
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold;
    };
    return {
      handleFoldChange,
      isCollapse
    };
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
  background: #f0f2f5;
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
      margin: 10px;
      color: #333;
      align-items: center;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
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
