import type { App } from "vue";
import formUtcString from "@/utils/formUtcString";

export default function globalProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formUtcString(value);
    }
  };
}
