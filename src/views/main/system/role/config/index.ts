import { ITable } from "@/components/commonTable/type";
import { IForm } from "@/components/commonForm";

const searchFormConfig: IForm = {
  itemStyle: { padding: "6px 12px", textAlign: "center" },
  formItems: [
    {
      field: "id",
      type: "input",
      placeholder: "id"
    },
    {
      field: "username",
      type: "input",
      placeholder: "用户名"
    },
    {
      field: "password",
      type: "password",
      placeholder: "密码"
    },
    {
      field: "sport",
      type: "select",
      placeholder: "喜欢的运动",
      selectOptions: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "football" }
      ]
    },
    {
      field: "createTime",
      type: "datepicker",
      dateOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
};

const contentTableConfig: ITable = {
  title: "角色列表",
  isShowIndexColumn: true,
  isShowSelectColumn: true,
  propListConfig: [
    { prop: "name", label: "角色名", minWidth: "100" },
    { prop: "intro", label: "权限", minWidth: "100" },
    { prop: "createAt", label: "创建时间", minWidth: "250", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "250", slotName: "updateAt" },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ]
};
export { contentTableConfig, searchFormConfig };
