import ReactDatePicker from "react-datepicker";

const DatePicker = (props) => {
  return <ReactDatePicker {...props} selected={props.value} onChange={(e) => props.onChange({ target: { name: props.name, value: e } })} />;
};

export default DatePicker;
