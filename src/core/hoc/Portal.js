import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, selector = "body" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector(selector)) : null;
};

export default Portal;
