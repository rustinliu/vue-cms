<template>
  <div class="nav-header">
    <ul class="nav">
      <li class="nav-item">
        <i
          class="fold-menu"
          :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="changeFold"
        ></i>
      </li>
      <li class="nav-item">
        <pf-breadcrumb :breadcrumbs="breadcrumbs" />
      </li>
    </ul>
    <div class="user-info">
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import userInfo from "./userInfo.vue";
import PfBreadcrumb from "../commonBreadcrumb";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { pathMapToBreadcrumb } from "@/utils/mapMenus";

export default defineComponent({
  components: { userInfo, PfBreadcrumb },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false);
    const changeFold = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    const store = useStore();
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus;
      const route = useRoute();
      const currentPath = route.path;
      return pathMapToBreadcrumb(userMenus, currentPath);
    });
    return {
      changeFold,
      isFold,
      breadcrumbs
    };
  }
});
</script>

<style lang="scss" scoped>
.nav-header {
  width: 100%;
  display: flex;

  .nav {
    display: flex;
    align-items: center;
    flex: 1;

    .nav-item {
      padding: 0 10px;
    }
  }

  .fold-menu {
    font-size: 20px;
    cursor: pointer;
  }

  .user-info {
    padding-right: 20px;
  }
}
</style>
