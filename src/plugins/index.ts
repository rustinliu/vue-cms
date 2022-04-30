import type { App } from "vue";
import registerElementPlus from "./element-plus";

export function registerPlugins(app: App): void {
  app.use(registerElementPlus);
}
