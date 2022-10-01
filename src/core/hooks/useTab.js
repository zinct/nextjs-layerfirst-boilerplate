import { useState } from "react";

export default function useTab(initTab, initialData = null) {
  const [tab, setTabState] = useState(initTab);
  const [data, setData] = useState(initialData);

  function setTab(newTab, data = null) {
    setData(data);
    setTabState(newTab);
  }

  return { tab, setTab, data };
}
