import { useState } from "react";

export const useTab = (tabDataArr: string[]) => {
  const [selectedTabItem, setSelectedTabItem] = useState<string>(tabDataArr[0]);

  return {
    selectedTabItem,
    setSelectedTabItem,
  };
};
