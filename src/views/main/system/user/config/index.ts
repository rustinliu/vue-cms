import { IForm } from "@/components/commonForm";

const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: { padding: "12px 24px" },
  formItems: [
    {
      type: "input",
      label: "id",
      placeholder: "请输入id"
    },
    {
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      type: "password",
      label: "密码",
      placeholder: "请输入密码"
    },
    {
      type: "select",
      label: "喜欢的运动",
      placeholder: "请选择喜欢的运动",
      selectOptions: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "football" }
      ]
    },
    {
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

export { searchFormConfig };
