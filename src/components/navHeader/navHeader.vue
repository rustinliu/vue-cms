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
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
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
  .fold-menu {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
