import { useEffect, useRef } from "react";

const TouchSpinInput = (props) => {
  const ref = useRef();

  useEffect(() => {
    $(ref.current).TouchSpin({
      verticalbuttons: false,
      buttonup_txt: "",
      buttondown_txt: "",
      buttondown_class: "btn btn-outline btn-down-icon",
      buttonup_class: "btn btn-outline btn-up-icon",
      initval: props.value,
      min: props?.min ?? 0,
    });

    $(ref.current).change((e) => {
      if (props?.onChange) props.onChange(e);
    });
  }, []);

  return <input ref={ref} {...props} />;
};

export default TouchSpinInput;
