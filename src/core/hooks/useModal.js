import { useState } from "react";

export default function useModal(initModal, initialData = null) {
  const [modal, setModal] = useState(initModal);
  const [data, setData] = useState(initialData);
  const [isFirstState, setIsFirstState] = useState(false);

  function openModal(name, data = undefined) {
    if (!isFirstState) setIsFirstState(true);

    setData(data);
    setModal((prevModal) => {
      return { ...prevModal, [name]: true };
    });
  }

  function closeModal(name) {
    setData(null);
    setModal({
      ...modal,
      [name]: false,
    });
  }

  return { modal, openModal, closeModal, data, isFirstState };
}
