import { IForm } from "@/components/commonForm";

const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: { padding: "12px 24px" },
  formItems: [
    {
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id"
    },
    {
      field: "username",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入密码"
    },
    {
      field: "sport",
      type: "select",
      label: "喜欢的运动",
      placeholder: "请选择喜欢的运动",
      selectOptions: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "football" }
      ]
    },
    {
      field: "createTime",
      type: "datepicker",
      label: "创建时间",
      dateOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
};

interface IPropListConfig {
  prop: string;
  label: string;
  minWidth: string;
  slotName?: string;
}

const propListConfig: IPropListConfig[] = [
  { prop: "id", label: "ID", minWidth: "100" },
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "手机号码", minWidth: "100" },
  { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
  { prop: "createAt", label: "创建时间", minWidth: "250", slotName: "createAt" },
  { prop: "updateAt", label: "更新时间", minWidth: "250", slotName: "updateAt" }
];

export { searchFormConfig, propListConfig };
