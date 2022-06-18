import { ElMessage, ElMessageBox } from "element-plus";

interface IMessageBox {
  titleContent: string;
  thenMessage: string;
  catchMessage: string;
}

export const useMessageBox = (config: IMessageBox, thenFn: () => void) => {
  ElMessageBox.confirm(config.titleContent, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: config.thenMessage
      });
      thenFn();
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: config.catchMessage
      });
    });
};
