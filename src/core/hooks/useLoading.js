import { useState } from "react";

export default function useLoading(initLoading) {
  const [loading, stateSetLoading] = useState(initLoading);

  function setLoading(name, status) {
    stateSetLoading({
      ...loading,
      [name]: status,
    });
  }

  return { loading, setLoading };
}
