import { IForm } from "@/components/commonForm";
import { ITable } from "@/components/commonTable/type";

const searchFormConfig: IForm = {
  itemStyle: { padding: "6px 12px", textAlign: "center" },
  formItems: [
    {
      field: "商品ID",
      type: "input",
      placeholder: "id"
    },
    {
      field: "name",
      type: "input",
      placeholder: "商品名"
    },
    {
      field: "enable",
      type: "select",
      placeholder: "商品状态",
      selectOptions: [
        { title: "上架", value: 1 },
        { title: "下架", value: 0 }
      ]
    }
  ]
};

const contentTableConfig: ITable = {
  title: "商品列表",
  isShowSelectColumn: true,
  isShowIndexColumn: false,
  propListConfig: [
    { prop: "name", label: "商品名称", minWidth: "80" },
    { prop: "oldPrice", label: "原价格", minWidth: "80", slotName: "oldPrice" },
    { prop: "newPrice", label: "现价格", minWidth: "80", slotName: "newPrice" },
    { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "image" },
    { prop: "status", label: "状态", minWidth: "100", slotName: "status" },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ]
};

export { searchFormConfig, contentTableConfig };
