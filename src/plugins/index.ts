import type { App } from "vue";
import registerElementPlus from "./element-plus";
import globalProperties from "@/plugins/gloabl-properties";

export function registerPlugins(app: App): void {
  app.use(registerElementPlus);
  app.use(globalProperties);
}
