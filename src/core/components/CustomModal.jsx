import React, { useEffect, useRef } from "react";
import Portal from "@/core/hoc/Portal";

const CustomModal = ({ className, children, isOpen, onClose, modalSize = "md" }) => {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) $(modalRef.current).show();
    else $(modalRef.current).hide();
  }, [isOpen]);

  function getClasses(customClasses) {
    let classes = "modal ";
    if (customClasses) classes += customClasses;

    return classes;
  }

  return (
    <Portal>
      <div className="modal" ref={modalRef} tabIndex={-1} data-backdrop="static" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className={`modal-content modal-${modalSize}`}>{children}</div>
      </div>
    </Portal>
  );
};

const ModalHeader = ({ children }) => {
  return <div className="modal-header">{children}</div>;
};

const ModalBody = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

export { ModalBody, ModalFooter, ModalHeader };
export default CustomModal;
