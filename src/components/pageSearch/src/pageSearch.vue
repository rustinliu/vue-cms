<template>
  <div class="page_search">
    <pf-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h4>高级检索</h4>
      </template>
      <template #footer>
        <div class="footer_btn">
          <el-button>
            <i class="el-icon-refresh"></i>
            重置
          </el-button>
          <el-button type="primary">
            <i class="el-icon-search"></i>
            搜索
          </el-button>
        </div>
      </template>
    </pf-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PfForm from "../../commonForm";

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      default: () => ({})
    }
  },
  components: { PfForm },
  setup() {
    // 对象的双向绑定 要使用ref
    const formData = ref({
      id: "",
      username: "",
      password: "",
      sport: "",
      createTime: ""
    });
    return { formData };
  }
});
</script>

<style lang="scss" scoped>
h2 {
  font-size: 28px;
}

.footer_btn {
  text-align: right;
  padding-bottom: 12px;
  padding-right: 12px;

  > .el-button {
    margin-right: 12px;
    padding: 12px 24px;
  }
}
</style>
