import React from "react";
import { BeatLoader } from "react-spinners";

const SubmitButton = ({ isLoading, className = "button primary circle px-4", onClick, children = "Konfirmasi", disabled, type }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick} disabled={false}>
        {isLoading ? <BeatLoader size={8} margin={3} color="white" /> : children}
      </button>
    </>
  );
};

export default SubmitButton;
