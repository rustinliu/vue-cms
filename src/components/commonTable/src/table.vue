<template>
  <section class="pf_table">
    <section class="header">
      <slot name="header">
        <span class="title"> {{ title }} </span>
        <span class="header-handle">
          <slot name="headerHandle"></slot>
        </span>
      </slot>
    </section>
    <el-table :data="listData" stripe style="width: 100%" @selection-change="handleSelectChange">
      <el-table-column
        v-if="isShowSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="isShowIndexColumn"
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <section class="footer">
      <slot name="footer"></slot>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    },
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    isShowIndexColumn: {
      type: Boolean,
      default: false
    },
    isShowSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ["selectChange"],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit("selectChange", value);
    };
    return { handleSelectChange };
  }
});
</script>

<style lang="scss" scoped>
.pf_table {
  padding: 20px;
  border-top: 24px solid #f0f2f5;

  .header {
    display: flex;
    height: 45px;
    padding: 0 12px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  .footer {
    margin-top: 15px;

    .el-pagination {
      text-align: right;
    }
  }
}
</style>
