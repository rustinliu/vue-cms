import { ref } from "vue";
import PageContent from "@/components/pageContent/src/pageContent.vue";

const usePageSearchAndContent = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();
  const handleResetClick = () => {
    pageContentRef.value?.getPageData();
  };
  const handleQueryClick = (queryInfo: any) => {
    console.log("fuck queryInfo", queryInfo);
    console.log("pageContentRef", pageContentRef.value);
    pageContentRef.value?.getPageData(queryInfo);
  };

  return { handleResetClick, handleQueryClick, pageContentRef }; // k坑， 后边解析时 顺序不能错
};

export default usePageSearchAndContent;
