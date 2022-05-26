import { IForm } from "@/components/commonForm";
import { ITable } from "@/components/commonTable/type";

const searchFormConfig: IForm = {
  itemStyle: { padding: "6px 12px", textAlign: "center" },
  formItems: [
    {
      field: "id",
      type: "input",
      placeholder: "id"
    },
    {
      field: "realname",
      type: "input",
      placeholder: "真实姓名"
    },
    {
      field: "cellphone",
      type: "input",
      placeholder: "手机号"
    },
    {
      field: "enable",
      type: "select",
      placeholder: "用户状态",
      selectOptions: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 }
      ]
    },
    {
      field: "createAt",
      type: "datepicker",
      dateOptions: {
        startPlaceholder: "开始",
        endPlaceholder: "结束",
        type: "daterange"
      }
    }
  ]
};

const contentTableConfig: ITable = {
  title: "用户列表",
  isShowIndexColumn: true,
  isShowSelectColumn: true,
  propListConfig: [
    { prop: "name", label: "用户名", minWidth: "100" },
    { prop: "realname", label: "真实姓名", minWidth: "100" },
    { prop: "cellphone", label: "手机号", minWidth: "100" },
    { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
    { prop: "createAt", label: "创建时间", minWidth: "250", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "250", slotName: "updateAt" },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ]
};

export { searchFormConfig, contentTableConfig };
