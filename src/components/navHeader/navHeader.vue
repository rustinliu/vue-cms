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
      <li class="nav-item">面包屑</li>
    </ul>
    <div class="user-info">
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import userInfo from "./userInfo.vue";

export default defineComponent({
  components: { userInfo },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false);
    const changeFold = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };
    return {
      changeFold,
      isFold
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
