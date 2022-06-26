import { ref } from "vue";
import PageModal from "@/components/pageModal/src/pageModal.vue";

type CallBackFn = () => void;
const usePageModal = (editCb?: CallBackFn, addCb?: CallBackFn) => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>();
  const defaultInfo = ref({});
  const editPageData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    editCb && editCb();
  };
  const addPageData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    addCb && addCb();
  };
  return { pageModalRef, defaultInfo, editPageData, addPageData };
};
export default usePageModal;
