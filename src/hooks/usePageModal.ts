import { ref } from "vue";
import PageModal from "@/components/pageModal/src/pageModal.vue";

const usePageModal = () => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  const editPageData = (item: any) => {
    console.log("user item", item);
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
  };
  const addPageData = () => {
    console.log("点击了 新建");
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
  };
  return { pageModalRef, defaultInfo, editPageData, addPageData };
};
export default usePageModal;
