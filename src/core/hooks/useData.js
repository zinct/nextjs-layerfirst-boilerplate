import { useState } from "react";
import objectHelper from "../helpers/objectHelper";

export default function useData(initData) {
  const [data, setData] = useState(initData);

  function inputData({ target }) {
    setData((prev) => {
      return { ...prev, [target.name]: target.value };
    });
  }

  function resetData() {
    const t = objectHelper.setAll(data, "");
    setData(t);
  }

  return { data, setData, inputData, resetData };
}
