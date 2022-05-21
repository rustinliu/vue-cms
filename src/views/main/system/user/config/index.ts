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

interface IPropListConfig {
  prop?: string;
  label: string;
  minWidth: string;
  slotName?: string;
}

const propListConfig: IPropListConfig[] = [
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "手机号码", minWidth: "100" },
  { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
  { prop: "createAt", label: "创建时间", minWidth: "250", slotName: "createAt" },
  { prop: "updateAt", label: "更新时间", minWidth: "250", slotName: "updateAt" },
  { label: "操作", minWidth: "120", slotName: "handler" }
];

export { searchFormConfig, propListConfig };
