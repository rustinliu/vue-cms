import type { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import { UserFilled, Share } from "@element-plus/icons";
import {
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElRadio,
  ElLink
} from "element-plus";

const components = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElLink,
  ElRadio,
  ElCheckbox
];

const iconComponents = [UserFilled, Share];

export default function registerElementPlus(app: App): void {
  for (const component of [...components, ...iconComponents]) {
    app.component(component.name, component);
  }
}
