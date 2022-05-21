type IFormType = "input" | "password" | "datepicker" | "select";

export interface IFormItem {
  field: string;
  type: IFormType;
  rules?: any[];
  label?: string;
  placeholder?: string;
  selectOptions?: any[];
  dateOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: any;
}
