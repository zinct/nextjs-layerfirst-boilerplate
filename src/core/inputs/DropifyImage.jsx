import React from "react";
import { useEffect } from "react";
import "dropify/dist/css/dropify.min.css";

const DropifyImage = ({ id, value, onChange }) => {
  useEffect(() => {
    $(".dropify").dropify();
  }, []);

  return <input type="file" id={id} className="dropify" name={id} onChange={onChange} data-show-remove="false" data-allowed-file-extensions="png jpg jpeg" data-max-file-size="1M" data-default-file={value} />;
};

export default DropifyImage;
