import { useState } from "react";
import dynamic from "next/dynamic";
const DropifyImage = dynamic(() => import("../inputs/DropifyImage"));
// const SummerNote = dynamic(() => import("/components/common/SummerNote"));
import ReactRating from "react-rating";
import ReactSelect from "react-select";
const Maps = dynamic(() => import("../inputs/Maps"));
const CurrencyFormat = dynamic(() => import("react-currency-format"));
import SelectInput from "@/core/inputs/SelectInput";
import TouchSpinInput from "../inputs/TouchSpinInput";
import DateRangeInput from "../inputs/DateRangeInput";
import MapsSearchBox from "../inputs/MapsSearchBox";
import DatePicker from "../inputs/DatePicker";

const CustomInput = (props) => {
  const { error, type, className, name = null, onChange, value, placeholder, checked } = props;
  const [isChecked, setIsChecked] = useState(false);

  function passToggle(props) {
    var x = document.getElementById(props.id);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function getClasses(customClasses) {
    let classes = "";
    if (error?.[name]) classes += "is-invalid ";
    if (customClasses) classes += customClasses;

    return classes;
  }

  function handleCheckbox({ target }) {
    onChange({ target: { name: target.name, value: target.checked ? 1 : 0 } });
  }

  if (type === "select") return <SelectInput {...props} className={getClasses(className)} />;
  else if (type === "checkbox") return <input {...props} onChange={handleCheckbox} checked={checked} />;
  else if (type == "currency")
    return (
      <>
        <CurrencyFormat
          {...props}
          onValueChange={({ value }) => {
            try {
              onChange({ target: { name, value } });
            } catch (err) {}
          }}
          onChange={() => {}}
          className={getClasses(className)}
          thousandSeparator={true}
          prefix={"Rp. "}
        />
        {error?.[name] && <small className="invalid-feedback">{error[name]}</small>}
      </>
    );
  else if (type === "textarea")
    return (
      <>
        <textarea {...props} className={getClasses(className)} />
        {error?.[name] && <small className="invalid-feedback">{error[name]}</small>}
      </>
    );
  else if (type === "image") return <DropifyImage id={name} onChange={onChange} value={value} />;
  // else if (type === "editor") return <SummerNote id={name} value={value} />;
  else if (type === "maps") return <Maps {...props} error={error} name={name} position={value} containerElement={<div style={{ height: `400px` }} />} googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWBfkScUZc2KJa_CPW25WUYrsm133TWiw&libraries=places" placeholder={placeholder} loadingElement={<div style={{ height: `100%` }} />} mapElement={<div style={{ height: `100%` }} />} onChange={onChange} />;
  else if (type === "mapsearchbox") return <MapsSearchBox {...props} className={getClasses(className)} loadingElement={<div />} googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWBfkScUZc2KJa_CPW25WUYrsm133TWiw&libraries=places" />;
  else if (type === "password")
    return (
      <>
        <input {...props} className={getClasses(className)} />
        <span
          onClick={() => {
            passToggle(props);
            setIsChecked((prev) => !prev);
          }}
          className={`fa fa-fw ${isChecked ? "fa-eye-slash" : "fa-eye"} field-icon toggle-password`}
        />

        {error?.[name] && <small className="invalid-feedback">{error[name]}</small>}
      </>
    );
  else if (type === "radio")
    return (
      <>
        <input {...props} className={getClasses(className)} />

        {error?.[name] && <small className="invalid-feedback">{error[name]}</small>}
      </>
    );
  else if (type === "quantity") return <TouchSpinInput type="text" onChange={onChange} {...props} />;
  else if (type === "daterange") return <DateRangeInput type="text" onChange={onChange} {...props} />;
  else if (type === "rating") return <ReactRating {...props} initialRating={props.value} onChange={(e) => onChange({ target: { name, value: e } })} emptySymbol={<span className="fas fa-star fa-2x" />} fullSymbol={<span className="fas fa-star fa-2x text-warning" />} />;
  else if (type === "selection")
    return (
      <ReactSelect
        {...props}
        options={
          props?.items?.map((row) => {
            return { value: row.id, label: row.name };
          }) ?? []
        }
      />
    );
  else if (type === "datepicker") return <DatePicker {...props} />;

  return (
    <>
      <input {...props} className={getClasses(className)} />
      {error?.[name] && <small className="invalid-feedback">{error[name]}</small>}
    </>
  );
};

export default CustomInput;
