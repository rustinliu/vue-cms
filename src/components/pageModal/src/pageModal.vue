<template>
  <div class="page-modal">
    <el-dialog title="提示" v-model="dialogVisible" width="30%" center>
      <pf-form v-bind="modalConfig" v-model="formData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PfForm from "@/components/commonForm";

export default defineComponent({
  components: { PfForm },
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const dialogVisible = ref(true);
    const formData = ref({});
    return {
      dialogVisible,
      formData
    };
  }
});
</script>

<style lang="scss" scoped></style>
