import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MapPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.querySelector("#portal-map")) : null;
};

export default MapPortal;
