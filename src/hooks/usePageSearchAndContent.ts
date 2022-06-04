import { ref } from "vue";
import PageContent from "@/components/pageContent/src/pageContent.vue";

const usePageSearchAndContent = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo);
  };

  return [handleQueryClick, handleResetClick, pageContentRef];
};

export default usePageSearchAndContent;
