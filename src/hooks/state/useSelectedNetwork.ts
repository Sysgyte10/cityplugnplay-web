import { useState } from "react";

export const useSelectedNetwork = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedNetworkIndex, setSelectedNetworkIndex] = useState<number>(0);

  return {
    selectedNetwork,
    setSelectedNetwork,
    selectedNetworkIndex,
    setSelectedNetworkIndex,
  };
};
