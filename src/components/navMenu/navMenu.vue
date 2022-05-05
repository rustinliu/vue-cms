<template>
  <div class="nav-menu">
    <div class="logo">
      <img
        class="img"
        src="~@/assets/img/logo.svg"
        alt="logo"
        :style="collapse ? 'padding: 12px 10px 8px 7px' : 'padding: 12px 10px 8px 36px'"
      />
      <span v-show="!collapse" class="title">后台管理</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#30333c"
      :collapse="collapse"
      text-color="#b7bdc3"
      active-text-color="#ffd04b"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <!-- 二级菜单的标题 -->
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="submenu in item.children" :key="submenu.id">
              <el-menu-item :index="submenu.id + ''">
                <i v-if="submenu.icon" :class="submenu.icon"></i>
                <span>{{ submenu.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "navMenu",
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    const userMenus = computed(() => store.state.login.userMenus);
    return {
      userMenus
    };
  }
});
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  background-color: #30333c;

  .logo {
    display: flex;
    height: 48px;
    //padding: 12px 10px 8px 36px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #30333c !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #30333c !important;
      color: #fff;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #30333c !important;
    color: #fff;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    background-color: #484d5a !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
  background-color: #30333c;
}
</style>
