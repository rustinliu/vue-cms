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
      <template v-for="item in propListConfig" :key="item.prop">
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
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
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
    listCount: {
      type: Number,
      default: 0
    },
    propListConfig: {
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
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    }
  },
  emits: ["selectChange", "update:page"],
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      emit("selectChange", value);
    };

    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize });
    };
    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage });
    };

    return {
      handleSelectChange,
      handleSizeChange,
      handleCurrentChange
    };
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
